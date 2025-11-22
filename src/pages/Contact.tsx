import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {

  // ---------- STATE ----------
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ---------- SUBMIT FUNCTION ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    fd.append("first_name", formData.first_name);
    fd.append("last_name", formData.last_name);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("role", formData.role);
    fd.append("message", formData.message);
    fd.append("subject", "New Contact Form Submission");
    fd.append("botcheck", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fd,
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
      });
    } else {
      alert(data.message || "Something went wrong. Please try again.");
    }
  };

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

                <form className="space-y-6" onSubmit={handleSubmit}>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">I am a</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Other Healthcare Professional">Other Healthcare Professional</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your career goals..."
                      rows={5}
                      required
                    />
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
                    { icon: Phone, title: "Phone", content: "1800-570-0140", link: "tel:1800-570-0140" },
                    { icon: MapPin, title: "Office", content: "The Chambers Vardhaman Trade Center, 3 rd Floor, Nehru Place, New Delhi 110019, India" },
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

                {/* <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-lg mb-2">Book a Free Consultation</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a one-on-one consultation with our career advisors
                  </p>
                  <Button className="bg-primary border-0 w-full">
                    Schedule Now
                  </Button>
                </div> */}

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
