import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  const recentApplications = [
    {
      company: 'TechCorp Inc.',
      role: 'Senior Frontend Developer',
      date: '2025-01-10',
      status: 'Viewed',
      views: 12
    },
    {
      company: 'Design Studio X',
      role: 'UX Designer',
      date: '2025-01-09',
      status: 'Not Viewed',
      views: 0
    },
    {
      company: 'StartupXYZ',
      role: 'Full Stack Developer',
      date: '2025-01-08',
      status: 'Interviewing',
      views: 8
    }
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button className="flex gap-2">
            <Plus className="h-5 w-5" />
            Create New Video Pitch
          </Button>
          <Button variant="outline" className="flex gap-2">
            Track Applications
            <ArrowRight className="h-5 w-5" />
          </Button>
        </CardContent>
      </Card>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm">
                  <th className="text-left py-3 px-4 font-medium">Company</th>
                  <th className="text-left py-3 px-4 font-medium">Role</th>
                  <th className="text-left py-3 px-4 font-medium">Date</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Views</th>
                  <th className="text-right py-3 px-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3 px-4">{app.company}</td>
                    <td className="py-3 px-4">{app.role}</td>
                    <td className="py-3 px-4">{app.date}</td>
                    <td className="py-3 px-4">
                      <span 
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                          ${app.status === 'Viewed' ? 'bg-green-100 text-green-800' : 
                            app.status === 'Interviewing' ? 'bg-blue-100 text-blue-800' : 
                            'bg-gray-100 text-gray-800'}`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{app.views}</td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}