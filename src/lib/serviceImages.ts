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

const preferredPathHintsBySlug: Record<string, string> = {
  "lifting-rigging-services": "WhatsApp Image 2026-04-16 at 4.04.03 PM.jpeg",
  "piping-fabrication-service": "WhatsApp Image 2026-04-16 at 4.27.18 PM.jpeg",
};

const fallbackPathHintsBySlug: Record<string, string> = {};

const allImages = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const imageEntries = Object.entries(allImages).sort(([a], [b]) => a.localeCompare(b));

export function getServiceImage(slug: string): string | null {
  const preferredHint = preferredPathHintsBySlug[slug];
  if (preferredHint) {
    const preferredMatch = imageEntries.find(([path]) => path.includes(preferredHint));
    if (preferredMatch) {
      return preferredMatch[1];
    }
  }

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
