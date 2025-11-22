import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, GraduationCap, Plane, Heart } from "lucide-react";

const Nurses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')] bg-cover bg-center opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                International Nursing <span className="text-white">Opportunities</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Take your nursing career global with placements in the UK and Germany
              </p>
              {/* <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Your Destinations
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from premier healthcare systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-2xl border border-border card-hover">
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-4">United Kingdom</h3>
                <p className="text-muted-foreground mb-6">
                  Join the NHS and experience world-class healthcare delivery in a multicultural environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Competitive salaries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Professional development opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Full visa sponsorship</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border card-hover">
                <MapPin className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-3xl font-bold mb-4">Germany</h3>
                <p className="text-muted-foreground mb-6">
                  Work in one of Europe's most advanced healthcare systems with excellent work-life balance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">•</span>
                    <span>High quality of life</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">•</span>
                    <span>Comprehensive language training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">•</span>
                    <span>Family relocation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Support */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete Support Package
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: GraduationCap, title: "OET Preparation", desc: "Comprehensive exam preparation and coaching" },
                { icon: Plane, title: "Visa Processing", desc: "Full assistance with visa applications and documentation" },
                { icon: Heart, title: "Settlement Support", desc: "Help with accommodation, banking, and integration" },
              ].map((support, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6">
                    <support.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{support.title}</h3>
                  <p className="text-muted-foreground">{support.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nurses;
