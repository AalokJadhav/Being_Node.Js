const fs = require('fs');
let data = "Alok Jadhav";
fs.writeFile('bio.txt', data, (err) => {

    if (err) throw err;
});

fs.appendFile('bio.txt', '\nSoftware Developer', (err) => {
console.log('data appeded');
});


fs.readFile('bio.txt', (err) => {
console.log('file read successfully');
});