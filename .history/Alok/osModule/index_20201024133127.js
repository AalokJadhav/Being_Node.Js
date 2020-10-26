const os = require('os');

// console.log(os.arch());


const freeMemory = os.freemem();
console.log(freeMemory);

// console.log(`${freeMemory /1024 /1024 /1024}`,'GB');
