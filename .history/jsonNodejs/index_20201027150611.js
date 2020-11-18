const fs = require('fs');

const bioData = {
    name: 'Alok Jadhav',
    city: 'Kolhapur',
    gmail: 'alokjadhav007@gmail.com',
    mob: 1234567890,
    role: 'Developer'
}
console.log(bioData);

// For JSON Format
const JSONdata = JSON.stringify(bioData);
console.log(JSONdata);

// Add File Using FileSystem Module
fs.writeFile("jason1.json", JSONdata,  (err) => {
    console.log("File Add is Done..!");
});

// Read File Using FileSystem Module
fs.readFile("jason1.json", "utf-8", (err) => {
    console.log("File Read is Done..!", data);
});

// For Object Format
const Objectdata = JSON.parse(JSONdata);
console.log(Objectdata);

