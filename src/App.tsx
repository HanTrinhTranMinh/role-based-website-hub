import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import GuestLayout from "@/components/layout/GuestLayout";
import CustomerLayout from "@/components/layout/CustomerLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LoginForm from "@/components/auth/LoginForm";
import HomePage from "@/pages/HomePage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import CustomerDashboard from "@/pages/customer/CustomerDashboard";
import AppointmentBooking from "@/pages/customer/AppointmentBooking";
import CustomerProfile from "@/pages/customer/CustomerProfile";
import ServiceCatalog from "@/pages/customer/ServiceCatalog";
import AppointmentManagement from "@/pages/receptionist/AppointmentManagement";
import PaymentProcessing from "@/pages/receptionist/PaymentProcessing";
import CustomerManagement from "@/pages/receptionist/CustomerManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <GuestLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </GuestLayout>
    );
  }

  // Customer gets special layout
  if (user?.role === 'customer') {
    return (
      <CustomerLayout>
        <Routes>
          <Route path="/" element={<CustomerDashboard />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/services" element={<ServiceCatalog />} />
          <Route path="/appointments" element={<AppointmentBooking />} />
          <Route path="/profile" element={<CustomerProfile />} />
          <Route path="/membership" element={
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Thẻ Hội Viên</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CustomerLayout>
    );
  }

  // Other roles get dashboard layout
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Receptionist routes */}
        <Route path="/appointments" element={
          <ProtectedRoute allowedRoles={['receptionist']}>
            <AppointmentManagement />
          </ProtectedRoute>
        } />
        
        <Route path="/payments" element={
          <ProtectedRoute allowedRoles={['receptionist']}>
            <PaymentProcessing />
          </ProtectedRoute>
        } />
        
        <Route path="/customers" element={
          <ProtectedRoute allowedRoles={['receptionist']}>
            <CustomerManagement />
          </ProtectedRoute>
        } />

        {/* Other role-specific routes */}
        <Route path="/promotions" element={
          <ProtectedRoute allowedRoles={['marketing']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý khuyến mãi</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/services" element={
          <ProtectedRoute allowedRoles={['service_manager']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý dịch vụ</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/treatments" element={
          <ProtectedRoute allowedRoles={['therapist']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý liệu trình</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/inventory" element={
          <ProtectedRoute allowedRoles={['warehouse']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý kho</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/revenue" element={
          <ProtectedRoute allowedRoles={['accountant']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý doanh thu</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/financial-reports" element={
          <ProtectedRoute allowedRoles={['accountant']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Báo cáo tài chính</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/permissions" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý quyền</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/accounts" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý tài khoản</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="/reports" element={
          <ProtectedRoute allowedRoles={['manager']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Báo cáo thống kê</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </DashboardLayout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
