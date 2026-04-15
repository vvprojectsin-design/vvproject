import { motion } from "motion/react";
import { 
  HardHat, Settings, Anchor, Layers, Flame, Zap, 
  Construction, Pipette, Wrench
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Mechanical Services",
    icon: <Wrench className="text-accent" />,
    desc: "Comprehensive mechanical support including equipment installation, alignment, and servicing for industrial systems."
  },
  {
    title: "Lifting & Rigging Services",
    icon: <Anchor className="text-accent" />,
    desc: "Safe lifting operations, rigging execution, load handling, and heavy equipment shifting with planned procedures."
  },
  {
    title: "Piping and Fabrication Service",
    icon: <Pipette className="text-accent" />,
    desc: "Industrial piping fabrication and erection with precision welding, fit-up, and reliable on-site installation."
  },
  {
    title: "Heavy Structure Fabrication",
    icon: <HardHat className="text-accent" />,
    desc: "Fabrication of heavy structural components for plants and large-scale projects with strict quality checks."
  },
  {
    title: "Construction & Engineering Services",
    icon: <Construction className="text-accent" />,
    desc: "End-to-end construction and engineering solutions including civil, structural, and industrial project execution."
  },
  {
    title: "Maintenance Services",
    icon: <Settings className="text-accent" />,
    desc: "Preventive and breakdown maintenance services to ensure uninterrupted, safe, and efficient plant operations."
  },
  {
    title: "Scaffolding Services",
    icon: <Layers className="text-accent" />,
    desc: "Scaffolding erection, dismantling, and access platform support for safe working at heights."
  },
  {
    title: "Welding & Fabrication Services",
    icon: <Flame className="text-accent" />,
    desc: "High-quality arc, gas, TIG, and MIG welding with structural fabrication, repairs, and modification work."
  },
  {
    title: "Electrical Services",
    icon: <Zap className="text-accent" />,
    desc: "Electrical installation, cable laying, termination, and power distribution support for industrial facilities."
  }
];

export default function Services() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">All Industrial Services</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Overview of our industrial service portfolio, delivered with precision and expertise. 
              We cover every aspect of construction, maintenance, and project support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-none shadow-sm">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Specialized Approach</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Every industrial project has unique challenges. We approach each task with 
                  a customized strategy that prioritizes safety, efficiency, and long-term 
                  reliability. Our team of experts is trained to handle complex environments 
                  and high-stakes operations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-accent font-bold mb-2">Safety First</h4>
                    <p className="text-sm text-slate-400">Zero-accident policy on all sites.</p>
                  </div>
                  <div>
                    <h4 className="text-accent font-bold mb-2">Quality Control</h4>
                    <p className="text-sm text-slate-400">Strict adherence to ISO standards.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial Service" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
