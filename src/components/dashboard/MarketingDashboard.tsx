
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, TrendingUp, Users, Eye } from 'lucide-react';

const MarketingDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Marketing
        </h1>
        <p className="text-gray-600 mt-2">
          Quản lý và theo dõi các chương trình khuyến mãi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khuyến mãi đang chạy</CardTitle>
            <Gift className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 từ tuần trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lượt xem chiến dịch</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+18% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khách sử dụng KM</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tỷ lệ chuyển đổi</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.4%</div>
            <p className="text-xs text-muted-foreground">+0.8% so với tháng trước</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Khuyến mãi hiệu quả nhất</CardTitle>
            <CardDescription>Top 5 chương trình có tỷ lệ sử dụng cao</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Giảm 30% dịch vụ massage</span>
                <span className="text-sm text-green-600 font-semibold">89 lượt</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Combo trị liệu 3 buổi</span>
                <span className="text-sm text-green-600 font-semibold">67 lượt</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tặng dịch vụ chăm sóc da</span>
                <span className="text-sm text-green-600 font-semibold">43 lượt</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lịch chạy khuyến mãi</CardTitle>
            <CardDescription>Các chương trình sắp diễn ra</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-sm font-semibold">Black Friday Sale</h4>
                <p className="text-xs text-muted-foreground">Bắt đầu: 24/11/2024</p>
                <p className="text-xs text-gray-600">Giảm 50% toàn bộ dịch vụ</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-sm font-semibold">Tết Nguyên Đán</h4>
                <p className="text-xs text-muted-foreground">Bắt đầu: 28/01/2025</p>
                <p className="text-xs text-gray-600">Tặng voucher 500k</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketingDashboard;
