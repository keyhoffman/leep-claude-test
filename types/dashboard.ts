import { ReactNode } from 'react';

export interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

export interface DashboardLayoutProps {
  children: ReactNode;
}

export interface Application {
  company: string;
  role: string;
  date: string;
  status: 'Viewed' | 'Not Viewed' | 'Interviewing';
  views: number;
}

export interface MetricCard {
  title: string;
  value: number | string;
  change: string;
  icon: React.ElementType;
}