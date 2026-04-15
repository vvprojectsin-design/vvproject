const serviceFolderBySlug: Record<string, string> = {
  "mechanical-services": "Mechanical Services",
  "lifting-rigging-services": "Lifting & Rigging Services",
  "piping-fabrication-service": "Piping & Fabrication Services",
  "heavy-structure-fabrication": "Heavy Structure Fabrication",
  "construction-engineering-services": "Construction & Engineering Service",
  "maintenance-services": "Maintenance Services",
  "scaffolding-services": "Scaffolding Services",
  "welding-fabrication-services": "Welding & Fabrication Services",
  "electrical-services": "Electrical Services",
};

const fallbackPathHintsBySlug: Record<string, string> = {};

const allImages = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imageEntries = Object.entries(allImages).sort(([a], [b]) => a.localeCompare(b));

export function getServiceImage(slug: string): string | null {
  const folderName = serviceFolderBySlug[slug];
  if (folderName) {
    const folderMatch = imageEntries.find(([path]) => path.includes(`/src/assets/${folderName}/`));
    if (folderMatch) {
      return folderMatch[1];
    }
  }

  const hint = fallbackPathHintsBySlug[slug];
  if (hint) {
    const fallbackMatch = imageEntries.find(([path]) => path.includes(hint));
    if (fallbackMatch) {
      return fallbackMatch[1];
    }
  }

  return null;
}
