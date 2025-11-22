import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/70 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-white">MedPass</span>
            </div>
            <p className="text-white text-sm">
              Empowering healthcare professionals to reach their highest potential through world-class training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/doctors" className="block text-white hover:text-primary transition-colors">
                For Doctors
              </Link>
              <Link to="/nurses" className="block text-white hover:text-primary transition-colors">
                For Nurses
              </Link>
              <Link to="/about" className="block text-white hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4 text-white">Programs</h3>
            <div className="space-y-2">
              <div className="text-white text-sm">Clinical Research</div>
              <div className="text-white text-sm">UK Nursing</div>
              <div className="text-white text-sm">Germany Nursing</div>
              <div className="text-white text-sm">OET Preparation</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Info@mytelth.com</span>
              </div>
              <div className="flex items-start gap-2 text-white text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>1800-570-0140</span>
              </div>
              <div className="flex items-start gap-2 text-white text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>The Chambers Vardhaman Trade Center, 3 rd Floor, Nehru Place, New Delhi 110019, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <p>© 2024 MedPass. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
