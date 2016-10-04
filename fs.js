const fs = require('fs');
const path = require('path');

//asynchronous version:
// fs.unlink('/tmp/hello', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });


// //synchronous version:
// fs.unlinkSync('/tmp/hello');
// console.log('successfully deleted /tmp/hello');

// fs.readFile(path.resolve('readMe.md'), (err, buffer) => {
//   console.log('err: ', err);
//   console.log('buffer: ', buffer);
//   console.log('buffer.toString(): ', buffer.toString());
// })

// fs.readdir(path.resolve(), (err, buffer) => {
//   console.log('buffer: ', buffer);
//   console.log('buffer.toString(): ', buffer.toString())
// })

// fs.mkdir(path.resolve(), (err,buffer) => { 

// })

