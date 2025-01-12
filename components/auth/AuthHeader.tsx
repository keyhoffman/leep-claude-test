import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AuthHeaderProps {
  title: string;
  description?: string;
}

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      {description && (
        <CardDescription>{description}</CardDescription>
      )}
    </CardHeader>
  );
}