import { motion } from "motion/react";
import type { ReactNode } from "react";
import { 
  HardHat, Settings, Anchor, Layers, Flame, Zap, 
  Construction, Pipette, Wrench, ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/servicesData";
import { applyImageFallback } from "@/lib/imageFallback";

const iconMap: Record<string, ReactNode> = {
  "mechanical-services": <Wrench className="text-accent" />,
  "lifting-rigging-services": <Anchor className="text-accent" />,
  "piping-fabrication-service": <Pipette className="text-accent" />,
  "heavy-structure-fabrication": <HardHat className="text-accent" />,
  "construction-engineering-services": <Construction className="text-accent" />,
  "maintenance-services": <Settings className="text-accent" />,
  "scaffolding-services": <Layers className="text-accent" />,
  "welding-fabrication-services": <Flame className="text-accent" />,
  "electrical-services": <Zap className="text-accent" />,
};

export default function Services() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="mt-8 relative inline-block text-left">
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Browse Service Options
                <ChevronDown size={16} className={isMenuOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {isMenuOpen ? (
                <div className="absolute left-0 z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-accent transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
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
                      {iconMap[service.slug]}
                    </div>
                    <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <Button asChild variant="outline" className="mt-6 w-full">
                      <Link to={`/services/${service.slug}`}>View Service Details</Link>
                    </Button>
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
                  onError={applyImageFallback}
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
