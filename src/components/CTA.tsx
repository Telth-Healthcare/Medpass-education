import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 relative">
      {/* Background gradient blur */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-4xl p-[2px]
            bg-white 
            shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          "
        >
          {/* Frosted-glass card */}
          <div
            className="
              relative rounded-4xl
              bg-white/20 backdrop-blur-xl
              px-10 py-20 md:py-28 text-center
            "
          >
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary drop-shadow-sm">
                Transform Your Career with Confidence
              </h2>

              <p className="text-xl md:text-2xl text-primary/90 leading-relaxed">
                Take your next step toward international healthcare excellence.
                Our expert advisors are ready to guide you forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
                {/* Primary CTA */}
                <Button
                  size="lg"
                  className="
                    px-10 py-6 text-lg font-semibold
                    bg-primary text-white hover:bg-primary/90
                    rounded-xl shadow-[0_8px_20px_rgba(255,255,255,0.3)]
                    transition-all
                  "
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* Secondary CTA */}
                <Button
                  size="lg"
                  variant="outline"
                  className="
                    px-10 py-6 text-lg font-semibold
                    border-primary/60 text-primary hover:bg-primary/70
                    rounded-xl
                    backdrop-blur-md
                  "
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Today
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative glow circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
