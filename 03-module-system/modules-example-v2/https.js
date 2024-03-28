// const internals = require('./internals');
const { send, read } = require('./internals');

// const { send } = require('./request');
// const { read } = require('./response');

// const { REQUEST_TIMEOUT } = require('./request');

// import { send } from './request';
// import { read } from './response';

// function makeRequest(url, data) {
//     send(url, data);
//     return read();
// }

function makeRequest(url, data) {
    // internals.request.send(url, data);
    // internals.send(url, data);
    send(url, data);

    // return internals.response.read();
    // return internals.read();
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
// console.log(responseData);

// console.log(require.cache);