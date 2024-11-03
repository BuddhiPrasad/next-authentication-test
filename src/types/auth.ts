export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'traveler';
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => void;
}