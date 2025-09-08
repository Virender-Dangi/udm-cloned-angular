import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-udm-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">udm</span> Global Solution
            </h3>
            <p className="text-white/80 mb-6">
              We're an independent design & development company based out of Bangalore, India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Bangalore, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">+91 (0) 80 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">info@udmglobal.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-white/80 hover:text-primary transition-colors">Off-Shore Development</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-primary transition-colors">Quality Assurance</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-primary transition-colors">Recruitment</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-primary transition-colors">Content Creation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/life" className="text-white/80 hover:text-primary transition-colors">Life @ UDM Global</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-white/80 mb-4">
              Ready to start your next project with us?
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 UDM Global Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;