import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  HeartPulse,
  ArrowRight,
  Microscope,
  Users,
  Brain,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";
import { fadeUp, staggerWrapper, cardMotion, floatIcon } from "@/components/variants/servicesMotion.js";

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-16 blur-2xl bg-teal-100 rounded-t-[80px]"></div> */}

      {/* PARALLAX BACKGROUND SHAPES */}
      <motion.div
        initial={{ y: -60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
      // className="absolute -top-32 -left-20 w-96 h-96 bg-blue-400/20 blur-[120px] rounded-full"
      />

      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
      // className="absolute top-40 -right-24 w-[420px] h-[420px] bg-cyan-300/20 blur-[150px] rounded-full"
      />

      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-300/20 blur-[140px] rounded-full"
      />

      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Healthcare Career Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored pathways for doctors and nurses seeking international excellence
          </p>
        </motion.div>

        {/* MAIN SERVICES GRID */}
        <motion.div
          variants={staggerWrapper}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"
        >
          {[
            { icon: Microscope, title: "Clinical Research", desc: "Advanced research programs in cutting-edge medical fields" },
            { icon: Brain, title: "Digital Health", desc: "Specialization in modern healthcare technology" },
            { icon: Activity, title: "Medical Diagnostics", desc: "Expert training in diagnostic procedures" },
            { icon: Users, title: "International Placement", desc: "Global career opportunities in UK & Germany" },
            { icon: HeartPulse, title: "OET Preparation", desc: "Comprehensive exam preparation support" },
            { icon: Stethoscope, title: "Clinical Excellence", desc: "World-class clinical training programs" },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={cardMotion}
              className="relative bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              {/* Floating Icon */}
              <motion.div
                variants={floatIcon}
                initial="initial"
                // animate="animate"
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white transition-all"
              >
                <service.icon className="h-6 w-6 text-primary group-hover:text-primary transition-colors" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 pr-12">{service.title}</h3>
              <p className="">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* FEATURED PROGRAMS */}
        <motion.div
          variants={staggerWrapper}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-20"
        >
          {/* Doctors */}
          <motion.div
            variants={fadeUp}
            className="
    relative p-10 rounded-3xl
    bg-[hsl(var(--card))]
    shadow-[8px_8px_20px_#c7d2d9,-8px_-8px_20px_#ffffff]
    border border-transparent
  "
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shadow-inner mb-6">
              <Stethoscope className="h-10 w-10 text-primary" />
            </div>

            <h3 className="text-3xl font-bold mb-3">For Doctors</h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Advance your career through specialized clinical research programs in fields
              like Big Data, Digital Health, Diagnostics, and more.
            </p>

            <Link to="/doctors">
              <Button className="border-2 bg-white hover:bg-primary text-black border border-primary">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>


          {/* Nurses */}
          <motion.div
            variants={fadeUp}
            className="
    relative p-10 rounded-3xl
    bg-[hsl(var(--card))]
    shadow-[8px_8px_20px_#c7d2d9,-8px_-8px_20px_#ffffff]
    border border-transparent
  "
          >
            <div className="w-20 h-20 rounded-3xl bg-teal-500/10 flex items-center justify-center shadow-inner mb-6">
              <HeartPulse className="h-10 w-10 text-teal-600" />
            </div>

            <h3 className="text-3xl font-bold mb-3">For Nurses</h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              UK & Germany nursing pathways with OET training and full placement support.
            </p>

            <Link to="/nurses">
              <Button className="border-2 bg-white hover:bg-primary text-black border border-primary">
                Explore Opportunities
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;
