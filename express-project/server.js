const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
// const friendsController = require('./controllers/friends.controller');
// const messagesController = require('./controllers/messages.controller');
const messagesRouter = require('./routes/messages.router');

const app = express(); 

// Templating Engine 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

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
// const friends = [
//     {
//         id : 0, 
//         name : 'Albert Einsten'
//     }, 
//     {
//         id : 1, 
//         name : 'Sir Isaac Newtoon'
//     }
// ]; 

app.use((req, res, next) => {
    const start = Date.now();
    // console.log(`${req.method} ${req.url}`);
    next();
    // actions go here..
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// app.use('/site', express.static('public'));
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// app.post('/friends', (req, res) => {
//     if(!req.body.name){
//         // res.status(400).json({
//         //     error : 'Missing friend name'
//         // });
//         return res.status(400).json({
//             error : 'Missing friend name'
//         });
//     }
//     const newFriend = {
//         name : req.body.name, 
//         id : friends.length
//     }; 
//     friends.push(newFriend);
//     res.json(newFriend);
// });

// app.get('/friends', (req, res) =>  {
//     // res.send(friends);
//     res.json(friends);
// });


// GET /friends/22
// app.get('/friends/:friendId', (req, res) => {
//     const friendId = Number(req.params.friendId);
//     const friend = friends[friendId];
//     if(friend){
//         // res.json(friend); 
//         res.status(200).json(friend);
//     }else{
//         res.status(404).json({
//             error: 'Friend does not exist'
//         });
//     }
// });


// app.get('/messages', (req, res) => {
//     // res.send('<ul><li> Hello Albert!</li></ul>');
//     res.send({
//         id : 1, 
//         name : 'Sir Isaac Newton'
//     });
// }); 

// app.post('/message', (req, res) => {
//     console.log('Updating Messages...');
// }) 


// app.post('/friends', friendsController.postFriend);
// app.get('/friends', friendsController.getFriends);
// app.get('/friends/:friendId', friendsController.getFriend);


// const friendsRouter = express.Router();
// friendsRouter.post('/', friendsController.postFriend);
// friendsRouter.get('/', friendsController.getFriends);
// friendsRouter.get('/:friendId', friendsController.getFriend);
// mounting in different router
// app.use(friendsRouter);
// app.use('/friends', friendsRouter);

// app.post('/messages', messagesController.postMessage);
// app.get('/messages', messagesController.getMessages);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends Are Very Clever', 
        caption : 'Let\'s go skiing!'
    });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
