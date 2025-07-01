
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/hooks/use-toast';
import { CalendarIcon, Clock, CreditCard } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { cn } from '@/lib/utils';

const services = [
  { id: '1', name: 'Massage Thư Giãn', duration: '60 phút', price: 500000 },
  { id: '2', name: 'Chăm Sóc Da Mặt', duration: '90 phút', price: 350000 },
  { id: '3', name: 'Nail & Pedicure', duration: '45 phút', price: 200000 },
  { id: '4', name: 'Massage Đá Nóng', duration: '75 phút', price: 650000 },
  { id: '5', name: 'Tắm Trắng Toàn Thân', duration: '120 phút', price: 800000 },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

const AppointmentBooking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [step, setStep] = useState(1);

  const selectedServiceData = services.find(s => s.id === selectedService);

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng chọn dịch vụ, ngày và giờ",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking process
    setStep(3);
    toast({
      title: "Đặt lịch thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn để xác nhận lịch hẹn"
    });
  };

  const handlePayment = () => {
    // Simulate payment process
    toast({
      title: "Thanh toán thành công!",
      description: "Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ gửi xác nhận qua email"
    });
    
    // Reset form
    setStep(1);
    setSelectedService('');
    setSelectedDate(undefined);
    setSelectedTime('');
    setCustomerInfo({ name: '', phone: '', email: '', notes: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Đặt Lịch Hẹn</h1>
        <p className="text-gray-600">Chọn dịch vụ và thời gian phù hợp với bạn</p>
      </div>

      {/* Steps Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
          <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            3
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Chọn Dịch Vụ</CardTitle>
              <CardDescription>Chọn dịch vụ bạn muốn sử dụng</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedService === service.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.duration}</p>
                    </div>
                    <p className="font-bold text-indigo-600">
                      {service.price.toLocaleString('vi-VN')} VNĐ
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Date & Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Chọn Ngày & Giờ</CardTitle>
              <CardDescription>Chọn thời gian phù hợp</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Date Picker */}
              <div className="space-y-2">
                <Label>Chọn ngày</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP", { locale: vi }) : "Chọn ngày"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <Label>Chọn giờ</Label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          {selectedServiceData && (
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Tóm Tắt Đặt Lịch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label className="text-sm font-medium">Dịch vụ</Label>
                    <p className="mt-1">{selectedServiceData.name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Ngày & Giờ</Label>
                    <p className="mt-1">
                      {selectedDate && selectedTime 
                        ? `${format(selectedDate, "dd/MM/yyyy", { locale: vi })} - ${selectedTime}`
                        : 'Chưa chọn'}
                    </p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Tổng tiền</Label>
                    <p className="mt-1 text-lg font-bold text-indigo-600">
                      {selectedServiceData.price.toLocaleString('vi-VN')} VNĐ
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={() => setStep(2)} 
                  disabled={!selectedService || !selectedDate || !selectedTime}
                  className="w-full"
                >
                  Tiếp Tục
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Thông Tin Liên Hệ</CardTitle>
            <CardDescription>Vui lòng cung cấp thông tin để chúng tôi liên hệ xác nhận</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Họ tên *</Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  placeholder="Nhập họ tên"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                placeholder="Nhập email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Ghi chú</Label>
              <Textarea
                id="notes"
                value={customerInfo.notes}
                onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                placeholder="Ghi chú thêm (tùy chọn)"
              />
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Quay Lại
              </Button>
              <Button onClick={handleBooking} className="flex-1">
                Xác Nhận Đặt Lịch
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              Thanh Toán
            </CardTitle>
            <CardDescription>Hoàn tất thanh toán để xác nhận lịch hẹn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Booking Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">Chi Tiết Đặt Lịch</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Dịch vụ:</span>
                  <span>{selectedServiceData?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Thời gian:</span>
                  <span>{selectedServiceData?.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ngày giờ:</span>
                  <span>
                    {selectedDate && selectedTime 
                      ? `${format(selectedDate, "dd/MM/yyyy", { locale: vi })} - ${selectedTime}`
                      : ''}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-base border-t pt-2 mt-2">
                  <span>Tổng tiền:</span>
                  <span className="text-indigo-600">
                    {selectedServiceData?.price.toLocaleString('vi-VN')} VNĐ
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h3 className="font-semibold">Phương thức thanh toán</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                  <div className="text-center">
                    <CreditCard className="mx-auto h-8 w-8 mb-2 text-indigo-600" />
                    <p className="font-medium">Thẻ tín dụng</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                  <div className="text-center">
                    <span className="block text-2xl mb-2">📱</span>
                    <p className="font-medium">Ví điện tử</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg cursor-pointer hover:border-indigo-500">
                  <div className="text-center">
                    <span className="block text-2xl mb-2">💵</span>
                    <p className="font-medium">Thanh toán tại spa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Quay Lại
              </Button>
              <Button onClick={handlePayment} className="flex-1">
                Thanh Toán Ngay
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentBooking;
