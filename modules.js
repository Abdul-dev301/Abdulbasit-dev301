// GLOBAL - NO WINDOW !!!!

// _dirname - path to current directory
//__filename   - file name 
// requre     - functon to use modules (commonJS)
// module     -   info about current module (file)
//process     - info about env where the program is being execued

// console.log(__dirname)
// setInterval(() => {
//     console.log('Hello world');
// }, 1000)

// CommonJs, every file is module (by default)
// Modules - Enscapsulated code (only share  minimu )

// const names = require('./names.js');

const data = require('./alternative-flavour.js')
console.log(data);
require('./7-mind-greanead.js')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)