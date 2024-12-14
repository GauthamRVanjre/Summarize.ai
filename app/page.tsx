"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileText, Zap, Clock, BarChart, Check, Menu } from "lucide-react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <header className="fixed w-full px-4 lg:px-6 h-14 flex items-center justify-between z-50 bg-gray-950/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-lg font-bold text-purple-400">
            SummarizeAI
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              className="text-sm font-medium hover:text-purple-400 transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-gray-100 hover:text-purple-400 hover:bg-gray-800"
          >
            Log in
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Sign up
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-gray-100" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-gray-900"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-purple-400">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  className="text-lg font-medium text-white  hover:text-purple-400 transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                className="text-md text-purple-600 bg-white font-medium hover:text-purple-400 hover:bg-purple-200"
              >
                Log in
              </Button>
              <Button className="text-md bg-purple-600 hover:bg-purple-700 text-white">
                Sign up
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div
                className="space-y-2"
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                  opacity: Math.max(0, 1 - scrollY / 500),
                }}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                  Summarize PDFs in Seconds
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed">
                  Transform lengthy PDFs into concise summaries with our
                  AI-powered tool. Save time and boost productivity.
                </p>
              </div>
              <div
                className="space-x-4"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                  opacity: Math.max(0, 1 - scrollY / 700),
                }}
              >
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
        <section id="features" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Features
            </h2>
            <div className="grid gap-12 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "AI-Powered Summarization",
                  description:
                    "Our advanced AI algorithms extract key information from your PDFs quickly and accurately.",
                },
                {
                  icon: Clock,
                  title: "Time-Saving",
                  description:
                    "Get concise summaries in seconds, allowing you to digest information from long documents efficiently.",
                },
                {
                  icon: BarChart,
                  title: "Customizable Output",
                  description:
                    "Adjust summary length and focus to suit your specific needs and preferences.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 transition-all duration-300 transform hover:scale-105"
                >
                  <feature.icon className="h-12 w-12 text-purple-400" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-center text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
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
    </div>
  );
}
