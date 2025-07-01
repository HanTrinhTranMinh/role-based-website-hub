
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation, NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Home,
  Calendar,
  User,
  CreditCard,
  Users,
  Gift,
  Briefcase,
  Stethoscope,
  Package,
  Calculator,
  Settings,
  BarChart3,
  FileText
} from 'lucide-react';

const getNavigationItems = (role: string) => {
  const baseItems = [
    { title: 'Trang Chủ', url: '/dashboard', icon: Home }
  ];

  switch (role) {
    case 'customer':
      return [
        ...baseItems,
        { title: 'Quản lý lịch hẹn', url: '/appointments', icon: Calendar },
        { title: 'Thông tin cá nhân', url: '/profile', icon: User },
        { title: 'Thẻ hội viên', url: '/membership', icon: CreditCard }
      ];

    case 'receptionist':
      return [
        ...baseItems,
        { title: 'Quản lý lịch hẹn', url: '/appointments', icon: Calendar },
        { title: 'Xử lý thanh toán', url: '/payments', icon: CreditCard },
        { title: 'Quản lý khách hàng', url: '/customers', icon: Users }
      ];

    case 'marketing':
      return [
        ...baseItems,
        { title: 'Quản lý khuyến mãi', url: '/promotions', icon: Gift }
      ];

    case 'service_manager':
      return [
        ...baseItems,
        { title: 'Quản lý dịch vụ', url: '/services', icon: Briefcase }
      ];

    case 'therapist':
      return [
        ...baseItems,
        { title: 'Quản lý liệu trình', url: '/treatments', icon: Stethoscope }
      ];

    case 'warehouse':
      return [
        ...baseItems,
        { title: 'Quản lý kho', url: '/inventory', icon: Package }
      ];

    case 'accountant':
      return [
        ...baseItems,
        { title: 'Quản lý doanh thu', url: '/revenue', icon: Calculator },
        { title: 'Báo cáo tài chính', url: '/financial-reports', icon: FileText }
      ];

    case 'manager':
      return [
        ...baseItems,
        { title: 'Quản lý quyền', url: '/permissions', icon: Settings },
        { title: 'Quản lý tài khoản', url: '/accounts', icon: Users },
        { title: 'Báo cáo thống kê', url: '/reports', icon: BarChart3 }
      ];

    default:
      return baseItems;
  }
};

export const AppSidebar: React.FC = () => {
  const { user } = useAuth();
  const { state } = useSidebar();
  const location = useLocation();

  if (!user) {
    return null;
  }

  const navigationItems = getNavigationItems(user.role);
  const currentPath = location.pathname;
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar className={isCollapsed ? 'w-14' : 'w-64'} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
