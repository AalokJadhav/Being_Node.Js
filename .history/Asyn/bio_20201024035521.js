const fs = require('fs');
let data = "Alok Jadhav";
fs.writeFile('bio.txt', data, (err) => {

    if (err) throw err;
});

fs.appendFile('bio.txt', 'Software Developer', (err) => {
console.log('data appeded');
})