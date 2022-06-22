// run `node index.js` in the terminal
const boy = Buffer.from('Hey!');
console.log(boy.length);
for (let i = 0; i < boy.length; i++) {
  console.log(boy[i]);
}

return;
console.log(`Hello Node.js v${process.versions.node}!`);
const path = require('path');
console.log('运行文件所在目录==》' + __dirname);
const fs = require('fs');
const content = '这是一段测试内容';
fs.writeFile('/home/test.txt', content, (err) => {
  if (err) {
    console.log(err, '错误信息');
    return;
  }
  console.log('文件写入成功');
});
fs.readFile('/home/test.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('err=>' + err);
    return;
  }
  console.log('data=>', data);
  console.log(path.basename('test'));
  console.log(path.extname('dd/ddd/fff.txt'));
});
const os = require('os');
console.log(os.homedir());

const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23,
      },
    },
  },
};
console.log(obj);
