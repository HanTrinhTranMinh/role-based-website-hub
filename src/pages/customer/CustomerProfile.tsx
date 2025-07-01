
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import { User, Calendar, CreditCard, Gift, Clock, CheckCircle } from 'lucide-react';

const CustomerProfile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '0987654321',
    birthday: '1990-01-01',
    address: 'Hà Nội, Việt Nam'
  });

  const handleUpdateProfile = () => {
    toast({
      title: "Cập nhật thành công",
      description: "Thông tin cá nhân đã được cập nhật"
    });
  };

  // Mock data
  const appointments = [
    { id: 1, service: 'Massage Thư Giãn', date: '2024-12-15', time: '14:00', status: 'confirmed', price: 500000 },
    { id: 2, service: 'Chăm Sóc Da Mặt', date: '2024-12-18', time: '16:30', status: 'pending', price: 350000 },
    { id: 3, service: 'Nail & Pedicure', date: '2024-12-10', time: '10:00', status: 'completed', price: 200000 },
  ];

  const loyaltyProgram = {
    currentPoints: 1250,
    tier: 'Gold',
    nextTier: 'Platinum',
    pointsToNext: 250,
    totalSpent: 2500000,
    visitsThisMonth: 3
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Đã xác nhận</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Chờ xác nhận</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800">Hoàn thành</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Thông Tin Cá Nhân</h1>
        <p className="text-gray-600">Quản lý thông tin và xem lịch sử dịch vụ</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Hồ Sơ
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Lịch Hẹn
          </TabsTrigger>
          <TabsTrigger value="membership" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Thành Viên
          </TabsTrigger>
          <TabsTrigger value="rewards" className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Ưu Đãi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Thông Tin Cá Nhân</CardTitle>
                <CardDescription>Cập nhật thông tin cá nhân của bạn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Họ tên</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Ngày sinh</Label>
                    <Input
                      id="birthday"
                      type="date"
                      value={profileData.birthday}
                      onChange={(e) => setProfileData({...profileData, birthday: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Địa chỉ</Label>
                  <Input
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                  />
                </div>
                <Button onClick={handleUpdateProfile} className="w-full">
                  Cập Nhật Thông Tin
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>Ảnh đại diện của bạn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-2xl">
                      {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <Button variant="outline" className="w-full">
                  Thay Đổi Avatar
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Lịch Hẹn Của Tôi</CardTitle>
              <CardDescription>Xem và quản lý các lịch hẹn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{appointment.service}</h3>
                        <p className="text-sm text-gray-600">
                          {appointment.date} - {appointment.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold">{appointment.price.toLocaleString('vi-VN')} VNĐ</p>
                        {getStatusBadge(appointment.status)}
                      </div>
                      <Button variant="outline" size="sm">
                        Chi Tiết
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="membership">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Thông Tin Thành Viên
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{loyaltyProgram.tier}</span>
                  </div>
                  <h3 className="text-xl font-bold">Hạng {loyaltyProgram.tier}</h3>
                  <p className="text-gray-600">Thành viên từ 2023</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Điểm hiện tại:</span>
                    <span className="font-semibold">{loyaltyProgram.currentPoints.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hạng hiện tại:</span>
                    <Badge className="bg-yellow-100 text-yellow-800">{loyaltyProgram.tier}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Cần thêm để lên {loyaltyProgram.nextTier}:</span>
                    <span className="font-semibold">{loyaltyProgram.pointsToNext} điểm</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thống Kê</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{loyaltyProgram.visitsThisMonth}</div>
                    <p className="text-sm text-gray-600">Lần sử dụng tháng này</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {loyaltyProgram.totalSpent.toLocaleString('vi-VN', { notation: 'compact' })}
                    </div>
                    <p className="text-sm text-gray-600">Tổng chi tiêu</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tiến trình lên hạng</span>
                    <span>{Math.round((loyaltyProgram.currentPoints / (loyaltyProgram.currentPoints + loyaltyProgram.pointsToNext)) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${(loyaltyProgram.currentPoints / (loyaltyProgram.currentPoints + loyaltyProgram.pointsToNext)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rewards">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ưu Đãi Có Sẵn</CardTitle>
                <CardDescription>Các voucher bạn có thể sử dụng</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-purple-200 bg-purple-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-purple-800">Giảm 30% Massage</h3>
                    <Badge className="bg-purple-100 text-purple-800">Có sẵn</Badge>
                  </div>
                  <p className="text-sm text-purple-600 mb-2">Áp dụng cho tất cả dịch vụ massage</p>
                  <p className="text-xs text-gray-600">Hết hạn: 31/12/2024</p>
                </div>
                
                <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-orange-800">Combo Chăm Sóc Da</h3>
                    <Badge className="bg-orange-100 text-orange-800">Có sẵn</Badge>
                  </div>
                  <p className="text-sm text-orange-600 mb-2">Mua 2 tặng 1 dịch vụ chăm sóc da</p>
                  <p className="text-xs text-gray-600">Hết hạn: 15/01/2025</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lịch Sử Ưu Đãi</CardTitle>
                <CardDescription>Các ưu đãi đã sử dụng</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium">Giảm 20% Nail</p>
                    <p className="text-sm text-gray-600">Sử dụng ngày 01/12/2024</p>
                  </div>
                  <span className="text-sm text-green-600">-40.000 VNĐ</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div className="flex-1">
                    <p className="font-medium">Tặng 100 điểm</p>
                    <p className="text-sm text-gray-600">Sinh nhật - 15/11/2024</p>
                  </div>
                  <span className="text-sm text-green-600">+100 điểm</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerProfile;
