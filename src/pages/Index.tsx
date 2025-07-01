
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import HomePage from './HomePage';
import Dashboard from './Dashboard';

const Index = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return <HomePage />;
};

export default Index;
