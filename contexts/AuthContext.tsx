import { createContext, useContext, useState, useEffect } from 'react';
import type { User, AuthState } from '@/types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Add your session check logic here
      setState(prev => ({ ...prev, loading: false }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Failed to check authentication'
      }));
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Add your login logic here
      setState(prev => ({ 
        ...prev, 
        user: {
          id: '1',
          name: 'Test User',
          email: email,
          role: 'user'
        } 
      }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: 'Invalid credentials'
      }));
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Add your logout logic here
      setState(prev => ({ 
        ...prev, 
        user: null 
      }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: 'Failed to logout'
      }));
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // Add your signup logic here
      setState(prev => ({ 
        ...prev, 
        user: {
          id: '1',
          name: name,
          email: email,
          role: 'user'
        } 
      }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: 'Failed to create account'
      }));
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}