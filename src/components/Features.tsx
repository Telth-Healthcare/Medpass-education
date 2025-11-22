import { Shield, Users, Target, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Support, Every Step",
    description:
      "From your first inquiry to your final milestone, our team provides personalized guidance so you're never alone.",
  },
  {
    icon: Users,
    title: "Global Partnerships, Local Care",
    description:
      "We collaborate with world-class medical institutions while keeping the approach personal and human-centered.",
  },
  {
    icon: Target,
    title: "Proven Pathways to Success",
    description:
      "With structured learning and international opportunities, we help healthcare professionals elevate their careers.",
  },
  {
    icon: Award,
    title: "Beyond Training—Transformation",
    description:
      "We empower you not just with training, but with confidence and skills to excel globally.",
  },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-muted/40">

      {/* Background Shapes */}
      {/* <div className="absolute -top-20 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute top-40 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px]"></div> */}
      {/* <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-300/20 rounded-full blur-[150px]"></div> */}

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Transforming Healthcare Careers With Excellence & Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Our mission is to guide, inspire, and empower healthcare professionals
            on their journey to global success.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 delay-${index * 150
                  } ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                  } ${isReverse ? "md:flex-row-reverse" : ""}`}
              >
                {/* Icon + Title + Text */}
                <div className={`${isReverse ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-2">
                    {/* Premium Gradient Icon */}
                    <div className="relative w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-blue-500/20">
                      <feature.icon className="h-9 w-9 text-white" />
                      <div className="absolute inset-0 rounded-2xl blur-xl bg-blue-500/40"></div>
                    </div>

                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Line + Shape */}
                <div
                  className={`relative ${isReverse ? "md:order-1" : ""
                    } flex justify-center`}
                >
                  {/* Elegant vertical gradient line */}
                  <div className="w-[3px] h-48 bg-primary rounded-full opacity-70"></div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
          <div className="absolute bottom-0 left-0 w-full h-16 blur-2xl bg-teal-100 rounded-t-[80px]"></div>
    </section>
  );
};

export default Features;
