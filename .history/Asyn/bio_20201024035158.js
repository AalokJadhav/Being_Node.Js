const fs = require('fs');
let data = "Alok Jadhav";
let err = 'Wrong File Path'
fs.writeFile('bio.tt', data, (err) => {

    if (err) throw err;
})