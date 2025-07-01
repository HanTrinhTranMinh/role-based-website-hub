
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, Package, Clock, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Chào mừng trở lại, {user?.name}!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Cảm ơn bạn đã tin tưởng dịch vụ spa của chúng tôi
          </p>
          <Link to="/appointments">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Calendar className="mr-2 h-5 w-5" />
              Đặt Lịch Hẹn Ngay
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lịch hẹn sắp tới</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Trong 7 ngày tới</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Điểm tích lũy</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250</div>
              <p className="text-xs text-muted-foreground">+150 điểm tháng này</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Thẻ hội viên</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Gold</div>
              <p className="text-xs text-muted-foreground">Hết hạn 31/12/2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ưu đãi có sẵn</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Voucher khả dụng</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Lịch Hẹn Sắp Tới
              </CardTitle>
              <CardDescription>Xem và quản lý lịch hẹn của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Massage Toàn Thân</p>
                    <p className="text-sm text-gray-600">Mai, 14:00</p>
                  </div>
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">Chăm Sóc Da Mặt</p>
                    <p className="text-sm text-gray-600">Thứ 5, 16:30</p>
                  </div>
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <Link to="/appointments">
                <Button variant="outline" className="w-full mt-4">
                  Xem Tất Cả
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="mr-2 h-5 w-5" />
                Ưu Đãi Đặc Biệt
              </CardTitle>
              <CardDescription>Khuyến mãi dành riêng cho bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="font-medium text-purple-800">Giảm 30% Massage</p>
                  <p className="text-sm text-purple-600">Có hiệu lực đến 15/12</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-medium text-orange-800">Combo Chăm Sóc Da</p>
                  <p className="text-sm text-orange-600">Mua 2 tặng 1</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Xem Thêm Ưu Đãi
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Điểm Thưởng
              </CardTitle>
              <CardDescription>Tích lũy và sử dụng điểm thưởng</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-indigo-600">1,250</div>
                <p className="text-sm text-gray-600">Điểm hiện có</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cần thêm:</span>
                  <span className="font-medium">250 điểm</span>
                </div>
                <div className="flex justify-between">
                  <span>Để lên hạng:</span>
                  <span className="font-medium">Platinum</span>
                </div>
              </div>
              <Link to="/membership">
                <Button variant="outline" className="w-full mt-4">
                  Chi Tiết Thành Viên
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Services Section */}
        <Card>
          <CardHeader>
            <CardTitle>Dịch Vụ Phổ Biến</CardTitle>
            <CardDescription>Các dịch vụ được yêu thích nhất tại spa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💆‍♀️</span>
                </div>
                <h3 className="font-semibold mb-2">Massage Thư Giãn</h3>
                <p className="text-sm text-gray-600 mb-3">Massage toàn thân giúp thư giãn và giảm căng thẳng</p>
                <p className="font-bold text-indigo-600">500.000 VNĐ</p>
              </div>

              <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧴</span>
                </div>
                <h3 className="font-semibold mb-2">Chăm Sóc Da Mặt</h3>
                <p className="text-sm text-gray-600 mb-3">Làm sạch và dưỡng ẩm cho da mặt</p>
                <p className="font-bold text-indigo-600">350.000 VNĐ</p>
              </div>

              <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💅</span>
                </div>
                <h3 className="font-semibold mb-2">Nail & Pedicure</h3>
                <p className="text-sm text-gray-600 mb-3">Chăm sóc móng tay và móng chân chuyên nghiệp</p>
                <p className="font-bold text-indigo-600">200.000 VNĐ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDashboard;
