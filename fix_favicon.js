
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const sourceFile = path.join(publicDir, 'gpt ico.png');
const destFile = path.join(publicDir, 'favicon.png');
const svgFile = path.join(publicDir, 'favicon.svg');
const icoFile = path.join(publicDir, 'favicon.ico');

console.log('Fixing favicon...');

if (fs.existsSync(sourceFile)) {
    try {
        fs.copyFileSync(sourceFile, destFile);
        console.log('Successfully copied "gpt ico.png" to "favicon.png"');
    } catch (e) {
        console.error('Error copying file:', e);
    }
} else {
    console.error('Source file "gpt ico.png" not found!');
}

[svgFile, icoFile].forEach(file => {
    if (fs.existsSync(file)) {
        try {
            fs.unlinkSync(file);
            console.log(`Deleted ${path.basename(file)}`);
        } catch (e) {
            console.error(`Error deleting ${path.basename(file)}:`, e);
        }
    }
});
