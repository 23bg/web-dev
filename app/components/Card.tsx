import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 flex flex-col items-center text-center space-y-2">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Card;