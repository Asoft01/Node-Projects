const http = require('http'); 

const express = require('express'); 

// const app = express(); 

// const PORT = process.env.PORT || 8000;

const app = require('./app');

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); 


// const express = require('express'); 
// const app = express(); 
// app.listen(); 

// const PORT = process.env.PORT || 8000;

// console.log(PORT);
