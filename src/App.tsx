import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import GuestLayout from "@/components/layout/GuestLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LoginForm from "@/components/auth/LoginForm";
import HomePage from "@/pages/HomePage";
import Dashboard from "@/pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <GuestLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Trang đăng ký</h1>
                <p className="text-gray-600">Tính năng đăng ký sẽ được phát triển sau</p>
              </div>
            </div>
          } />
          <Route path="/about" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Về chúng tôi</h1>
                <p className="text-gray-600">Thông tin về công ty</p>
              </div>
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Liên hệ</h1>
                <p className="text-gray-600">Thông tin liên hệ</p>
              </div>
            </div>
          } />
          <Route path="*" element={<LoginForm />} />
        </Routes>
      </GuestLayout>
    );
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Customer routes */}
        <Route path="/appointments" element={
          <ProtectedRoute allowedRoles={['customer', 'receptionist']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý lịch hẹn</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />
        
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Thông tin cá nhân</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />
        
        <Route path="/membership" element={
          <ProtectedRoute allowedRoles={['customer']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Thẻ hội viên</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

        {/* Other role-specific routes */}
        <Route path="/payments" element={
          <ProtectedRoute allowedRoles={['receptionist']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Xử lý thanh toán</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />
        
        <Route path="/customers" element={
          <ProtectedRoute allowedRoles={['receptionist']}>
            <div className="text-center py-8">
              <h1 className="text-2xl font-bold mb-4">Quản lý khách hàng</h1>
              <p className="text-gray-600">Tính năng đang được phát triển</p>
            </div>
          </ProtectedRoute>
        } />

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
