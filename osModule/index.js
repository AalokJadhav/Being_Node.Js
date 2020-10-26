const os = require('os');

console.log('Arch', os.arch());

const freememory = os.freemem();
console.log('FreeMemory:', freememory);

console.log('freememory in GB:',`${freememory / 1024 / 1024 / 1024} GB`);

const totalmoemory = os.totalmem()
console.log('totalmoemory in GB:',`${totalmoemory / 1024 / 1024 / 1024} GB`);

console.log('hostname:',os.hostname());

console.log('platform:',os.platform());

