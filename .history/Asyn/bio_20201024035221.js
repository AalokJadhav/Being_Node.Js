const fs = require('fs');
let data = "Alok Jadhav";
fs.writeFile('bio.tt', data, (err) => {
    let err = 'Wrong File Path'

    if (err) throw err;
})