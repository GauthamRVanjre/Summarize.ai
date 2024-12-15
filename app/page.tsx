import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <Features />
        <section id="pricing" className="w-full py-24 md:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Pricing Plans
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Basic",
                  price: "$9.99",
                  features: [
                    "50 pages/month",
                    "Standard summaries",
                    "Email support",
                  ],
                },
                {
                  name: "Pro",
                  price: "$24.99",
                  features: [
                    "Unlimited pages",
                    "Advanced summaries",
                    "Priority support",
                    "API access",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: [
                    "Custom integration",
                    "Dedicated account manager",
                    "On-premise deployment",
                    "24/7 phone support",
                  ],
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between bg-gray-800 border-gray-700"
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
        <section id="testimonials" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              What Our Users Say
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Emily Chen",
                  role: "Research Scientist",
                  quote:
                    "SummarizeAI has revolutionized my literature review process. I can quickly grasp the key points of numerous papers, saving me hours of reading time.",
                },
                {
                  name: "Mark Johnson",
                  role: "Business Analyst",
                  quote:
                    "This tool has become indispensable for my market research. I can digest lengthy reports in minutes, allowing me to make faster, data-driven decisions.",
                },
                {
                  name: "Sarah Lee",
                  role: "Law Student",
                  quote:
                    "SummarizeAI helps me tackle dense legal documents with ease. It's like having a personal assistant that highlights the most crucial information for my case studies.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4 text-gray-200">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="rounded-full bg-purple-400 w-12 h-12 mr-4"></div>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-24 md:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Ready to Supercharge Your Reading?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Join thousands of professionals saving time and increasing
                  productivity with SummarizeAI.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-sm text-gray-400">
                  Try it free for 7 days. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row items-center">
            <p className="text-xs text-gray-400">
              © 2024 SummarizeAI. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
                href="#"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
