import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 text-black bg-clip-text">
              MedPass
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10">
            {[
              ["Home", "/"],
              ["For Doctors", "/doctors"],
              ["For Nurses", "/nurses"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, link]) => (
              <li key={label}>
                <Link
                  to={link}
                  className="relative text-black hover:text-black transition-colors 
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 
                  after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="px-6 py-2 bg-primary text-white rounded-full shadow-lg hover:opacity-90 transition">
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white/5 backdrop-blur-xl border-t border-white/10 py-4 animate-fade-in">
            <ul className="flex flex-col space-y-4 px-2">
              {[
                ["Home", "/"],
                ["For Doctors", "/doctors"],
                ["For Nurses", "/nurses"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    to={link}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-black hover:text-black"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <Button className="w-full bg-primary text-white rounded-full mt-4">
                Schedule Consultation
              </Button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
