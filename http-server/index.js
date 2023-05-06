const http = require('http'); 

const PORT = 3000;
const server = http.createServer();
const friends = [
    {
        id : 0, 
        name : 'Nickola Tesla'
    }, 
    {
        id: 1,
        name : 'Sir Isaac Newton'
    }, 
    {
        id: 2, 
        name : 'Albert Einsten'
    }
];

// const server = http.createServer((req, res) => {
server.on('request', (req, res) => {
    const items = req.url.split('/');
    // /friends/2  => ['', 'friends', '2']
    if(req.url === '/friends' ){
        // res.writeHead(200, {
        //     // 'Content-Type' : 'text/plain', 
        //     'Content-Type' : 'application/json'
        // });
        res.statusCode = 200; 
        res.setHeader('Content-Type', 'application/json');
        // res.end('Hello! Sir Isaac Newton is your friend!');
        res.end(JSON.stringify({
            id : 1,
            name : 'Sir Isaac Newton'
        }));
    }else if(req.url === '/messages'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>What are your thoughts on astronomy?');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else {
        res.statusCode = 404;
        res.end();
        
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost