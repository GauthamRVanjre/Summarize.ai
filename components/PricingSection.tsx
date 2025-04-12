import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PricingItems } from "@/lib/constants";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-24 md:py-32 bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Pricing Plans
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {PricingItems.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between bg-gray-800 border-gray-700 hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold mb-4 text-white">
                  {plan.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-gray-200"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Choose Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
