export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface Application {
  id: string;
  company: string;
  role: string;
  date: string;
  status: 'Viewed' | 'Not Viewed' | 'Interviewing';
  views: number;
}

export interface VideoPitch {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
  views: number;
}

export interface DashboardStats {
  totalApplications: number;
  totalVideos: number;
  responseRate: number;
  interviewInvites: number;
}