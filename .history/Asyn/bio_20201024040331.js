const fs = require('fs');
let data = "Alok Jadhav";
fs.writeFile('bio.txt', data, (err) => {

    if (err) throw err;
});

fs.appendFile('bio.txt', '\nSoftware Developer', (err) => {
console.log('data appeded');
});


fs.readFile('bio.txt',"utf-8",  (err, data) => {
console.log('file read successfully');
console.log(data);
});

fs.rename('bio.txt', 'mybio.txt', (err) => {
console.log('rename the file successfully done..!');
})