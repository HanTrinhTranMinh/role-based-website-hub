
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Đội ngũ chuyên nghiệp',
      description: 'Các chuyên gia trị liệu giàu kinh nghiệm với chứng chỉ quốc tế'
    },
    {
      icon: Award,
      title: 'Chất lượng hàng đầu',
      description: 'Sử dụng công nghệ hiện đại và sản phẩm chất lượng cao'
    },
    {
      icon: Clock,
      title: 'Phục vụ 24/7',
      description: 'Hỗ trợ khách hàng mọi lúc, mọi nơi'
    },
    {
      icon: Shield,
      title: 'An toàn tuyệt đối',
      description: 'Đảm bảo vệ sinh và an toàn cho khách hàng'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Spa Management System - Hệ thống quản lý spa hiện đại, 
            mang đến trải nghiệm tuyệt vời cho khách hàng
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600">
            Những giá trị cốt lõi tạo nên sự khác biệt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
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

      {/* Story Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Câu Chuyện Của Chúng Tôi
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Spa Management System được thành lập với sứ mệnh mang đến một hệ thống 
              quản lý spa toàn diện, hiện đại và dễ sử dụng. Chúng tôi hiểu rằng việc 
              quản lý một spa không chỉ đơn giản là đặt lịch hẹn hay thanh toán.
            </p>
            
            <p className="mb-6">
              Với đội ngũ phát triển giàu kinh nghiệm và sự hỗ trợ từ các chuyên gia 
              trong ngành spa, chúng tôi đã tạo ra một hệ thống quản lý toàn diện, 
              từ quản lý khách hàng, lịch hẹn, dịch vụ đến báo cáo tài chính.
            </p>
            
            <p>
              Hệ thống của chúng tôi không chỉ giúp tối ưu hóa quy trình vận hành 
              mà còn nâng cao trải nghiệm khách hàng, tạo ra giá trị bền vững cho 
              doanh nghiệp spa của bạn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
