const http = require('http'); 

const PORT = 4000; 

// using plain text
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         // 'Content-Type': 'text/plain'
//     });

//     res.end('Hello, Sir Isaac Newton is your friend');
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     });

//     res.end(JSON.stringify({
//         id: 1, 
//         name: 'Sir Isaac Newton'
//     }))
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const friends = [
//     {
//         id: 0, 
//         name: 'Nickola Tesla'
//     }, 
//     {
//         id: 1, 
//         name: 'Albert Einsten'
//     }
// ]


// const server = http.createServer();
// server.on('request', (req, res) => {
//     if(req.url === '/friends') {
//         // res.writeHead(200, {
//         //     'Content-Type': 'application/json'
//         // });

//         res.statusCode = 200; 
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify({
//             id: 1, 
//             name: 'Sir Isaac Newton'
//         }))
//     }else if(req.url === '/messages') { 
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<body>');
//         res.write('<ul>');
//         res.write('<li>Hello Isaac! </li>');
//         res.write('<li>What are your thoughts on astronomy?</li>');
//         res.write('</ul>');
//         res.write('</body>');
//         res.write('</html>');
//         res.end();
//     }else {
//         res.statusCode = 404;
//         res.end(); 
//     }
// });


// server.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}...`);
// }); // 127.0.0.1 => localhost

///////////////////////////////////////////////////////////////////////////////////////////////////////
// const friends = [
//     {
//         id: 0, 
//         name: 'Nickola Tesla'
//     }, 
//     {
//         id: 1, 
//         name: 'Albert Einsten'
//     }, 
//     {
//         id: 2, 
//         name: 'Nicky Minaj'
//     }
// ]

// const server = http.createServer();
// server.on('request', (req, res) => {
//     // /friends/2 => ['', 'friends', '2'];
//     const items = req.url.split('/');
//     if(items[1] === 'friends') {
//         res.statusCode = 200; 
//         res.setHeader('Content-Type', 'application/json');
//         if(items.length === 3) {
//             const friendIndex = Number(items[2]);
//             res.end(JSON.stringify(friends[friendIndex]));
//         }else{
//             res.end(JSON.stringify(friends));
//         }
//     }else if(items[1] === 'messages') { 
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<body>');
//         res.write('<ul>');
//         res.write('<li>Hello Isaac! </li>');
//         res.write('<li>What are your thoughts on astronomy?</li>');
//         res.write('</ul>');
//         res.write('</body>');
//         res.write('</html>');
//         res.end();
//     }else {
//         res.statusCode = 404;
//         res.end(); 
//     }
// });

/////////////////////////////////////////////////////////////////////////////////
const friends = [
    {
        id: 0, 
        name: 'Nickola Tesla'
    }, 
    {
        id: 1, 
        name: 'Albert Einsten'
    }, 
    {
        id: 2, 
        name: 'Nicky Minaj'
    }
]

const server = http.createServer();
server.on('request', (req, res) => {
    // /friends/2 => ['', 'friends', '2'];
    const items = req.url.split('/');
    if(req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request', friend);
            friends.push(JSON.parse(friend)); 
        });
        req.pipe(res);
    }else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200; 
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        }else{
            res.end(JSON.stringify(friends));
        }
    }else if(req.method === 'GET' && items[1] === 'messages') { 
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac! </li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
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