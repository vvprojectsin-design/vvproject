import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Shield, Users, Zap, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden premium-gradient flex items-center">
        <div className="absolute inset-0 opacity-20 industrial-grid" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
              Building the Future of Industry
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Reliable Industrial <br />
              <span className="text-accent">Solutions You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Delivering high-quality construction, fabrication, and engineering services with a strong commitment to safety, precision, and timely execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 h-14 text-lg">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white/20 hover:bg-white/10 h-14 px-8 text-lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shapes for premium look */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-accent/5 skew-x-[-15deg] translate-x-1/2" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "25+" },
              { label: "Projects Completed", value: "500+" },
              { label: "Expert Workers", value: "1200+" },
              { label: "Safety Rating", value: "99.9%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial Construction" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl border hidden md:block max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Shield size={24} />
                  </div>
                  <h4 className="font-bold text-primary">Certified Safety</h4>
                </div>
                <p className="text-sm text-slate-600">
                  We maintain the highest safety standards in the industry, ensuring zero accidents on site.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                End-to-End <br />
                <span className="text-accent">Industrial Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Vadapalli Venkateshwara Construction Service provides end-to-end industrial solutions including construction, maintenance, fabrication, and engineering services across multiple industries.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Comprehensive Engineering & Construction",
                  "Specialized Maintenance & Shutdown Services",
                  "Expert Manpower & Technical Support",
                  "Advanced Lifting & Rigging Solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-accent" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Specializations</h2>
            <p className="text-slate-600">
              We offer a wide range of industrial services tailored to meet the specific needs 
              of power plants, oil & gas, and manufacturing sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Workforce",
                desc: "Highly skilled professionals with years of industry expertise.",
                icon: <Users size={32} />,
              },
              {
                title: "Safety-First Approach",
                desc: "Strict adherence to safety standards and zero-accident policy.",
                icon: <Shield size={32} />,
              },
              {
                title: "Timely Project Delivery",
                desc: "Commitment to meeting deadlines without compromising quality.",
                icon: <Zap size={32} />,
              },
              {
                title: "Cost-Effective Solutions",
                desc: "Optimized processes to deliver value-driven industrial services.",
                icon: <CheckCircle2 size={32} />,
              }
            ].map((highlight, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl border bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{highlight.title}</h3>
                <p className="text-slate-600 text-sm">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
            <p className="text-slate-600">
              We stand out in the industry due to our unwavering commitment to excellence and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Skilled & experienced workforce",
              "Strong focus on safety standards",
              "Reliable and timely execution",
              "Cost-effective solutions",
              "Commitment to quality"
            ].map((reason, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border shadow-sm text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="text-accent" size={32} />
                <p className="font-bold text-primary text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 premium-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 industrial-grid" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Get in touch with us to discuss <br /> your project requirements.
          </h2>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-10 h-16 text-xl">
            <Link to="/contact">Get in Touch Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
