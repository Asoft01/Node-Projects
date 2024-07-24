const express = require('express'); 

const app = express(); 

const PORT = 4000; 

const friends = [
    {
        id: 0, 
        name: 'Albert Einsten'
    },
    {
        id: 1, 
        name: "Sir Isaac Newton"
    }
]

app.get('/', (req, res) => {
    res.send('Hellooooo');
});

app.get('/friends', (req, res) => {
    res.json(friends);
});

// GET /friends/22
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]; 
    if(friend) {
        // res.json(friend);
        res.status(200).json(friend);
    }else { 
        res.status(404).json({
            error: "Friend doesn't exist"
        });
    }
});

app.get('/messages', (req, res) => {
    // res.send('<ul><li>Hello Albert Eisten</li></ul>');
    res.send({
        id: 1, 
        name: 'Sir Isaac Newton'
    })
});

app.post('/messages', (req, res) => {
    console.log('Updating messages........');
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
}); 