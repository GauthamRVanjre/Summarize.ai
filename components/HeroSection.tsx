import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Summarize PDFs in Seconds
            </h1>
            <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed">
              Transform lengthy PDFs into concise summaries with our AI-powered
              tool. Save time and boost productivity.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Try for Free
            </Button>
            <Button
              variant="outline"
              className="text-purple-400 border-purple-400 hover:bg-purple-400"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
