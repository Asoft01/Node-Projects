// function getMessages (req, res) {
//     res.send('<ul><li> Hello Adeleke </li></ul>');
// }
const path = require('path'); 
// /folder/files.jpg \folder\files.jpg

function getMessages (req, res) {
    // path.join(__dirname, '..', 'public', 'devops2.png');
    res.sendFile(path.join(__dirname, '..', 'public', 'devops2.png'));
}

function postMessage(req, res) {
    console.log('Updating Messages...');
}

module.exports = {
    getMessages, 
    postMessage,
};