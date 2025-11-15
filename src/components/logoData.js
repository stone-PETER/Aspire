// logoData.js - Utility to automatically generate logo lists
// This file can be regenerated whenever new images are added

import { readdirSync, statSync } from "fs";
import { join } from "path";

// Function to scan directory and return image files
const getImageFiles = (dirPath) => {
  try {
    const files = readdirSync(dirPath);
    return files.filter((file) => {
      const filePath = join(dirPath, file);
      const stat = statSync(filePath);
      return stat.isFile() && /\.(png|jpe?g|gif|svg|webp)$/i.test(file);
    });
  } catch (error) {
    console.warn(`Could not read directory ${dirPath}:`, error);
    return [];
  }
};

// Generate logo data (this would typically be run at build time)
export const generateLogoData = () => {
  const publicPath = "./public/SBCLogo";

  return {
    kochi: getImageFiles(join(publicPath, "Kochi")).map(
      (file) => `/SBCLogo/Kochi/${file}`
    ),
    malabar: getImageFiles(join(publicPath, "Malabar")).map(
      (file) => `/SBCLogo/Malabar/${file}`
    ),
    travancore: getImageFiles(join(publicPath, "Travancore")).map(
      (file) => `/SBCLogo/Travancore/${file}`
    ),
  };
};

// For now, export the static data with the current images
// TODO: Replace this with dynamic generation at build time
export const logosByHub = {
  kochi: [
    "/SBCLogo/Kochi/ieee sahrdaya logo.png",
    "/SBCLogo/Kochi/IMG_1302.PNG",
    "/SBCLogo/Kochi/logo white.png",
    "/SBCLogo/Kochi/logo_white (1).png",
    "/SBCLogo/Kochi/SB_LOGO_Purple.png",
  ],
  malabar: [
    "/SBCLogo/Malabar/Logo SB40 - Copy (2).png",
    "/SBCLogo/Malabar/MDIT SB WHITE 1.png",
    "/SBCLogo/Malabar/sb logo white (1).png",
    "/SBCLogo/Malabar/SB LOGO WHITE.PNG",
    "/SBCLogo/Malabar/SB LOGO.jpg",
  ],
  travancore: [
    "/SBCLogo/Travancore/ceal-ieee-sb.png",
    "/SBCLogo/Travancore/IEEE LMCST Logo.png",
    "/SBCLogo/Travancore/IEEE Logo white -2FE6CB8-.png",
    "/SBCLogo/Travancore/ieee logo white-1.png",
    "/SBCLogo/Travancore/IEEE SB CET.png",
    "/SBCLogo/Travancore/IMG-20251104-WA0013.jpg",
  ],
};
