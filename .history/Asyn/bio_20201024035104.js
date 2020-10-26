const fs = require('fs');
let data = "Alok Jadhav";
fs.writeFile('bio.tt', data, (err) => {

    if (err) throw err;
})