
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const oldFile = path.join(publicDir, 'gpt ico.png');
const newFile = path.join(publicDir, 'favicon.png');
const svgFile = path.join(publicDir, 'favicon.svg');

console.log('Renaming favicon...');

if (fs.existsSync(oldFile)) {
    try {
        fs.renameSync(oldFile, newFile);
        console.log('Successfully renamed gpt ico.png to favicon.png');
    } catch (e) {
        console.error('Error renaming:', e);
    }
} else {
    console.log('gpt ico.png not found at ' + oldFile);
    // Check if favicon.png already exists (maybe previous attempts worked?)
    if (fs.existsSync(newFile)) {
        console.log('favicon.png already exists.');
    } else {
        // Debugging: list files in public
        console.log('Files in public:', fs.readdirSync(publicDir));
    }
}

if (fs.existsSync(svgFile)) {
    try {
        fs.unlinkSync(svgFile);
        console.log('Deleted favicon.svg');
    } catch (e) {
        console.error('Error deleting svg:', e);
    }
}
