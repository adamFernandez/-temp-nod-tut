// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./3-2-module-utils')
const names = require('./3-1-module-names')
const data = require('./3-4-module-exporting-alternative')

// uncomment what you need to see results.

// calling a file which is running/executing a function within
require('./3-5-mind-grenade') // returns whatever the function is returning.

// console.log(names);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

 