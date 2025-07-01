
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { CreditCard, FileText, Mail, Printer, Plus, Search, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Invoice {
  id: string;
  customerName: string;
  services: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  discount: number;
  total: number;
  paymentMethod: string;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
  phone: string;
}

const mockInvoices: Invoice[] = [
  {
    id: 'INV-001',
    customerName: 'Nguyễn Thị Lan',
    services: [
      { name: 'Massage toàn thân', price: 500000, quantity: 1 },
      { name: 'Chăm sóc da mặt', price: 300000, quantity: 1 }
    ],
    subtotal: 800000,
    discount: 80000,
    total: 720000,
    paymentMethod: 'Tiền mặt',
    status: 'paid',
    date: '2024-01-15',
    phone: '0987654321'
  },
  {
    id: 'INV-002',
    customerName: 'Lê Văn Nam',
    services: [
      { name: 'Tắm trắng', price: 800000, quantity: 1 }
    ],
    subtotal: 800000,
    discount: 0,
    total: 800000,
    paymentMethod: 'Thẻ',
    status: 'pending',
    date: '2024-01-15',
    phone: '0912345678'
  }
];

const PaymentProcessing = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateInvoiceOpen, setIsCreateInvoiceOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<any[]>([]);
  const [currentInvoice, setCurrentInvoice] = useState<any>({});
  const { toast } = useToast();

  const services = [
    { name: 'Massage toàn thân', price: 500000 },
    { name: 'Chăm sóc da mặt', price: 300000 },
    { name: 'Tắm trắng', price: 800000 },
    { name: 'Gội đầu dưỡng sinh', price: 200000 },
    { name: 'Tẩy tế bào chết', price: 400000 }
  ];

  const promotions = [
    { name: 'Giảm 10%', discount: 0.1 },
    { name: 'Giảm 20%', discount: 0.2 },
    { name: 'Khách VIP - 30%', discount: 0.3 }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      paid: { label: 'Đã thanh toán', variant: 'default' as const },
      pending: { label: 'Chờ thanh toán', variant: 'secondary' as const },
      overdue: { label: 'Quá hạn', variant: 'destructive' as const }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const printInvoice = (invoice: Invoice) => {
    toast({
      title: "In hóa đơn",
      description: `Hóa đơn ${invoice.id} đã được gửi tới máy in`
    });
  };

  const sendEmailInvoice = (invoice: Invoice) => {
    toast({
      title: "Gửi email",
      description: `Hóa đơn điện tử đã được gửi tới ${invoice.customerName}`
    });
  };

  const processPayment = (invoiceId: string, method: string) => {
    setInvoices(prev => 
      prev.map(inv => inv.id === invoiceId ? { ...inv, status: 'paid' as const, paymentMethod: method } : inv)
    );
    toast({
      title: "Thanh toán thành công",
      description: "Hóa đơn đã được thanh toán"
    });
  };

  const addServiceToInvoice = (service: any) => {
    setSelectedServices(prev => [...prev, { ...service, quantity: 1 }]);
  };

  const calculateTotal = () => {
    const subtotal = selectedServices.reduce((sum, service) => sum + (service.price * service.quantity), 0);
    const discount = currentInvoice.discount || 0;
    return {
      subtotal,
      discountAmount: subtotal * discount,
      total: subtotal * (1 - discount)
    };
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Xử lý thanh toán</h1>
        <Dialog open={isCreateInvoiceOpen} onOpenChange={setIsCreateInvoiceOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tạo hóa đơn
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Tạo hóa đơn mới</DialogTitle>
              <DialogDescription>
                Nhập thông tin khách hàng và dịch vụ để tạo hóa đơn
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customerName">Tên khách hàng</Label>
                  <Input 
                    id="customerName" 
                    placeholder="Nhập tên khách hàng"
                    value={currentInvoice.customerName || ''}
                    onChange={(e) => setCurrentInvoice(prev => ({ ...prev, customerName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input 
                    id="phone" 
                    placeholder="Nhập số điện thoại"
                    value={currentInvoice.phone || ''}
                    onChange={(e) => setCurrentInvoice(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label>Chọn dịch vụ</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {services.map((service, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => addServiceToInvoice(service)}
                      className="justify-start"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      {service.name} - {formatCurrency(service.price)}
                    </Button>
                  ))}
                </div>
              </div>

              {selectedServices.length > 0 && (
                <div>
                  <Label>Dịch vụ đã chọn</Label>
                  <div className="border rounded-lg p-4 mt-2">
                    {selectedServices.map((service, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span>{service.name}</span>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            value={service.quantity}
                            onChange={(e) => {
                              const newServices = [...selectedServices];
                              newServices[index].quantity = parseInt(e.target.value) || 1;
                              setSelectedServices(newServices);
                            }}
                            className="w-16"
                          />
                          <span>{formatCurrency(service.price * service.quantity)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <Label>Áp dụng khuyến mãi</Label>
                <Select onValueChange={(value) => setCurrentInvoice(prev => ({ ...prev, discount: parseFloat(value) }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn khuyến mãi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Không khuyến mãi</SelectItem>
                    {promotions.map((promo, index) => (
                      <SelectItem key={index} value={promo.discount.toString()}>
                        {promo.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedServices.length > 0 && (
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Tạm tính:</span>
                      <span>{formatCurrency(calculateTotal().subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Giảm giá:</span>
                      <span>-{formatCurrency(calculateTotal().discountAmount)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Tổng cộng:</span>
                      <span>{formatCurrency(calculateTotal().total)}</span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <Label>Phương thức thanh toán</Label>
                <Select onValueChange={(value) => setCurrentInvoice(prev => ({ ...prev, paymentMethod: value }))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Chọn phương thức thanh toán" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Tiền mặt</SelectItem>
                    <SelectItem value="card">Thẻ tín dụng</SelectItem>
                    <SelectItem value="transfer">Chuyển khoản</SelectItem>
                    <SelectItem value="momo">MoMo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" onClick={() => setIsCreateInvoiceOpen(false)}>
                Tạo hóa đơn và thanh toán
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Tìm kiếm theo tên khách hàng hoặc mã hóa đơn..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="pending">Chờ thanh toán</TabsTrigger>
          <TabsTrigger value="paid">Đã thanh toán</TabsTrigger>
          <TabsTrigger value="overdue">Quá hạn</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Danh sách hóa đơn
              </CardTitle>
              <CardDescription>
                Quản lý và xử lý các hóa đơn thanh toán
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mã hóa đơn</TableHead>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Tổng tiền</TableHead>
                    <TableHead>Phương thức</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{invoice.customerName}</p>
                          <p className="text-sm text-gray-500">{invoice.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        {formatCurrency(invoice.total)}
                      </TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => printInvoice(invoice)}
                          >
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => sendEmailInvoice(invoice)}
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                          {invoice.status === 'pending' && (
                            <Select onValueChange={(value) => processPayment(invoice.id, value)}>
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Thanh toán" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Tiền mặt">Tiền mặt</SelectItem>
                                <SelectItem value="Thẻ">Thẻ</SelectItem>
                                <SelectItem value="Chuyển khoản">CK</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Hiển thị hóa đơn chờ thanh toán</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paid">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Hiển thị hóa đơn đã thanh toán</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Hiển thị hóa đơn quá hạn</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentProcessing;
