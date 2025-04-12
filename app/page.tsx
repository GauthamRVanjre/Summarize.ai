import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <Features />
        <PricingSection />
        <Testimonials />
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
      <Footer />
    </>
  );
}
