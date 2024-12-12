// // function sayHello(name){
// //     console.log('Hello'  + name);
// // }


// // // sayHello('Abdulbasit');

// // var sayHello = function(){

// // }

// // window.sayHello();

// // console.log(module);

// // const path = require('path');

// // const PathObj = path.parse(__filename);

// // console.log(PathObj);

// // const os = require('os');

// // const totalMemory = os.totalmem();
// // const freeMemory = os.freemem();

// // // console.log('Total Memory:'  + totalMemory);



// // console.log(`Total Memory: ${totalMemory}`);
// // console.log(`Free Memory : ${freeMemory}`);

// // FILE SYSTEM MODULE 

// // const fs = require('fs');

// // // const files= fs.readdirSync('./');

// // // console.log(files);


// // fs.readdir('./', function(err, files){
// //     if(err) console.log('Error', err);
// //     else console.log('Result', files);
// // });


// //  EVENT MOUDLE 

// const EventEmitter= require('events');
// const emitter = new EventEmitter();

// emitter.emit('messageLogged');

// // Making a noise, produce 

// //  Register a listener
// emitter.on('messageLogged', (arg)=>{
//  console.log('Listener called ', arg)
// });

// // Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});

// // Rasise : logging (data: message )



// HTTP 

// const http = require('http');

// const server = http.createServer((req, res  )=>{
//     if(req.ulr === '/'){
//         res.write('Hello World');
//         res.end();
//     }
//    if(req.ulr === '/about'){
//     res.end('Here is our short history')
//    }
//      res.end(`
//         <h1>Ooops!!</h1>
//         <p> We can't seem to find the page you are looking for</p>
//         <a href="/">back home </a>`)
// }); 

// server.listen(3000);

// console.log('Listening on port 3000....');

// npm- global command, comes with node
// npm ---version

// local dependency - use it only in this particular project
//npm i<packageName>

// global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems =_.flattenDeep(items)
console.log(newItems)