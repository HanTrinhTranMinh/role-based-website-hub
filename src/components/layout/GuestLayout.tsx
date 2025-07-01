
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Về Chúng Tôi', href: '/about' },
    { name: 'Liên Hệ', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                Spa Management
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/register">
                <Button variant="outline" size="sm">
                  Đăng Ký
                </Button>
              </Link>
              <Link to="/login">
                <Button size="sm">
                  Đăng Nhập
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>&copy; 2024 Spa Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestLayout;
