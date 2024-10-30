const express = require('express');
// const cluster = require('cluster');
// const os = require('os');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        // event loop is blocked...
    }
}

app.get('/', (req, res) => {
    //* JSON.stringify({}) => "{}"
    //* JSON.parse("{}") => {}
    //* [5,1,2,3,4].sort()
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //* delay the response
    delay(4000);
    res.send(`Tik tik tik! ${process.pid}`);
});

console.log('Running server.js');

//* using cluster & os
// if(cluster.isMaster){
//     console.log('Master has been started...');

//     const NUMBER_WORKERS = os.cpus().length;
//     for (let i=0; i<NUMBER_WORKERS; i++) {
//         cluster.fork();
//     }
// } else {
//     console.log('Worker process started.');
//     app.listen(3000);
// }

//* using pm2 > command [ -i = instance ]
// todo:  To makes a worker by using
// pm2 start server.js -i 2 > make two workers
// pm2 start server.js -i max > make a maximum of workers depend on CPU in machine
// pm2 list > show all workers
// pm2 ls > show all workers
// pm2 log > show logs
// pm2 log --lines 200 > show logs with max 2000 of line
// pm2 delete server > terminate
// pm2 restart server > restart
// pm2 start server.js -l logs.txt -i max
// pm2 show 0 > show process id = 0
// pm2 stop 4 > to stop individual ID
// pm2 start 4 > to start individual ID
// pm2 monit > monitor ( for window user > CMD > cd /d D:\GitHub\NodeJS\09-node-performance\nodePerformance )
// pm2 reload server > To restart server one-by-one ( good for serving users )
console.log('Worker process started.');
app.listen(3000);
