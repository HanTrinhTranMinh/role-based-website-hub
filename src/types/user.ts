
export type UserRole = 
  | 'guest'
  | 'customer'
  | 'receptionist'
  | 'marketing'
  | 'service_manager'
  | 'therapist'
  | 'warehouse'
  | 'accountant'
  | 'manager';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
