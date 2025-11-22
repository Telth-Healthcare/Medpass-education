import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    text: "The clinical research program opened doors I never imagined. The support from MedPass was incredible throughout my entire journey.",
    author: "Dr. Sarah Anderson",
    role: "Clinical Researcher",
    rating: 5,
  },
  {
    text: "Moving to the UK was seamless thanks to MedPass. Their OET preparation and placement support made all the difference in my career.",
    author: "Nurse Michelle Lee",
    role: "Registered Nurse, UK",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Are Saying
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from healthcare professionals who transformed their careers with MedPass
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl border border-border card-hover transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-hero" />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
