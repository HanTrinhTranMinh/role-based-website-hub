
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, FileText, DollarSign } from 'lucide-react';

const AccountantDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Kế Toán
        </h1>
        <p className="text-gray-600 mt-2">
          Quản lý tài chính và báo cáo doanh thu
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu tháng</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245.8M</div>
            <p className="text-xs text-muted-foreground">+18% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chi phí tháng</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2M</div>
            <p className="text-xs text-muted-foreground">-5% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lợi nhuận</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156.6M</div>
            <p className="text-xs text-muted-foreground">Tỷ lệ lợi nhuận: 63.7%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Báo cáo chờ</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Cần hoàn thành trong tuần</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Doanh thu theo dịch vụ</CardTitle>
            <CardDescription>Top 5 dịch vụ mang lại doanh thu cao nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { service: 'Massage toàn thân', revenue: 45.8, percentage: 18.6 },
                { service: 'Trị liệu cột sống', revenue: 38.2, percentage: 15.5 },
                { service: 'Chăm sóc da mặt', revenue: 32.4, percentage: 13.2 },
                { service: 'Detox cơ thể', revenue: 28.7, percentage: 11.7 },
                { service: 'Yoga trị liệu', revenue: 24.3, percentage: 9.9 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">{item.service}</span>
                    <p className="text-xs text-muted-foreground">{item.percentage}% tổng doanh thu</p>
                  </div>
                  <span className="text-sm text-green-600 font-semibold">{item.revenue}M VNĐ</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chi phí theo danh mục</CardTitle>
            <CardDescription>Phân tích chi phí tháng 11/2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: 'Lương nhân viên', amount: 32.5, percentage: 36.4 },
                { category: 'Nguyên vật liệu', amount: 18.7, percentage: 21.0 },
                { category: 'Tiện ích (điện, nước)', amount: 12.8, percentage: 14.3 },
                { category: 'Marketing', amount: 9.4, percentage: 10.5 },
                { category: 'Bảo trì thiết bị', amount: 8.2, percentage: 9.2 },
                { category: 'Khác', amount: 7.6, percentage: 8.5 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium">{item.category}</span>
                    <p className="text-xs text-muted-foreground">{item.percentage}% tổng chi phí</p>
                  </div>
                  <span className="text-sm text-red-600 font-semibold">{item.amount}M VNĐ</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Báo cáo cần xử lý</CardTitle>
          <CardDescription>Danh sách các báo cáo đang chờ hoàn thành</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="text-sm font-semibold">Báo cáo tài chính tháng 11</h4>
                <p className="text-xs text-muted-foreground">Hạn nộp: 05/12/2024</p>
                <p className="text-xs text-gray-600">Bao gồm: Báo cáo thu chi, Bảng cân đối kế toán</p>
              </div>
              <div className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                Còn 10 ngày
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="text-sm font-semibold">Báo cáo thuế VAT quý 4</h4>
                <p className="text-xs text-muted-foreground">Hạn nộp: 30/01/2025</p>
                <p className="text-xs text-gray-600">Tờ khai thuế VAT và báo cáo tình hình sử dụng hóa đơn</p>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                Còn 45 ngày
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="text-sm font-semibold">Quyết toán thuế TNCN</h4>
                <p className="text-xs text-muted-foreground">Hạn nộp: 31/03/2025</p>
                <p className="text-xs text-gray-600">Quyết toán thuế thu nhập cá nhân cho nhân viên</p>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                Còn 105 ngày
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountantDashboard;
