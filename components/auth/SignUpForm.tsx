import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { AuthHeader } from './AuthHeader';
import { AuthFooter } from './AuthFooter';
import { AuthError } from './AuthError';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Add your actual signup logic here
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <AuthHeader 
        title="Create an account" 
        description="Enter your details to create your account"
      />
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <AuthError message={error} />
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
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
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a 
              href="/login" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign in
            </a>
          </p>
        </AuthFooter>
      </form>
    </Card>
  );
}