const bio = require('fs');


bio.appendFileSync('bio.txt', '/n Alok Jadhav');


original_bio = bio.readFileSync('bio.txt').toString();

console.log(original_bio);