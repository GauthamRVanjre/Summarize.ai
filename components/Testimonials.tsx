import { Card, CardContent } from "@/components/ui/card";
import { TestimonialItems } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          What Our Users Say
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {TestimonialItems.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:scale-105 transition-all duration-300"
            >
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
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
