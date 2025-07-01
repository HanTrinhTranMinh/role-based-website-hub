
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Users, BarChart3, TrendingUp, Shield, FileText } from 'lucide-react';

const ManagerDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Quản Lý
        </h1>
        <p className="text-gray-600 mt-2">
          Tổng quan hệ thống và quản lý tổng thể
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng tài khoản</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">158</div>
            <p className="text-xs text-muted-foreground">+12 tài khoản mới tháng này</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hoạt động hệ thống</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Lượt truy cập trong ngày</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu tổng</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2B</div>
            <p className="text-xs text-muted-foreground">+22% so với tháng trước</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cảnh báo bảo mật</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Không có cảnh báo</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Phân quyền theo vai trò</CardTitle>
            <CardDescription>Thống kê số lượng tài khoản theo vai trò</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { role: 'Khách hàng', count: 89, percentage: 56.3, color: 'bg-blue-500' },
                { role: 'Lễ tân', count: 12, percentage: 7.6, color: 'bg-green-500' },
                { role: 'Nhân viên trị liệu', count: 18, percentage: 11.4, color: 'bg-purple-500' },
                { role: 'Marketing', count: 6, percentage: 3.8, color: 'bg-yellow-500' },
                { role: 'Quản lý dịch vụ', count: 4, percentage: 2.5, color: 'bg-orange-500' },
                { role: 'Thủ kho', count: 3, percentage: 1.9, color: 'bg-red-500' },
                { role: 'Kế toán', count: 2, percentage: 1.3, color: 'bg-indigo-500' },
                { role: 'Quản lý', count: 1, percentage: 0.6, color: 'bg-gray-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm font-medium">{item.role}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold">{item.count}</span>
                    <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
            <CardDescription>Log hoạt động của hệ thống</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Tạo tài khoản mới</p>
                  <p className="text-xs text-muted-foreground">Người dùng: khach@example.com</p>
                  <p className="text-xs text-gray-500">2 phút trước</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Cập nhật quyền</p>
                  <p className="text-xs text-muted-foreground">Nhân viên: letan@spa.com → Lễ tân cấp cao</p>
                  <p className="text-xs text-gray-500">15 phút trước</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Backup dữ liệu</p>
                  <p className="text-xs text-muted-foreground">Sao lưu tự động hoàn tất thành công</p>
                  <p className="text-xs text-gray-500">1 giờ trước</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium">Cập nhật hệ thống</p>
                  <p className="text-xs text-muted-foreground">Phiên bản 2.1.4 đã được cài đặt</p>
                  <p className="text-xs text-gray-500">3 giờ trước</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Thống kê khách hàng</CardTitle>
            <CardDescription>Tăng trưởng khách hàng theo tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Tháng 11</span>
                <span className="text-sm font-semibold text-green-600">+23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tháng 10</span>
                <span className="text-sm font-semibold text-green-600">+18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tháng 9</span>
                <span className="text-sm font-semibold text-green-600">+31</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tháng 8</span>
                <span className="text-sm font-semibold text-green-600">+27</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Báo cáo hệ thống</CardTitle>
            <CardDescription>Tình trạng các báo cáo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Báo cáo doanh thu</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Hoàn thành</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Báo cáo khách hàng</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Hoàn thành</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Báo cáo nhân sự</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Đang xử lý</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Báo cáo tài chính</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Chờ duyệt</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tác vụ quan trọng</CardTitle>
            <CardDescription>Cần xử lý ưu tiên</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 border-l-4 border-red-500 bg-red-50">
                <p className="text-sm font-medium">Duyệt tài khoản mới</p>
                <p className="text-xs text-muted-foreground">3 tài khoản chờ duyệt</p>
              </div>
              <div className="p-2 border-l-4 border-orange-500 bg-orange-50">
                <p className="text-sm font-medium">Cập nhật quyền truy cập</p>
                <p className="text-xs text-muted-foreground">2 yêu cầu thay đổi quyền</p>
              </div>
              <div className="p-2 border-l-4 border-blue-500 bg-blue-50">
                <p className="text-sm font-medium">Backup định kỳ</p>
                <p className="text-xs text-muted-foreground">Lên lịch sao lưu hàng tuần</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
