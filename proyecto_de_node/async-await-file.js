
const fs = require("fs");

try {
    const filePath = new URL('./package.json', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }