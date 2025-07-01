
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Users, Plus, Search, Edit, Trash2, Heart, Phone, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  dateOfBirth: string;
  gender: 'male' | 'female';
  membershipLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
  totalSpent: number;
  lastVisit: string;
  healthProfile: {
    allergies: string[];
    skinType: string;
    medicalConditions: string[];
    notes: string;
  };
  visitHistory: Array<{
    date: string;
    service: string;
    amount: number;
  }>;
}

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Nguyễn Thị Lan',
    phone: '0987654321',
    email: 'lan.nguyen@email.com',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    dateOfBirth: '1990-05-15',
    gender: 'female',
    membershipLevel: 'gold',
    totalSpent: 5200000,
    lastVisit: '2024-01-10',
    healthProfile: {
      allergies: ['Phấn hoa', 'Hải sản'],
      skinType: 'Da khô',
      medicalConditions: ['Cao huyết áp'],
      notes: 'Khách hàng thích sử dụng sản phẩm tự nhiên'
    },
    visitHistory: [
      { date: '2024-01-10', service: 'Massage toàn thân', amount: 500000 },
      { date: '2024-01-05', service: 'Chăm sóc da mặt', amount: 300000 }
    ]
  },
  {
    id: '2',
    name: 'Lê Văn Nam',
    phone: '0912345678',
    email: 'nam.le@email.com',
    address: '456 Đường XYZ, Quận 3, TP.HCM',
    dateOfBirth: '1985-12-20',
    gender: 'male',
    membershipLevel: 'silver',
    totalSpent: 2800000,
    lastVisit: '2024-01-12',
    healthProfile: {
      allergies: [],
      skinType: 'Da dầu',
      medicalConditions: [],
      notes: 'Khách hàng thường xuyên, có thể áp dụng ưu đãi'
    },
    visitHistory: [
      { date: '2024-01-12', service: 'Tắm trắng', amount: 800000 },
      { date: '2024-01-01', service: 'Massage chân', amount: 200000 }
    ]
  }
];

const CustomerManagement = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const { toast } = useToast();

  const getMembershipBadge = (level: string) => {
    const levelConfig = {
      bronze: { label: 'Đồng', variant: 'secondary' as const },
      silver: { label: 'Bạc', variant: 'default' as const },
      gold: { label: 'Vàng', variant: 'default' as const },
      platinum: { label: 'Bạch kim', variant: 'default' as const }
    };
    const config = levelConfig[level as keyof typeof levelConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const deleteCustomer = (id: string) => {
    setCustomers(prev => prev.filter(customer => customer.id !== id));
    toast({
      title: "Đã xóa khách hàng",
      description: "Thông tin khách hàng đã được xóa khỏi hệ thống"
    });
  };

  const viewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsViewDialogOpen(true);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý khách hàng</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Thêm khách hàng
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Thêm khách hàng mới</DialogTitle>
              <DialogDescription>
                Nhập thông tin chi tiết của khách hàng mới
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input id="name" placeholder="Nhập họ và tên" />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" placeholder="Nhập số điện thoại" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Nhập email" />
                </div>
                <div>
                  <Label htmlFor="dob">Ngày sinh</Label>
                  <Input id="dob" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gender">Giới tính</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn giới tính" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Nam</SelectItem>
                      <SelectItem value="female">Nữ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="membership">Hạng thành viên</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn hạng thành viên" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bronze">Đồng</SelectItem>
                      <SelectItem value="silver">Bạc</SelectItem>
                      <SelectItem value="gold">Vàng</SelectItem>
                      <SelectItem value="platinum">Bạch kim</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="address">Địa chỉ</Label>
                <Textarea id="address" placeholder="Nhập địa chỉ chi tiết" />
              </div>

              <div>
                <Label htmlFor="skinType">Loại da</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại da" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dry">Da khô</SelectItem>
                    <SelectItem value="oily">Da dầu</SelectItem>
                    <SelectItem value="combination">Da hỗn hợp</SelectItem>
                    <SelectItem value="sensitive">Da nhạy cảm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="allergies">Dị ứng</Label>
                <Input id="allergies" placeholder="Ví dụ: Phấn hoa, Hải sản (ngăn cách bằng dấu phẩy)" />
              </div>

              <div>
                <Label htmlFor="medicalConditions">Tình trạng sức khỏe</Label>
                <Input id="medicalConditions" placeholder="Ví dụ: Cao huyết áp, Tiểu đường (ngăn cách bằng dấu phẩy)" />
              </div>

              <div>
                <Label htmlFor="notes">Ghi chú</Label>
                <Textarea id="notes" placeholder="Ghi chú thêm về khách hàng..." />
              </div>

              <Button className="w-full" onClick={() => setIsCreateDialogOpen(false)}>
                Thêm khách hàng
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Tìm kiếm theo tên, số điện thoại hoặc email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="vip">Khách VIP</TabsTrigger>
          <TabsTrigger value="new">Khách mới</TabsTrigger>
          <TabsTrigger value="inactive">Lâu không ghé</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Danh sách khách hàng
              </CardTitle>
              <CardDescription>
                Quản lý thông tin và hồ sơ khách hàng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Liên hệ</TableHead>
                    <TableHead>Hạng thành viên</TableHead>
                    <TableHead>Tổng chi tiêu</TableHead>
                    <TableHead>Lần cuối ghé</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-gray-500">
                            {customer.gender === 'male' ? 'Nam' : 'Nữ'} • {customer.dateOfBirth}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Phone className="h-3 w-3" />
                            {customer.phone}
                          </div>
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            {customer.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getMembershipBadge(customer.membershipLevel)}</TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(customer.totalSpent)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3" />
                          {customer.lastVisit}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => viewCustomer(customer)}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteCustomer(customer.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vip">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Hiển thị khách hàng VIP (Gold, Platinum)</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Hiển thị khách hàng mới trong 30 ngày</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inactive">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Hiển thị khách hàng lâu không ghé thăm</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Customer Detail Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Hồ sơ khách hàng</DialogTitle>
            <DialogDescription>
              Thông tin chi tiết và lịch sử của khách hàng
            </DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Thông tin cá nhân</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div><strong>Tên:</strong> {selectedCustomer.name}</div>
                    <div><strong>Điện thoại:</strong> {selectedCustomer.phone}</div>
                    <div><strong>Email:</strong> {selectedCustomer.email}</div>
                    <div><strong>Địa chỉ:</strong> {selectedCustomer.address}</div>
                    <div><strong>Ngày sinh:</strong> {selectedCustomer.dateOfBirth}</div>
                    <div><strong>Giới tính:</strong> {selectedCustomer.gender === 'male' ? 'Nam' : 'Nữ'}</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Hồ sơ sức khỏe</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div><strong>Loại da:</strong> {selectedCustomer.healthProfile.skinType}</div>
                    <div><strong>Dị ứng:</strong> {selectedCustomer.healthProfile.allergies.join(', ') || 'Không có'}</div>
                    <div><strong>Bệnh lý:</strong> {selectedCustomer.healthProfile.medicalConditions.join(', ') || 'Không có'}</div>
                    <div><strong>Ghi chú:</strong> {selectedCustomer.healthProfile.notes}</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Lịch sử sử dụng dịch vụ</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Dịch vụ</TableHead>
                        <TableHead>Số tiền</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedCustomer.visitHistory.map((visit, index) => (
                        <TableRow key={index}>
                          <TableCell>{visit.date}</TableCell>
                          <TableCell>{visit.service}</TableCell>
                          <TableCell>{formatCurrency(visit.amount)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerManagement;
