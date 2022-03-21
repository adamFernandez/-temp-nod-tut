// BUILT-IN MODULE : path
const path = require('path');

// .sep returns the folder path separation 
console.log(path.sep);

// .join
const filePath = path.join('/content/', 'test-txt-file','test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'test-txt-file','test.txt');
console.log(absolute);