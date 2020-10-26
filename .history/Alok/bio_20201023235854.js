const bio = require('fs');


bio.appendFileSync('bio.txt', '/n Alok Jadhav');


original_bio = bio.readFileSync('bio.txt').toString();

console.log(original_bio);

bio.renameSync('bio.txt', 'original_bio.txt');

bio.unlinkSync('original_bio.txt');

bio.rmdirSync('Alok');