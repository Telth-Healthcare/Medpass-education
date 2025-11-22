import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.tmcnet.com/tmc/misc/articles/image/2018-nov/9313664220-bigstock-Medical-doctor-working-with-he-SUPERSIZE.jpg"
          alt="Medical background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-600/60" />
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="space-y-6 ml-2 text-white animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Gateway to <br />
              Global Healthcare <br />
              Excellence
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-lg">
              Empowering healthcare professionals to reach their highest potential through
              world-class training, international opportunities, and unwavering support.
            </p>

            {/* <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}
          </div>

          {/* RIGHT • Patient Section */}
          <div className="flex flex-col items-start md:items-end mt-10 md:mt-0">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl shadow-lg">
              <div className="flex -space-x-2">
                <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" />
                <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" />
                <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/65.jpg" />
              </div>

              <div>
                <p className="font-bold text-white text-xl">24k</p>
                <p className="text-white/70 text-sm">Happy Patients</p>
              </div>
            </div>
          </div>

        </div>

        {/* ⭐ Stats Box Section ⭐ */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-white/70">Healthcare Professionals</div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">20+</div>
                <div className="text-sm text-white/70">Global Partners</div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">95%</div>
                <div className="text-sm text-white/70">Success Rate</div>
              </div>

            </div>
          </div>
        </div>

        {/* END STATS */}
      </div>
    </section>
  );
};

export default Hero;
