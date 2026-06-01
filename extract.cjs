const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\cash\\.gemini\\antigravity\\brain\\b6c50618-d4a1-4507-97eb-ec7adb2e64e4\\.system_generated\\steps\\189\\content.md', 'utf-8');

const urlRegex = /https?:\/\/[^\s"\'<>]+?\.(?:jpg|jpeg|png|webp)/gi;
const urls = [...new Set(content.match(urlRegex) || [])];
console.log('Images:');
console.log(urls.join('\n'));

console.log('\nAddress/Contact snippets:');
const lines = content.split('\n');
for (const line of lines) {
  if (line.match(/(address|contact|street|avenue|road|phone|email|\+27|0\d{2})/i) && line.length < 150) {
    // try to filter out code/css
    if (!line.includes('{') && !line.includes('var(')) {
      console.log(line.trim());
    }
  }
}
