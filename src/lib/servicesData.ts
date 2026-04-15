export type ServiceItem = {
  slug: string;
  title: string;
  shortDesc: string;
  detailDesc: string;
  highlights: string[];
};

export const servicesData: ServiceItem[] = [
  {
    slug: "mechanical-services",
    title: "Mechanical Services",
    shortDesc:
      "Comprehensive mechanical support including equipment installation, alignment, and servicing for industrial systems.",
    detailDesc:
      "Our mechanical services cover end-to-end support for rotating and static equipment, commissioning assistance, and shutdown execution with strict safety and quality controls.",
    highlights: [
      "Equipment installation and alignment",
      "Rotating and static equipment maintenance",
      "Shutdown and commissioning support",
    ],
  },
  {
    slug: "lifting-rigging-services",
    title: "Lifting & Rigging Services",
    shortDesc:
      "Safe lifting operations, rigging execution, load handling, and heavy equipment shifting with planned procedures.",
    detailDesc:
      "We execute critical lifting and rigging jobs with engineered lift plans, trained riggers, and strong site safety practices for heavy industrial operations.",
    highlights: [
      "Heavy equipment shifting and handling",
      "Rigging and slinging operations",
      "Planned lifting methodology and supervision",
    ],
  },
  {
    slug: "piping-fabrication-service",
    title: "Piping and Fabrication Service",
    shortDesc:
      "Industrial piping fabrication and erection with precision welding, fit-up, and reliable on-site installation.",
    detailDesc:
      "From fabrication yard to site erection, our piping team delivers quality pipe spools, supports, and installation works for process and utility systems.",
    highlights: [
      "Pipe fabrication and fit-up",
      "Site piping erection and installation",
      "Quality checks and dimensional control",
    ],
  },
  {
    slug: "heavy-structure-fabrication",
    title: "Heavy Structure Fabrication",
    shortDesc:
      "Fabrication of heavy structural components for plants and large-scale projects with strict quality checks.",
    detailDesc:
      "We fabricate heavy steel structures for industrial applications with precise execution, welding quality, and dependable delivery schedules.",
    highlights: [
      "Heavy steel structure fabrication",
      "Assembly and erection readiness",
      "Material and weld quality assurance",
    ],
  },
  {
    slug: "construction-engineering-services",
    title: "Construction & Engineering Services",
    shortDesc:
      "End-to-end construction and engineering solutions including civil, structural, and industrial project execution.",
    detailDesc:
      "Our construction and engineering team handles civil and industrial works from planning to execution, focusing on safety, quality, and on-time completion.",
    highlights: [
      "Civil and structural execution",
      "Industrial project planning support",
      "Safety-focused delivery approach",
    ],
  },
  {
    slug: "maintenance-services",
    title: "Maintenance Services",
    shortDesc:
      "Preventive and breakdown maintenance services to ensure uninterrupted, safe, and efficient plant operations.",
    detailDesc:
      "We provide preventive, predictive, and breakdown support to improve equipment reliability, reduce downtime, and maintain process continuity.",
    highlights: [
      "Preventive and breakdown maintenance",
      "Reliability and uptime improvement",
      "Plant operation support",
    ],
  },
  {
    slug: "scaffolding-services",
    title: "Scaffolding Services",
    shortDesc:
      "Scaffolding erection, dismantling, and access platform support for safe working at heights.",
    detailDesc:
      "Our scaffolding team delivers safe access solutions for maintenance and construction areas with proper erection, dismantling, and site compliance.",
    highlights: [
      "Scaffolding erection and dismantling",
      "Access platform setup",
      "Work-at-height safety support",
    ],
  },
  {
    slug: "welding-fabrication-services",
    title: "Welding & Fabrication Services",
    shortDesc:
      "High-quality arc, gas, TIG, and MIG welding with structural fabrication, repairs, and modification work.",
    detailDesc:
      "We offer qualified welding and fabrication services for new works, repairs, and modifications across heavy industrial projects.",
    highlights: [
      "Arc, TIG, MIG, and gas welding",
      "Structural fabrication works",
      "Repair and modification jobs",
    ],
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    shortDesc:
      "Electrical installation, cable laying, termination, and power distribution support for industrial facilities.",
    detailDesc:
      "Our electrical services cover industrial installation and distribution tasks with tested connections, safe practices, and reliable power support.",
    highlights: [
      "Cable laying and termination",
      "Power distribution installation",
      "Industrial electrical support",
    ],
  },
];

