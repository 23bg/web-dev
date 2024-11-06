import React from 'react';

interface TestimonialProps {
  text: string;
  name: string;
  title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, title }) => {
  return (
    <div className="p-6 space-y-2">
      <p className="text-gray-500 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-2">
        <img
          src={"/placeholder.svg?height=40&width=40"}
          alt="Customer"
          className="rounded-full"
          width={40}
          height={40}
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

