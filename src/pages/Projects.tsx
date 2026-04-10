import { motion } from "motion/react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Thermal Power Plant Expansion",
    location: "Visakhapatnam, AP",
    year: "2023",
    category: "Power",
    desc: "Complete structural erection and piping for a 500MW thermal power unit expansion.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Oil Refinery Shutdown Maintenance",
    location: "Jamnagar, Gujarat",
    year: "2022",
    category: "Oil & Gas",
    desc: "Successful execution of a 45-day major maintenance shutdown for a leading refinery.",
    image: "https://images.unsplash.com/photo-1544380904-c686aad2fb40?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Heavy Structural Fabrication",
    location: "Kakinada, AP",
    year: "2023",
    category: "Manufacturing",
    desc: "Fabrication and installation of 2000 tons of heavy steel structures for a new manufacturing facility.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Data Center Mechanical Setup",
    location: "Hyderabad, Telangana",
    year: "2024",
    category: "Tech Infrastructure",
    desc: "Installation of HVAC and structural supports for a Tier-4 data center facility.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ship Hull Structural Repair",
    location: "Hindustan Shipyard, VSP",
    year: "2023",
    category: "Shipbuilding",
    desc: "Major structural repairs and welding for a commercial cargo vessel.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Industrial Pipeline Network",
    location: "Paradip, Odisha",
    year: "2022",
    category: "Piping",
    desc: "Laying of 15km high-pressure industrial pipeline for chemical transport.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Experience</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We have successfully executed multiple industrial projects involving structural fabrication, piping work, equipment installation, and maintenance services.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Structural erection projects",
                "Piping fabrication and installation",
                "Industrial maintenance services",
                "Heavy equipment handling"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-accent" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden border hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-white border-none">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-bold text-sm">
                    <CheckCircle2 size={16} /> Project Completed Successfully
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Growth Timeline</h2>
            <p className="text-slate-600">Milestones that define our journey of excellence.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {[
              { year: "1995", title: "Company Founded", desc: "Started as a small civil contracting firm in Visakhapatnam." },
              { year: "2005", title: "Industrial Expansion", desc: "Entered the Power and Oil & Gas sectors with specialized maintenance services." },
              { year: "2012", title: "Major Milestone", desc: "Completed our 100th major industrial project and expanded manpower division." },
              { year: "2020", title: "Modernization", desc: "Adopted advanced engineering technologies and expanded to data center infrastructure." },
              { year: "Present", title: "Market Leader", desc: "Recognized as a leading industrial service provider with 500+ completed projects." }
            ].map((milestone, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-accent text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <CheckCircle2 size={20} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border bg-white shadow-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-primary">{milestone.title}</div>
                    <time className="font-display font-bold text-accent">{milestone.year}</time>
                  </div>
                  <div className="text-slate-500 text-sm">{milestone.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
