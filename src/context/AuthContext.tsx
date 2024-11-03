import React, { createContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User, AuthCredentials, AuthContextType } from '../types/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

const mockAuthAPI = async (credentials: AuthCredentials): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock authentication logic
  if (credentials.email === 'admin@example.com' && credentials.password === 'admin') {
    return {
      id: '1',
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin'
    };
  } else if (credentials.email === 'traveler@example.com' && credentials.password === 'traveler') {
    return {
      id: '2',
      name: 'Traveler User',
      email: 'traveler@example.com',
      role: 'traveler'
    };
  }

  throw new Error('Invalid credentials');
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(async (credentials: AuthCredentials) => {
    setIsLoading(true);
    try {
      const user = await mockAuthAPI(credentials);
      setUser(user);
      
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/traveler');
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const logout = useCallback(() => {
    setUser(null);
    navigate('/login');
  }, [navigate]);

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};