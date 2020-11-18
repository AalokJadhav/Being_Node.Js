const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('input.txt', (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString());

            // 2nd Way
            // Reading From Stream
            // Create a Readable Stream
            // Handle Stream events => data, end and error

            const readStream = fs.createReadStream('input.txt');
    });
});

server.listen(8000, "127.0.0.1");
