import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate PWA icons from me.jpeg
async function generateIcons() {
  try {
    const srcPath = path.join(__dirname, '..', 'public', 'me.jpeg');
    
    // Create 192x192 icon
    await sharp(srcPath)
      .resize(192, 192)
      .toFile(path.join(iconsDir, 'icon-192x192.png'));
    
    // Create 512x512 icon
    await sharp(srcPath)
      .resize(512, 512)
      .toFile(path.join(iconsDir, 'icon-512x512.png'));
    
    // Create apple touch icon (180x180)
    await sharp(srcPath)
      .resize(180, 180)
      .toFile(path.join(__dirname, '..', 'public', 'apple-icon.png'));
    
    console.log('Icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
