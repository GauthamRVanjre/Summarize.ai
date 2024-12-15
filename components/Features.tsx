import React from "react";
import { FeaturesItems } from "@/lib/constants";

const Features = () => {
  return (
    <section id="features" className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Features
        </h2>
        <div className="grid gap-12 lg:grid-cols-3">
          {FeaturesItems.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 transition-all duration-300 transform hover:scale-105"
            >
              <feature.icon className="h-12 w-12 text-purple-400" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
