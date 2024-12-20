import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md p-6 bg-gradient-to-br from-white to-gray-50 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="flex items-center justify-center flex-col mb-6">
        <div className="text-5xl text-blue-600 p-4 rounded-full mb-4 transform transition-transform hover:rotate-12 hover:scale-110 duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-2 text-center text-blue-700">
          {title}
        </h3>
        <p className="text-gray-600 text-base text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
