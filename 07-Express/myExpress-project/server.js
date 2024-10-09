const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/msg.router');

const app = express();
const port = 3000;

//added middleware
app.use((req, res, next) => {
    const start = Date.now();    
    next();
    //all process along the the queue actions here...then >>
    const delta = Date.now() - start;
    console.log(`${req.method} \t ${req.baseUrl}${req.url} \t ${delta} milliSeconds`);
});

app.get ('/', (req, res) => {
    res.send('Hello Express!')
    // res.send({ id: 1, name: 'Tommy' });
});

//express static file middleware
app.use('/site', express.static(path.join(__dirname, 'public')));

//JSON parse middleware
app.use(express.json());

//group the same PATH with ROUTE ( mount router )
app.use('/friends', friendsRouter);
app.use('/msg', messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});