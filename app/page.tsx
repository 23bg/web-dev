import React from 'react';
import Card from './components/Card';
import Testimonial from './components/Testimonial';
import { Users, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            The Beautiful Way to Build Customer Relationships
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Clay is a beautiful, easy-to-use tool for building and managing customer relationships.
          </p>
        </div>
        <div className="space-x-4">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-500 font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Connect Your Tools"
          description="Integrate with your favorite tools and services."
          icon={<img src="https://www.clay.com/images/integrations.png" alt="Integrations" className="h-12 w-12" />}
        />
        <Card
          title="Build Relationships"
          description="Nurture your customer relationships with personalized interactions."
          icon={<Users className="h-12 w-12 text-primary" />}
        />
        <Card
          title="Automate Workflows"
          description="Streamline your workflow with automated tasks and reminders."
          icon={<Clock className="h-12 w-12 text-primary" />}
        />
        <Card
          title="Analyze Performance"
          description="Track your performance with insightful analytics and reporting."
          icon={<img src="https://www.clay.com/images/analytics.png" alt="Analytics" className="h-12 w-12" />}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Testimonial
            key={i}
            text="Clay has been a game-changer for our business. We've seen a significant increase in customer engagement and retention."
            name="Jane Doe"
            title="Customer"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
