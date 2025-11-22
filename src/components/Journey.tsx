import { CheckCircle2, Calendar, FileSearch, Users, Plane } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your initial consultation to discuss your career goals and aspirations",
  },
  {
    icon: FileSearch,
    title: "Expert Assessment",
    description: "Receive a comprehensive evaluation of your qualifications and career pathway options",
  },
  {
    icon: Users,
    title: "Personalized Planning",
    description: "Get a customized roadmap tailored to your specific goals and timeline",
  },
  {
    icon: Plane,
    title: "Launch Your Journey",
    description: "Begin your transformation with continuous support every step of the way",
  },
];

const Journey = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-primary/90">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Clear Steps to Better Future
          </h2>
          <p className="text-lg text-white">
            A structured, proven pathway from where you are to where you want to be
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center card-hover">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-white" />
                  )}
                </div>
                <h3 className="text-xl text-white font-bold mb-3">{step.title}</h3>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
