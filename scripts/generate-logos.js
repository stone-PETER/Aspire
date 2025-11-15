#!/usr/bin/env node

/**
 * Logo Generator Script
 *
 * This script automatically scans the public/SBCLogo directories and updates
 * the SBCLogo.jsx component with the current list of images.
 *
 * Usage: node scripts/generate-logos.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to scan (relative to project root)
const LOGO_DIRS = {
  kochi: path.join(path.dirname(__dirname), "public/SBCLogo/Kochi"),
  malabar: path.join(path.dirname(__dirname), "public/SBCLogo/Malabar"),
  travancore: path.join(path.dirname(__dirname), "public/SBCLogo/Travancore"),
};

// Supported image extensions
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"];

// Path to the component file (relative to project root)
const COMPONENT_PATH = path.join(
  path.dirname(__dirname),
  "src/components/SBCLogo.jsx"
);

/**
 * Get all image files from a directory
 */
function getImageFiles(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      console.warn(`Directory not found: ${dirPath}`);
      return [];
    }

    const files = fs.readdirSync(dirPath);
    return files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXTENSIONS.includes(ext);
      })
      .map((file) => `/SBCLogo/${path.basename(dirPath)}/${file}`)
      .sort();
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
    return [];
  }
}

/**
 * Generate the logos object
 */
function generateLogosObject() {
  const logos = {};

  for (const [hubName, dirPath] of Object.entries(LOGO_DIRS)) {
    logos[hubName] = getImageFiles(dirPath);
    console.log(
      `Found ${logos[hubName].length} images in ${hubName}: ${logos[
        hubName
      ].join(", ")}`
    );
  }

  return logos;
}

/**
 * Update the component file with new logo lists
 */
function updateComponentFile(logosObject) {
  try {
    if (!fs.existsSync(COMPONENT_PATH)) {
      console.error(`Component file not found: ${COMPONENT_PATH}`);
      return false;
    }

    let content = fs.readFileSync(COMPONENT_PATH, "utf8");

    // Generate the new logosByHub object as a formatted string
    const logosString = `const logosByHub = {
  kochi: [
${logosObject.kochi.map((logo) => `    "${logo}",`).join("\n")}
  ],
  malabar: [
${logosObject.malabar.map((logo) => `    "${logo}",`).join("\n")}
  ],
  travancore: [
${logosObject.travancore.map((logo) => `    "${logo}",`).join("\n")}
  ],
};`;

    // Replace the existing logosByHub constant
    const logosByHubRegex = /const logosByHub = \{[\s\S]*?\};/;

    if (logosByHubRegex.test(content)) {
      content = content.replace(logosByHubRegex, logosString);
      fs.writeFileSync(COMPONENT_PATH, content, "utf8");
      console.log("✅ Successfully updated SBCLogo.jsx with new logo lists");
      return true;
    } else {
      console.error("❌ Could not find logosByHub constant in component file");
      return false;
    }
  } catch (error) {
    console.error("Error updating component file:", error.message);
    return false;
  }
}

/**
 * Main function
 */
function main() {
  console.log("🔍 Scanning logo directories...\n");

  const logosObject = generateLogosObject();

  console.log("\n📝 Updating component file...");

  if (updateComponentFile(logosObject)) {
    console.log("\n🎉 Logo generation completed successfully!");
    console.log("\nTo run this script again after adding new images:");
    console.log("npm run generate-logos");
  } else {
    console.log("\n❌ Logo generation failed. Please check the errors above.");
    process.exit(1);
  }
}

// Run the script
main();
