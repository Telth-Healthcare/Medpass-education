import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  // ---------- STATE ----------
  const [submitted, setSubmitted] = useState(false);

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

// ---------- SUBMIT ----------
const handleSubmit = async (e) => {
  e.preventDefault();

  if (submitted) return;

  const payload = {
    first_name: formData.first_name,
    last_name: formData.last_name,
    email: formData.email,
    phone: formData.phone,
    role: formData.role,
    message: formData.message,
    subject: "New Contact Form Submission",
  };

  try {
    const response = await fetch("https://contactforms-henna.vercel.app/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      setSubmitted(true);
    } else {
      toast.error(data.message || "Something went wrong. Please try again.");
    }
  } catch (error) {
    toast.error("Network error. Please try again later.");
  }
};

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[40vh] flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
          <div className="relative z-10 text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Get in <span className="text-white">Touch</span>
            </h1>
            <p className="mt-4 text-xl text-white/90">
              Let's discuss how we can help transform your healthcare career
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* FORM */}
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-2xl font-bold">Thank you!</h3>
                    <p className="text-muted-foreground max-w-md">
                      Your message has been sent successfully. Our team will get
                      back to you shortly.
                    </p>
                  </div>
                ) : (
                  // ✅ FORM
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                      />
                      <Input
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>

                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                    />

                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                    />

                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background"
                      required
                    >
                      <option value="">Select role</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Other">Other</option>
                    </select>

                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />

                    <Button className="w-full bg-primary text-white" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* INFO */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of the following channels. We're
                    here to help you achieve your career goals.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", content: "Info@mytelth.com" },
                    { icon: Phone, title: "Phone", content: "1800-570-0140" },
                    {
                      icon: MapPin,
                      title: "Office",
                      content:
                        "The Chambers Vardhaman Trade Center, Nehru Place, New Delhi",
                    },
                    {
                      icon: Clock,
                      title: "Hours",
                      content: "Mon – Fri: 9:00 AM – 6:00 PM EST",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-6 bg-muted/50 rounded-xl"
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  ))}
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
