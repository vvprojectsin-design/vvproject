import type { SyntheticEvent } from "react";

const fallbackSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b3a70"/>
      <stop offset="100%" stop-color="#1d4f91"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <circle cx="980" cy="120" r="180" fill="rgba(249,115,22,0.18)"/>
  <circle cx="160" cy="720" r="220" fill="rgba(255,255,255,0.08)"/>
  <text x="50%" y="47%" fill="#ffffff" font-size="56" font-family="Arial, sans-serif" text-anchor="middle" font-weight="700">Industrial Project Image</text>
  <text x="50%" y="55%" fill="#e2e8f0" font-size="30" font-family="Arial, sans-serif" text-anchor="middle">Photo unavailable - placeholder shown</text>
</svg>
`;

export const fallbackImageDataUri = `data:image/svg+xml,${encodeURIComponent(
  fallbackSvg
)}`;

export function applyImageFallback(event: SyntheticEvent<HTMLImageElement>) {
  const imageElement = event.currentTarget;
  if (imageElement.src !== fallbackImageDataUri) {
    imageElement.src = fallbackImageDataUri;
  }
}

