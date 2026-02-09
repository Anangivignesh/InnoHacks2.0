import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('innohacks_user');
    const storedToken = localStorage.getItem('innohacks_token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Mock authentication
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0],
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        college: 'Tech University',
        role: 'participant',
        teamId: null,
        registeredAt: new Date().toISOString(),
      };
      
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('innohacks_user', JSON.stringify(mockUser));
      localStorage.setItem('innohacks_token', mockToken);
      
      setUser(mockUser);
      setIsAuthenticated(true);
      toast.success('Welcome back to InnoHacks 2.0!');
      return { success: true };
    } catch (error) {
      toast.error('Login failed. Please try again.');
      return { success: false, error: error.message };
    }
  };

  const signup = async (name, email, password, college) => {
    try {
      const mockUser = {
        id: '1',
        email,
        name,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        college,
        role: 'participant',
        teamId: null,
        registeredAt: new Date().toISOString(),
      };
      
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      localStorage.setItem('innohacks_user', JSON.stringify(mockUser));
      localStorage.setItem('innohacks_token', mockToken);
      
      setUser(mockUser);
      setIsAuthenticated(true);
      toast.success('Welcome to InnoHacks 2.0!');
      return { success: true };
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('innohacks_user');
    localStorage.removeItem('innohacks_token');
    setUser(null);
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    localStorage.setItem('innohacks_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    toast.success('Profile updated successfully');
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    signup,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
