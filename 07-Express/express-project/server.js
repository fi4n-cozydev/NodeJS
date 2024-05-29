const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {id: 0, name: 'Albert'}, {id: 1, name: 'Steep'}, {id: 2, name: 'Johnny'}
];

//** Middleware */
app.use((req, res, next) => {
    const start = Date.now();    
    next();
    //actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);    
});


//** SET ROUT Handler */
/*
app.get('/', (req, res) => {
    // res.send('Hello.....');
    res.send({
        id: 1, name: 'Johnny'
    });
});
*/

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend) {
        // res.json(friend);
        res.status(200).json(friend);
    } else {
        // res.sendStatus(404);
        res.status(404).json({
            error: 'Friend does not exit'
        });
    }
})
// http://localhost:3000/friends/3 -> result -> {error "Friend does not exit"}

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello..., cozyDev!</li></ul>');
});

app.post('/messages', (req, res) => {
    res.send('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});