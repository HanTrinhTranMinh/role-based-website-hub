
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Users, Calendar, Award } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Stethoscope,
      title: 'Dịch vụ chất lượng cao',
      description: 'Đội ngũ chuyên gia giàu kinh nghiệm với các liệu pháp hiện đại'
    },
    {
      icon: Users,
      title: 'Đội ngũ chuyên nghiệp',
      description: 'Nhân viên được đào tạo bài bản, tận tâm với khách hàng'
    },
    {
      icon: Calendar,
      title: 'Đặt lịch dễ dàng',
      description: 'Hệ thống đặt lịch trực tuyến tiện lợi, nhanh chóng'
    },
    {
      icon: Award,
      title: 'Chất lượng được công nhận',
      description: 'Nhiều giải thưởng và chứng nhận uy tín trong ngành'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Chào mừng đến với Spa Management System
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Hệ thống quản lý spa hiện đại, mang đến trải nghiệm tốt nhất cho khách hàng và nhân viên
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register">
              <Button size="lg" variant="secondary">
                Đăng Ký Ngay
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                Đăng Nhập
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tại sao chọn chúng tôi?
            </h2>
            <p className="text-lg text-gray-600">
              Chúng tôi cam kết mang đến dịch vụ tốt nhất với công nghệ hiện đại
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Đăng ký ngay để trải nghiệm dịch vụ tốt nhất của chúng tôi
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Đăng Ký Miễn Phí
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
