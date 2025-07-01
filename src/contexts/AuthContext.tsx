
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, AuthContextType } from '@/types/user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: Record<string, User> = {
  'customer@demo.com': {
    id: '1',
    name: 'Khách Hàng Demo',
    email: 'customer@demo.com',
    role: 'customer'
  },
  'receptionist@demo.com': {
    id: '2',
    name: 'Lễ Tân Demo',
    email: 'receptionist@demo.com',
    role: 'receptionist'
  },
  'marketing@demo.com': {
    id: '3',
    name: 'Marketing Demo',
    email: 'marketing@demo.com',
    role: 'marketing'
  },
  'service@demo.com': {
    id: '4',
    name: 'Quản Lý Dịch Vụ Demo',
    email: 'service@demo.com',
    role: 'service_manager'
  },
  'therapist@demo.com': {
    id: '5',
    name: 'Nhân Viên Trị Liệu Demo',
    email: 'therapist@demo.com',
    role: 'therapist'
  },
  'warehouse@demo.com': {
    id: '6',
    name: 'Thủ Kho Demo',
    email: 'warehouse@demo.com',
    role: 'warehouse'
  },
  'accountant@demo.com': {
    id: '7',
    name: 'Kế Toán Demo',
    email: 'accountant@demo.com',
    role: 'accountant'
  },
  'manager@demo.com': {
    id: '8',
    name: 'Người Quản Lý Demo',
    email: 'manager@demo.com',
    role: 'manager'
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication - in real app, this would call an API
    const foundUser = mockUsers[email.toLowerCase()];
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
