import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/vvcs-logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1 ring-1 ring-white/20">
                <img src={logo} alt="VVCS logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight tracking-tight">
                  VADAPALLI VENKATESHWARA
                </span>
                <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                  Construction Service
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Leading provider of industrial services, construction, and manpower solutions. 
              Delivering excellence in engineering and maintenance since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/about" className="text-sm text-slate-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-slate-300 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm text-slate-300 hover:text-accent transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-slate-300 hover:text-accent transition-colors">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-300">
              <li>Construction & Engineering</li>
              <li>Maintenance Services</li>
              <li>Lifting & Rigging</li>
              <li>Scaffolding Services</li>
              <li>Welding & Fabrication</li>
              <li>Electrical Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-sm text-slate-300">
                  Your City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-sm text-slate-300">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-sm text-slate-300">your@email.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Vadapalli Venkateshwara Construction Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
