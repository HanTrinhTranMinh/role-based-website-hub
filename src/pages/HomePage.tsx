
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Star,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Quản lý lịch hẹn',
      description: 'Đặt lịch dễ dàng, quản lý thời gian hiệu quả'
    },
    {
      icon: Users,
      title: 'Chăm sóc khách hàng',
      description: 'Dịch vụ tận tâm, chuyên nghiệp 24/7'
    },
    {
      icon: Award,
      title: 'Chất lượng cao',
      description: 'Sản phẩm và dịch vụ đạt tiêu chuẩn quốc tế'
    },
    {
      icon: Shield,
      title: 'An toàn tuyệt đối',
      description: 'Đảm bảo vệ sinh và an toàn cho khách hàng'
    }
  ];

  const services = [
    {
      title: 'Massage Thư Giãn',
      description: 'Massage toàn thân với tinh dầu thiên nhiên',
      price: 'Từ 500.000đ',
      image: '/placeholder.svg'
    },
    {
      title: 'Chăm Sóc Da Mặt',
      description: 'Điều trị và chăm sóc da chuyên sâu',
      price: 'Từ 800.000đ',
      image: '/placeholder.svg'
    },
    {
      title: 'Liệu Pháp Thân Thể',
      description: 'Các liệu pháp chăm sóc cơ thể toàn diện',
      price: 'Từ 1.200.000đ',
      image: '/placeholder.svg'
    }
  ];

  const testimonials = [
    {
      name: 'Nguyễn Thị Lan',
      content: 'Dịch vụ tuyệt vời, nhân viên chuyên nghiệp và tận tâm. Tôi rất hài lòng!',
      rating: 5
    },
    {
      name: 'Trần Văn Nam',
      content: 'Không gian thư giãn, dịch vụ chất lượng cao. Tôi sẽ quay lại!',
      rating: 5
    },
    {
      name: 'Lê Thị Hoa',
      content: 'Hệ thống đặt lịch rất tiện lợi, tiết kiệm thời gian của tôi rất nhiều.',
      rating: 5
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Chào Mừng Đến Với Spa Management
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hệ thống quản lý spa hiện đại, mang đến trải nghiệm tuyệt vời 
            cho khách hàng và hiệu quả tối ưu cho doanh nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Đăng Ký Ngay
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Tìm Hiểu Thêm
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp toàn diện cho việc quản lý spa 
            với công nghệ hiện đại và dịch vụ chuyên nghiệp
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
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600">
              Trải nghiệm các dịch vụ spa đẳng cấp quốc tế
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      {service.price}
                    </span>
                    <Link to="/register">
                      <Button size="sm">
                        Đặt Lịch
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600">
            Những phản hồi tích cực từ khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-xl mb-8">
            Đăng ký ngay để trải nghiệm dịch vụ spa đẳng cấp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Đăng Ký Miễn Phí
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                Liên Hệ Ngay
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
