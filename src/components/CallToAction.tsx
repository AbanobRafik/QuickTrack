import Button from "./Ui/Button";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br  text-black py-16 px-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Boost Your Productivity?
        </h2>
        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8">
          Join thousands of professionals using QuickTrack to manage their time
          effectively.
        </p>
        {/* Call-to-Action Button */}
        <Button className="bg-redOrange hover:bg-red-600 text-white text-xl  transition-transform transform hover:scale-105">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
