import { Link } from "react-router-dom";
import logo from "@/assets/udm-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-[13px]">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="UDM Global Solution logo" width="140" height="32" loading="lazy" decoding="async" className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              An Information Technology company based in Bengaluru, India.
              Founded in April 2017.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary">Application Development</Link></li>
              <li><Link to="/services" className="hover:text-primary">Cloud & Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-primary">Data Engineering</Link></li>
              <li><Link to="/services" className="hover:text-primary">Quality Assurance</Link></li>
              <li><Link to="/services" className="hover:text-primary">AI-Assisted Workflows</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/life" className="hover:text-primary">Life @ UDM</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                1st Floor, Vajram Esteva,<br />
                New Survey No. 57/4, Old Survey No. 57/2,<br />
                Marathahalli–Sarjapur Outer Ring Road (ORR),<br />
                Varthur, Devarabisanahalli,<br />
                Bengaluru, Karnataka 560103
              </li>
              <li>
                <a href="tel:+917338559996" className="hover:text-primary">+91 73385 59996</a>
              </li>
              <li>
                <a href="mailto:contact@udmglobal.com" className="hover:text-primary">contact@udmglobal.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} UDM Global Solution Pvt. Ltd. All rights reserved.</p>
          <p>Mon–Fri, 9am to 6pm IST</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
