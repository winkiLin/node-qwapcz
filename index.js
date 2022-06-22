// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const path = require('path');
console.log('运行文件所在目录==》' + __dirname);
const fs = require('fs');
fs.readFile('/User/16149/testFile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('err=>' + err);
    return;
  }
  console.log('data=>', data);
});
