const os = require('os');

console.log(os.arch());

const freememory = os.freemem();

console.log(freememory);

console.log(`${freememory / 1024 / 1024 / 1024} GB`);

const totalmoemory = os.totalmem()
console.log(`${totalmoemory / 1024 / 1024 / 1024} GB`);