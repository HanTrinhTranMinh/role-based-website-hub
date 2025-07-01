
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Đăng nhập thành công",
        description: "Chào mừng bạn quay trở lại!"
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Lỗi đăng nhập",
        description: "Email hoặc mật khẩu không đúng",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Mock accounts for demo
  const demoAccounts = [
    { email: 'customer@demo.com', role: 'Khách Hàng' },
    { email: 'receptionist@demo.com', role: 'Lễ Tân' },
    { email: 'marketing@demo.com', role: 'Marketing' },
    { email: 'service@demo.com', role: 'Quản Lý Dịch Vụ' },
    { email: 'therapist@demo.com', role: 'Nhân Viên Trị Liệu' },
    { email: 'warehouse@demo.com', role: 'Thủ Kho' },
    { email: 'accountant@demo.com', role: 'Kế Toán' },
    { email: 'manager@demo.com', role: 'Người Quản Lý' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Đăng Nhập</CardTitle>
            <CardDescription>Nhập thông tin để truy cập hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tài Khoản Demo</CardTitle>
            <CardDescription>Click để sử dụng tài khoản mẫu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {demoAccounts.map((account) => (
                <Button
                  key={account.email}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEmail(account.email);
                    setPassword('demo123');
                  }}
                  className="justify-start text-left"
                >
                  <div>
                    <div className="font-medium">{account.role}</div>
                    <div className="text-xs text-muted-foreground">{account.email}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
