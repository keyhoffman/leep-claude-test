import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { AuthHeader } from './AuthHeader';
import { AuthFooter } from './AuthFooter';
import { AuthError } from './AuthError';

interface LoginFormData {
  email: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Add your actual login logic here
      if (formData.email === 'admin@example.com' && formData.password === 'password') {
        // Successful login - redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <AuthHeader 
        title="Welcome back" 
        description="Enter your credentials to access your account"
      />
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <AuthError message={error} />
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a 
                href="/reset-password" 
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </CardContent>

        <AuthFooter>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <a 
              href="/signup" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up
            </a>
          </p>
        </AuthFooter>
      </form>
    </Card>
  );
}