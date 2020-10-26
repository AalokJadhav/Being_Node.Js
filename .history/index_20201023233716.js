const fs = require("fs");


//Creating A New File
//fs.writeFileSync('read.txt', "Alok Jadhav")


// fs.writeFileSync('read.txt', "Alok Jadhav");

// fs.appendFileSync('read.txt', ' Nodejs Developer')


// const buf_data = fs.readFileSync('read.txt');

// console.log(buf_data);

// org_data = buf_data.toString();

// console.log(org_data);

fs.renameSync('read.txt', 'readwrite.txt')
