import Button from "./Ui/Button";

const Hero = () => {
  return (
    <header className="bg-Blue min-w-full flex justify-center items-center py-12 md:py-24 px-4">
      <div className="text-center text-white container mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
          Track Your Time Effortlessly
        </h1>
        {/* Tagline */}
        <p className="font-roboto text-lg sm:text-xl mt-4">
          The best time-tracking tool for busy professionals.
        </p>
        {/* Button */}
        <div className="mt-6">
          <Button className="bg-redOrange hover:bg-red-500 text-white transition-all duration-300 py-2 px-6 rounded-lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
