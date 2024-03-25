/*
const http = require('http');

const req = http.request('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    })
    res.on('end', () => {
        console.log('>: No more data');
    })
})
req.end();
*/

// more secure using https modules ------------------------------------

// const https = require('https');
/* refactor to*/
const { request } = require('https');
const { get } = require('https');

// const req2 = https.request('https://www.google.com', (res) => {
// const req2 = request('https://www.google.com', (res) => {
get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    })
    res.on('end', () => {
        console.log('>: No more data');
    })
})
// req2.end();