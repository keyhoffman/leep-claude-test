import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Code, Palette, Rocket, Check, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Leep</div>
            <div className="flex gap-4">
              <Button variant="ghost">How it Works</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Blog</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Land Your Dream Contracts with Custom Video Landing Pages
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stand out from the crowd. Create personalized video pitches for every job application and increase your chances of landing freelance contracts.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
                <Camera className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Freelancers Choose Leep</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Camera}
              title="Custom Video Pages"
              description="Create professional video landing pages tailored to each job application in minutes."
            />
            <FeatureCard
              icon={Rocket}
              title="Higher Success Rate"
              description="Stand out from text-only applications and dramatically increase your chances of getting hired."
            />
            <FeatureCard
              icon={Code}
              title="Developer Friendly"
              description="Built specifically for software developers and UX designers, with features that showcase your skills."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Record Your Pitch"
              description="Use our easy recording tool to create a personalized video pitch."
            />
            <StepCard
              number="2"
              title="Customize Your Page"
              description="Add your portfolio, skills, and relevant experience to your landing page."
            />
            <StepCard
              number="3"
              title="Share & Track"
              description="Share your custom URL and track when clients view your application."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Land More Contracts?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of freelancers who are already using Leep to stand out.</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Creating For Free
          </Button>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <Card className="p-6">
    <CardContent className="space-y-4 pt-4">
      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => (
  <div className="text-center">
    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default LandingPage;