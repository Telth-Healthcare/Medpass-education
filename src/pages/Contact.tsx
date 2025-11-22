import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Get in <span className="text-white">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Let's discuss how we can help transform your healthcare career
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">I am a</label>
                    <select className="w-full px-3 py-2 rounded-md border border-input bg-background">
                      <option>Select...</option>
                      <option>Doctor</option>
                      <option>Nurse</option>
                      <option>Other Healthcare Professional</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your career goals..." rows={5} />
                  </div>
                  <Button className="w-full bg-primary border-0 text-white" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. We're here to help you achieve your career goals.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", content: "info@medpass.com", link: "mailto:info@medpass.com" },
                    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567", link: "tel:+15551234567" },
                    { icon: MapPin, title: "Office", content: "123 Healthcare Plaza, Medical District, NY 10001" },
                    { icon: Clock, title: "Hours", content: "Monday - Friday: 9:00 AM - 6:00 PM EST" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-muted/50 rounded-xl card-hover">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">Book a Free Consultation</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a one-on-one consultation with our career advisors
                  </p>
                  <Button className="bg-primary border-0 w-full">
                    Schedule Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
