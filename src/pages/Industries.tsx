import { motion } from "motion/react";
import { Zap, Droplets, Factory, Building2, Ship, Database } from "lucide-react";

const industries = [
  {
    title: "Power Plants",
    icon: <Zap size={40} />,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600",
    desc: "Thermal & WHR Boilers support, maintenance, and construction services."
  },
  {
    title: "Oil & Gas",
    icon: <Droplets size={40} />,
    image: "https://images.unsplash.com/photo-1544380904-c686aad2fb40?auto=format&fit=crop&q=80&w=600",
    desc: "Specialized piping, structural, and maintenance solutions for refineries and offshore platforms."
  },
  {
    title: "Manufacturing",
    icon: <Factory size={40} />,
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600",
    desc: "End-to-end industrial infrastructure for automotive, chemical, and heavy machinery plants."
  },
  {
    title: "Infrastructure",
    icon: <Building2 size={40} />,
    image: "https://images.unsplash.com/photo-1503387762-592dee58292b?auto=format&fit=crop&q=80&w=600",
    desc: "Large-scale structural works for bridges, tunnels, and public utility complexes."
  },
  {
    title: "Shipbuilding",
    icon: <Ship size={40} />,
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=600",
    desc: "Structural fabrication and mechanical erection services for the maritime industry."
  },
  {
    title: "Data Centers",
    icon: <Database size={40} />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600",
    desc: "Precision structural and mechanical setup for high-density computing facilities."
  }
];

export default function Industries() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We serve a wide range of industries with customized industrial solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg h-[450px]"
              >
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center mb-6 shadow-lg">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-slate-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Global Standards, Local Expertise</h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We combine international engineering standards with deep local knowledge to deliver 
            projects that are compliant, efficient, and sustainable. Our multi-disciplinary 
            teams are equipped to handle projects of any scale, anywhere.
          </p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
            {/* Placeholder for client logos */}
            <div className="text-2xl font-black text-slate-400">POWERGEN</div>
            <div className="text-2xl font-black text-slate-400">PETROCORP</div>
            <div className="text-2xl font-black text-slate-400">INFRA-X</div>
            <div className="text-2xl font-black text-slate-400">SHIP-TECH</div>
            <div className="text-2xl font-black text-slate-400">DATA-FLOW</div>
          </div>
        </div>
      </section>
    </div>
  );
}
