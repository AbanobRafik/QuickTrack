import FeatureCard from "./Ui/FeatureCard";
import { Clock, ChartNoAxesColumn, UserRoundCheck } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-gray-100 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-roboto md:text-4xl mb-8 text-3xl font-bold text-center">
          Key Features
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          <FeatureCard
            icon={<Clock size={30} />}
            title="Real-time Tracking"
            description="Track your tasks and activities in real-time, ensuring you stay on schedule."
          />
          <FeatureCard
            icon={<ChartNoAxesColumn size={30} />}
            title="Detailed Reports"
            description="Get insights into your productivity with comprehensive analytics."
          />
          <FeatureCard
            icon={<UserRoundCheck size={30} />}
            title="User-friendly Interface"
            description="Designed for ease of use, so you can focus on your work."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
