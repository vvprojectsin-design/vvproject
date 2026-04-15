import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/vvcs-logo.png";
import { servicesData } from "@/lib/servicesData";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Industries", path: "/industries" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const firstItems = navItems.slice(0, 2);
const trailingItems = navItems.slice(2);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-22 items-center justify-between py-2 sm:py-3">
          <Link to="/" className="flex items-center gap-3 sm:gap-4">
            <img
              src={logo}
              alt="VVCS logo"
              className="logo-img h-[56px] w-[56px] object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-2xl">
                VADAPALLI VENKATESHWARA
              </span>
              <span className="text-xs font-semibold tracking-[0.32em] text-accent uppercase sm:text-sm">
                Construction Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {firstItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-slate-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative group">
                <Link
                  to="/services"
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                    location.pathname.startsWith("/services")
                      ? "text-accent"
                      : "text-slate-600"
                  )}
                >
                  Services
                  <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-accent transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              {trailingItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === item.path
                      ? "text-accent"
                      : "text-slate-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {firstItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-accent",
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="rounded-lg border border-slate-200 p-3">
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-accent",
                  location.pathname.startsWith("/services")
                    ? "text-accent"
                    : "text-slate-600"
                )}
              >
                Services
              </Link>
              <div className="mt-2 flex flex-col gap-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="pl-2 text-sm text-slate-600 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            {trailingItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-accent",
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-primary">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
