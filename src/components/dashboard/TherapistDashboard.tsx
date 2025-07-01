
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Calendar, Users, Clock } from 'lucide-react';

const TherapistDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Nhân Viên Trị Liệu
        </h1>
        <p className="text-gray-600 mt-2">
          Lịch làm việc và quản lý liệu trình cá nhân
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lịch hôm nay</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 đã hoàn thành</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Khách hàng theo dõi</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+5 khách mới tuần này</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Giờ làm tuần này</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38h</div>
            <p className="text-xs text-muted-foreground">Còn 2h để đạt target</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Liệu trình hoàn thành</CardTitle>
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Tỷ lệ hoàn thành tháng này</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lịch làm việc hôm nay</CardTitle>
            <CardDescription>Thứ Hai, 25/11/2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '09:00 - 10:30', client: 'Nguyễn Thị Lan', service: 'Massage toàn thân', status: 'completed' },
                { time: '11:00 - 12:00', client: 'Trần Văn Nam', service: 'Trị liệu cột sống', status: 'completed' },
                { time: '14:00 - 15:30', client: 'Lê Thị Hoa', service: 'Chăm sóc da', status: 'in-progress' },
                { time: '16:00 - 17:00', client: 'Phạm Minh Tuấn', service: 'Yoga trị liệu', status: 'pending' },
                { time: '17:30 - 19:00', client: 'Hoàng Thị Mai', service: 'Detox', status: 'pending' }
              ].map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-semibold">{appointment.time}</p>
                    <p className="text-sm text-gray-600">{appointment.client}</p>
                    <p className="text-xs text-muted-foreground">{appointment.service}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {appointment.status === 'completed' ? 'Hoàn thành' :
                     appointment.status === 'in-progress' ? 'Đang thực hiện' : 'Chờ thực hiện'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Khách hàng cần theo dõi</CardTitle>
            <CardDescription>Liệu trình đang tiến hành</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-sm font-semibold">Nguyễn Thị Lan</h4>
                <p className="text-xs text-muted-foreground">Liệu trình: Phục hồi cột sống (buổi 3/10)</p>
                <p className="text-xs text-gray-600">Ghi chú: Tiến triển tốt, giảm đau 70%</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-sm font-semibold">Trần Văn Nam</h4>
                <p className="text-xs text-muted-foreground">Liệu trình: Massage trị liệu (buổi 5/8)</p>
                <p className="text-xs text-gray-600">Ghi chú: Cần điều chỉnh cường độ</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-sm font-semibold">Lê Thị Hoa</h4>
                <p className="text-xs text-muted-foreground">Liệu trình: Chăm sóc da (buổi 2/6)</p>
                <p className="text-xs text-gray-600">Ghi chú: Da có dấu hiệu cải thiện rõ rệt</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TherapistDashboard;
