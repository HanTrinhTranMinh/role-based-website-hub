
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, Search, Edit, X, Bell } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Appointment {
  id: string;
  customerName: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  phone: string;
  therapist: string;
  notes?: string;
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    customerName: 'Nguyễn Thị Lan',
    service: 'Massage toàn thân',
    date: '2024-01-15',
    time: '14:00',
    status: 'confirmed',
    phone: '0987654321',
    therapist: 'Trần Văn A',
    notes: 'Khách có vấn đề về vai gáy'
  },
  {
    id: '2',
    customerName: 'Lê Văn Nam',
    service: 'Chăm sóc da mặt',
    date: '2024-01-15',
    time: '16:30',
    status: 'pending',
    phone: '0912345678',
    therapist: 'Phạm Thị B'
  },
  {
    id: '3',
    customerName: 'Hoàng Thị Mai',
    service: 'Tắm trắng',
    date: '2024-01-16',
    time: '10:00',
    status: 'completed',
    phone: '0938765432',
    therapist: 'Nguyễn Văn C'
  }
];

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { toast } = useToast();

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      confirmed: { label: 'Đã xác nhận', variant: 'default' as const },
      pending: { label: 'Chờ xác nhận', variant: 'secondary' as const },
      completed: { label: 'Hoàn thành', variant: 'default' as const },
      cancelled: { label: 'Đã hủy', variant: 'destructive' as const }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const updateAppointmentStatus = (id: string, newStatus: string) => {
    setAppointments(prev => 
      prev.map(apt => apt.id === id ? { ...apt, status: newStatus as any } : apt)
    );
    toast({
      title: "Cập nhật thành công",
      description: "Trạng thái lịch hẹn đã được cập nhật"
    });
  };

  const sendReminder = (appointment: Appointment) => {
    toast({
      title: "Đã gửi nhắc nhở",
      description: `Thông báo nhắc lịch đã được gửi tới ${appointment.customerName}`
    });
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesSearch = apt.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         apt.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate || apt.date === selectedDate;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý lịch hẹn</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tạo lịch hẹn
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Tạo lịch hẹn mới</DialogTitle>
              <DialogDescription>
                Nhập thông tin chi tiết cho lịch hẹn mới
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="customer">Tên khách hàng</Label>
                <Input id="customer" placeholder="Nhập tên khách hàng" />
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" placeholder="Nhập số điện thoại" />
              </div>
              <div>
                <Label htmlFor="service">Dịch vụ</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn dịch vụ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="massage">Massage toàn thân</SelectItem>
                    <SelectItem value="facial">Chăm sóc da mặt</SelectItem>
                    <SelectItem value="whitening">Tắm trắng</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Ngày</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="time">Giờ</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div>
                <Label htmlFor="therapist">Nhân viên</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn nhân viên" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="therapist1">Trần Văn A</SelectItem>
                    <SelectItem value="therapist2">Phạm Thị B</SelectItem>
                    <SelectItem value="therapist3">Nguyễn Văn C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="notes">Ghi chú</Label>
                <Textarea id="notes" placeholder="Ghi chú về yêu cầu đặc biệt..." />
              </div>
              <Button className="w-full" onClick={() => setIsCreateDialogOpen(false)}>
                Tạo lịch hẹn
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Tìm kiếm theo tên khách hàng hoặc dịch vụ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-40"
        />
      </div>

      <Tabs defaultValue="today" className="space-y-4">
        <TabsList>
          <TabsTrigger value="today">Hôm nay</TabsTrigger>
          <TabsTrigger value="week">Tuần này</TabsTrigger>
          <TabsTrigger value="month">Tháng này</TabsTrigger>
          <TabsTrigger value="all">Tất cả</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Lịch hẹn hôm nay
              </CardTitle>
              <CardDescription>
                Quản lý và theo dõi các lịch hẹn trong ngày
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Khách hàng</TableHead>
                    <TableHead>Dịch vụ</TableHead>
                    <TableHead>Thời gian</TableHead>
                    <TableHead>Nhân viên</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead>Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAppointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{appointment.customerName}</p>
                          <p className="text-sm text-gray-500">{appointment.phone}</p>
                        </div>
                      </TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {appointment.time}
                        </div>
                      </TableCell>
                      <TableCell>{appointment.therapist}</TableCell>
                      <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => sendReminder(appointment)}
                          >
                            <Bell className="h-4 w-4" />
                          </Button>
                          <Select onValueChange={(value) => updateAppointmentStatus(appointment.id, value)}>
                            <SelectTrigger className="w-32">
                              <SelectValue placeholder="Cập nhật" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="confirmed">Xác nhận</SelectItem>
                              <SelectItem value="completed">Hoàn thành</SelectItem>
                              <SelectItem value="cancelled">Hủy</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Xem lịch hẹn tuần này</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Xem lịch hẹn tháng này</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500">Xem tất cả lịch hẹn</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AppointmentManagement;
