import { motion } from "motion/react";
import { Target, Eye, Award, History, Shield } from "lucide-react";
import siteErectionImage from "@/assets/New folder (3)/project-site-erection.jpeg";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A legacy of excellence in industrial construction and services, 
              built on trust, safety, and technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <History className="text-accent" /> Our Journey
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Vadapalli Venkateshwara Construction Service is a growing industrial service provider specializing in construction, fabrication, maintenance, and engineering solutions.
                </p>
                <p>
                  We are committed to delivering high-quality services that meet industry standards while ensuring safety, efficiency, and reliability in every project.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={siteErectionImage}
                  alt="Construction" 
                  className="rounded-xl shadow-lg aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" 
                  alt="Engineering" 
                  className="rounded-xl shadow-lg aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" 
                  alt="Maintenance" 
                  className="rounded-xl shadow-lg aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=400" 
                  alt="Team" 
                  className="rounded-xl shadow-lg aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 bg-white rounded-2xl shadow-sm border"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide efficient, safe, and cost-effective industrial services while building long-term relationships with our clients.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-10 bg-white rounded-2xl shadow-sm border"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted leader in industrial services by delivering reliable and high-quality solutions across industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Safety First", icon: <Shield size={24} /> },
              { title: "Quality Excellence", icon: <Award size={24} /> },
              { title: "Integrity", icon: <History size={24} /> },
              { title: "Innovation", icon: <Target size={24} /> },
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-12 h-12 rounded-lg bg-slate-100 text-primary flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-bold text-primary">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
