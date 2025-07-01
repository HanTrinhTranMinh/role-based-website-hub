
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { Clock, Star, Search } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Massage Thư Giãn',
    category: 'Massage',
    duration: '60 phút',
    price: 500000,
    rating: 4.8,
    description: 'Massage toàn thân giúp thư giãn và giảm căng thẳng, sử dụng tinh dầu thiên nhiên.',
    image: '💆‍♀️',
    popular: true
  },
  {
    id: 2,
    name: 'Chăm Sóc Da Mặt',
    category: 'Chăm sóc da',
    duration: '90 phút',
    price: 350000,
    rating: 4.9,
    description: 'Liệu trình chăm sóc da mặt chuyên sâu, làm sạch và dưỡng ẩm.',
    image: '🧴',
    popular: false
  },
  {
    id: 3,
    name: 'Nail & Pedicure',
    category: 'Nail',
    duration: '45 phút',
    price: 200000,
    rating: 4.7,
    description: 'Chăm sóc móng tay và móng chân chuyên nghiệp với các sản phẩm cao cấp.',
    image: '💅',
    popular: false
  },
  {
    id: 4,
    name: 'Massage Đá Nóng',
    category: 'Massage',
    duration: '75 phút',
    price: 650000,
    rating: 4.8,
    description: 'Massage sử dụng đá nóng để thư giãn cơ bắp và cải thiện tuần hoàn máu.',
    image: '🔥',
    popular: true
  },
  {
    id: 5,
    name: 'Tắm Trắng Toàn Thân',
    category: 'Chăm sóc da',
    duration: '120 phút',
    price: 800000,
    rating: 4.6,
    description: 'Liệu trình tắm trắng toàn thân với công nghệ hiện đại, an toàn và hiệu quả.',
    image: '✨',
    popular: false
  },
  {
    id: 6,
    name: 'Massage Mặt Chống Lão Hóa',
    category: 'Chăm sóc da',
    duration: '60 phút',
    price: 450000,
    rating: 4.9,
    description: 'Massage mặt đặc biệt giúp chống lão hóa và làm săn chắc da.',
    image: '🌸',
    popular: true
  }
];

const categories = ['Tất cả', 'Massage', 'Chăm sóc da', 'Nail'];

const ServiceCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [sortBy, setSortBy] = useState('popular');

  const filteredServices = services
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Tất cả' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return b.popular ? 1 : -1;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dịch Vụ Spa</h1>
        <p className="text-gray-600">Khám phá các dịch vụ chăm sóc sắc đẹp và sức khỏe</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Tìm kiếm dịch vụ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Phổ biến</SelectItem>
              <SelectItem value="rating">Đánh giá cao</SelectItem>
              <SelectItem value="price-low">Giá thấp đến cao</SelectItem>
              <SelectItem value="price-high">Giá cao đến thấp</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{service.image}</div>
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary">{service.category}</Badge>
                      {service.popular && (
                        <Badge className="bg-orange-100 text-orange-800">Phổ biến</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm">
                {service.description}
              </CardDescription>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{service.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-indigo-600">
                    {service.price.toLocaleString('vi-VN')}
                  </span>
                  <span className="text-gray-600 ml-1">VNĐ</span>
                </div>
                <Link to="/appointments">
                  <Button size="sm">
                    Đặt Lịch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">Không tìm thấy dịch vụ</h3>
          <p className="text-gray-600">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bạn cần tư vấn?
        </h2>
        <p className="text-gray-600 mb-6">
          Liên hệ với chúng tôi để được tư vấn dịch vụ phù hợp nhất
        </p>
        <div className="space-x-4">
          <Link to="/contact">
            <Button size="lg">
              Liên Hệ Ngay
            </Button>
          </Link>
          <Link to="/appointments">
            <Button variant="outline" size="lg">
              Đặt Lịch Hẹn
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCatalog;
