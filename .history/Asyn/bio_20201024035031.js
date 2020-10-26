const fs = require('fs');
let data = "Alok Jadhav";
fs.writeFile('bio.txt', data, (err) => {

    if (err) throw err;
})