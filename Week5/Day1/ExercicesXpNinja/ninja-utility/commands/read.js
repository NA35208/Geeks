const fs = require('fs');
const path = require('path');

function readFileContent(targetPath) {
  const resolvedPath = path.resolve(targetPath);
  try {
    if (!fs.existsSync(resolvedPath)) {
      console.error(`File does not exist: ${resolvedPath}`);
      return;
    }
    const content = fs.readFileSync(resolvedPath, 'utf8');
    console.log(`Content of ${resolvedPath}:\n`);
    console.log(content);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

module.exports = readFileContent;
