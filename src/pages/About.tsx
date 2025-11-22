import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                About MedPass
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Empowering healthcare professionals to achieve their global career aspirations
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To bridge the gap between talented healthcare professionals and world-class international opportunities, 
                  providing comprehensive support at every step of their career transformation journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Target, title: "Our Vision", desc: "To be the leading global platform connecting healthcare professionals with international career opportunities, recognized for excellence in training and support." },
                  { icon: Heart, title: "Our Values", desc: "Integrity, Excellence, Compassion, and Innovation guide everything we do. We treat every professional's dream with the care it deserves." },
                ].map((item, index) => (
                  <div key={index} className="bg-card p-8 rounded-2xl border border-border card-hover">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { number: "500+", label: "Healthcare Professionals Placed" },
                { number: "20+", label: "Global Partner Institutions" },
                { number: "95%", label: "Success Rate" },
                { number: "15+", label: "Years of Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose MedPass
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Award, title: "Proven Track Record", desc: "Over 500 successful placements across the globe" },
                { icon: Users, title: "Personalized Support", desc: "Dedicated team guiding you every step of the way" },
                { icon: Target, title: "End-to-End Service", desc: "From initial consultation to successful placement" },
              ].map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-6">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.desc}</p>
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

export default About;
