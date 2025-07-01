
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Star, Clock, TrendingUp } from 'lucide-react';

const ServiceManagerDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Quản Lý Dịch Vụ
        </h1>
        <p className="text-gray-600 mt-2">
          Tổng quan quản lý và phát triển dịch vụ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng dịch vụ</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 dịch vụ mới tháng này</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đánh giá trung bình</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">Từ 1,234 đánh giá</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thời gian TB</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75 phút</div>
            <p className="text-xs text-muted-foreground">Thời gian dịch vụ TB</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu/dịch vụ</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M</div>
            <p className="text-xs text-muted-foreground">+15% so với tháng trước</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dịch vụ phổ biến</CardTitle>
            <CardDescription>Top 5 dịch vụ được đặt nhiều nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Massage toàn thân', bookings: 156, rating: 4.9 },
                { name: 'Chăm sóc da mặt', bookings: 132, rating: 4.8 },
                { name: 'Trị liệu cột sống', bookings: 98, rating: 4.7 },
                { name: 'Detox cơ thể', bookings: 87, rating: 4.6 },
                { name: 'Yoga trị liệu', bookings: 76, rating: 4.8 }
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">{service.name}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{service.rating}</span>
                    </div>
                  </div>
                  <span className="text-sm text-blue-600 font-semibold">{service.bookings} lượt</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dịch vụ mới</CardTitle>
            <CardDescription>Dịch vụ được thêm gần đây</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-sm font-semibold">Trị liệu ánh sáng LED</h4>
                <p className="text-xs text-muted-foreground">Thêm ngày: 15/11/2024</p>
                <p className="text-xs text-gray-600">Giá: 800,000 VNĐ - 90 phút</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-sm font-semibold">Massage đá nóng</h4>
                <p className="text-xs text-muted-foreground">Thêm ngày: 10/11/2024</p>
                <p className="text-xs text-gray-600">Giá: 1,200,000 VNĐ - 120 phút</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-sm font-semibold">Liệu pháp âm thanh</h4>
                <p className="text-xs text-muted-foreground">Thêm ngày: 05/11/2024</p>
                <p className="text-xs text-gray-600">Giá: 600,000 VNĐ - 60 phút</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceManagerDashboard;
