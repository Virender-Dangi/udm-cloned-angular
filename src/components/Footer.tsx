import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-udm-navy text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 tracking-tight">
              <span className="text-primary">UDM</span> Global Solution
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              An Information Technology company based out of Bangalore, India. Founded in April 2017.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/80">#1282, 17th Cross, 5th Main, Sector 7, HSR Layout, Bangalore - 560102</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-white/80">+91 80-43009165</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-white/80">contact@udmglobal.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/90">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-white/70 hover:text-primary transition-colors">Development</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-primary transition-colors">UI Development</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-primary transition-colors">Testing</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-primary transition-colors">Recruitment Process Outsourcing</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-primary transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/90">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/life" className="text-white/70 hover:text-primary transition-colors">Life @ UDM Global</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white/90">Working Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Monday – Friday: 9am to 6pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} UDM Global Solution Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
