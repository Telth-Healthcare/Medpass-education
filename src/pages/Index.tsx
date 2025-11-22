import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Journey from "@/components/Journey";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Journey />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
