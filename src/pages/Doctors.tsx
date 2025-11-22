import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, Brain, Activity, Globe } from "lucide-react";

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070')] bg-cover bg-center opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Clinical Research Programs for <span className="text-white">Doctors</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Advance your medical career through specialized research programs in cutting-edge fields
              </p>
              {/* <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </section>

        {/* Program Areas */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Research Specializations
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from our diverse range of clinical research programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Microscope, title: "Big Data in Medicine", desc: "Analyze large-scale medical datasets" },
                { icon: Brain, title: "Digital Health", desc: "Explore telemedicine and health tech" },
                { icon: Activity, title: "Medical Diagnostics", desc: "Advanced diagnostic techniques" },
                { icon: Globe, title: "Global Health", desc: "International healthcare systems" },
              ].map((program, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground text-sm">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Program Benefits
              </h2>
              <div className="space-y-4">
                {[
                  "International recognition and certification",
                  "Hands-on research experience with leading institutions",
                  "Networking opportunities with global healthcare leaders",
                  "Career advancement and placement support",
                  "Flexible program durations to fit your schedule",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Doctors;
