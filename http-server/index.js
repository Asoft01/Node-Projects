const http = require('http'); 

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        // 'Content-Type' : 'text/plain', 
        'Content-Type' : 'application/json'
    });
    // res.end('Hello! Sir Isaac Newton is your friend!');
    res.end(JSON.stringify({
        'name' : 'Sir Isaac Newton'
    }));
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost
