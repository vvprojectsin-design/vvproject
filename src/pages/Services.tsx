import { motion } from "motion/react";
import { 
  HardHat, Settings, Anchor, Layers, Flame, Zap, 
  Construction, Thermometer, Database, Pipette, Users, Ship 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Construction & Engineering",
    icon: <Construction className="text-accent" />,
    desc: "Civil construction for buildings, roads, and foundations, structural steel fabrication & erection, and mechanical equipment installation."
  },
  {
    title: "Maintenance Services",
    icon: <Settings className="text-accent" />,
    desc: "Preventive and breakdown maintenance, mechanical (rotating/static equipment), electrical systems, and instrumentation & control."
  },
  {
    title: "Lifting & Rigging",
    icon: <Anchor className="text-accent" />,
    desc: "Crane operations (mobile, crawler, tower), heavy equipment shifting, rigging/slinging, and load testing with lifting plan preparation."
  },
  {
    title: "Scaffolding Services",
    icon: <Layers className="text-accent" />,
    desc: "Scaffolding erection and dismantling, inspection and tagging systems, and access platform design."
  },
  {
    title: "Welding & Fabrication",
    icon: <Flame className="text-accent" />,
    desc: "Arc, gas, TIG, and MIG welding with structural fabrication, repairs, and modification work."
  },
  {
    title: "Electrical Services",
    icon: <Zap className="text-accent" />,
    desc: "Power distribution installation, cable laying/termination, lighting systems, earthing, and lightning protection."
  },
  {
    title: "Heavy Structural Works",
    icon: <HardHat className="text-accent" />,
    desc: "Heavy structure fabrication and erection for large-scale industrial projects."
  },
  {
    title: "Boiler & Thermal Services",
    icon: <Thermometer className="text-accent" />,
    desc: "WHR boiler and thermal power boiler installation, erection, and maintenance support."
  },
  {
    title: "Data Center Services",
    icon: <Database className="text-accent" />,
    desc: "Data center infrastructure setup and erection services."
  },
  {
    title: "Piping & Pipeline",
    icon: <Pipette className="text-accent" />,
    desc: "Piping fabrication and erection, pipeline installation, and industrial piping system QA."
  },
  {
    title: "Manpower Services",
    icon: <Users className="text-accent" />,
    desc: "Skilled and semi-skilled workforce for industrial operations and project execution."
  },
  {
    title: "Shipbuilding Services",
    icon: <Ship className="text-accent" />,
    desc: "Industrial support services for shipbuilding and marine projects."
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
