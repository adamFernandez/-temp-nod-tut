// file system synchronous approach

// const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs');

// reading files from a given path
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first, second);

// writing to a file
writeFileSync(
  './content/result-sync.txt',
  `Here is the result ${first}, ${second}`,
  //to append to the file
  { flag: 'a' }
);

console.log('done with this task');
console.log('starting the next one');