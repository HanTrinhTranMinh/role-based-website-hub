
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, AlertTriangle, TrendingDown, BarChart3 } from 'lucide-react';

const WarehouseDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Quản Lý Kho
        </h1>
        <p className="text-gray-600 mt-2">
          Theo dõi tồn kho và quản lý sản phẩm
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng sản phẩm</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+23 sản phẩm mới</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sắp hết hạn</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">18</div>
            <p className="text-xs text-muted-foreground">Cần xử lý trong 30 ngày</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sắp hết hàng</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-xs text-muted-foreground">Dưới mức tồn kho tối thiểu</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Giá trị kho</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124M</div>
            <p className="text-xs text-muted-foreground">Tổng giá trị tồn kho</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sản phẩm cần chú ý</CardTitle>
            <CardDescription>Hết hạn hoặc sắp hết hàng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Tinh dầu Lavender', status: 'expiring', quantity: 25, date: '15/12/2024' },
                { name: 'Kem massage thảo dược', status: 'low-stock', quantity: 8, minStock: 20 },
                { name: 'Khăn spa cao cấp', status: 'low-stock', quantity: 15, minStock: 30 },
                { name: 'Nến thơm trị liệu', status: 'expiring', quantity: 12, date: '20/12/2024' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.status === 'expiring' ? `Hết hạn: ${item.date}` : `Tồn kho: ${item.quantity}/${item.minStock}`}
                    </p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'expiring' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status === 'expiring' ? 'Sắp hết hạn' : 'Sắp hết hàng'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phiếu nhập/xuất gần đây</CardTitle>
            <CardDescription>5 giao dịch mới nhất</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-semibold">Phiếu nhập #2024110</p>
                  <p className="text-xs text-muted-foreground">Ngày: 23/11/2024</p>
                  <p className="text-xs text-gray-600">Nhà cung cấp: Công ty TNHH ABC</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">+45 sản phẩm</p>
                  <p className="text-xs text-muted-foreground">12.5M VNĐ</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-semibold">Phiếu xuất #2024109</p>
                  <p className="text-xs text-muted-foreground">Ngày: 22/11/2024</p>
                  <p className="text-xs text-gray-600">Xuất cho: Phòng trị liệu 1</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-600">-12 sản phẩm</p>
                  <p className="text-xs text-muted-foreground">2.8M VNĐ</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-semibold">Phiếu xuất #2024108</p>
                  <p className="text-xs text-muted-foreground">Ngày: 21/11/2024</p>
                  <p className="text-xs text-gray-600">Xuất cho: Phòng massage</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-600">-8 sản phẩm</p>
                  <p className="text-xs text-muted-foreground">1.5M VNĐ</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WarehouseDashboard;
