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

// For Object Format
const Objectdata = JSON.parse(JSONdata);
console.log(Objectdata);

