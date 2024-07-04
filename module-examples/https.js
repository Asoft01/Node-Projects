// const request = require('./request');
// const response = require('./response');

// function makeRequest(url, data){
//     request.send(url, data); 
//     return response.read();
// }

// makeRequest('https://google.com', 'hello');
// const responseDatas = makeRequest('https://www.google.com', 'hello'); 
// console.log(responseDatas);

////////////////////////////////////////////////////////////////////////////////////

// const { send } = require('./internals/request'); 
// const { read } = require('./internals/response'); 
// const { REQUEST_TIMEOUT } = require('./internals/request');

// function makeRequest(url, data){
//     send(url, data); 
//     return read();
// }

// const responseData = makeRequest('https://google.com', 'hello');
// console.log(responseData);
// console.log(require.cache);


/////////////////////////////////////////////////////////////////////////////////////
// const internals = require('./internals');

// function makeRequest(url, data){
//     internals.request.send(url, data); 
//     return internals.response.read(); 
// }


// function makeRequest(url, data){
//     internals.send(url, data); 
//     return internals.read()
// }

// const responseData = makeRequest('https://google.com', 'hello');
// console.log(responseData);

//////////////////////////////////////////////////////////////////////////////////////
const { send, read } = require('./internals'); 
function makeRequest(url, data){
    send(url, data); 
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

// console.log(require.cache);