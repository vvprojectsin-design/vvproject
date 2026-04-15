import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/lib/servicesData";
import { applyImageFallback } from "@/lib/imageFallback";
import { getServiceImage } from "@/lib/serviceImages";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceImage =
    getServiceImage(service.slug) ??
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="flex flex-col">
      <section className="py-20 premium-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">
              Service Detail
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{service.detailDesc}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 overflow-hidden rounded-2xl border bg-white shadow-sm">
            <img
              src={serviceImage}
              alt={service.title}
              className="h-72 w-full object-cover md:h-96"
              onError={applyImageFallback}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl border p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Scope of Work</h2>
              <ul className="space-y-4">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-4">Need This Service?</h3>
              <p className="text-slate-300 mb-8">
                Share your requirement with our team and get support for planning and execution.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="!bg-transparent !text-white border-white/30 hover:bg-white/10"
                >
                  <Link to="/services">Back to Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
