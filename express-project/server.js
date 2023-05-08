const express = require('express'); 

const app = express(); 

const PORT = 3000;

/////////////////////////////////////////////////////////////////

// app.get('/', (req, res) =>  {
//     res.send('Hellloooooooooo')
// });

// app.get('/message', (req, res) => {
//     // res.send('<ul><li> Hello Albert!</li></ul>');
//     res.send({
//         id : 1, 
//         name : 'Sir Isaac Newton'
//     });
// }); 

// app.post('/message', (req, res) => {
//     console.log('Updating Messages...');
// }) 

//////////////////////////////////////////////////////////////////
const friends = [
    {
        id : 0, 
        name : 'Albert Einsten'
    }, 
    {
        id : 1, 
        name : 'Sir Isaac Newton'
    }
]; 

app.get('/friends', (req, res) =>  {
    res.send(friends);
});

app.get('/message', (req, res) => {
    // res.send('<ul><li> Hello Albert!</li></ul>');
    res.send({
        id : 1, 
        name : 'Sir Isaac Newton'
    });
}); 

app.post('/message', (req, res) => {
    console.log('Updating Messages...');
}) 

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
