import Navbar from "@/components/Navbar";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
const page = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Simple, transparent pricing for your business needs.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Free</h3>
              <p className="mt-4 text-gray-400">
                Get started with our basic features.
              </p>
            </div>
        
          </div>
        </div>
    </div>
  );
};

export default page;
