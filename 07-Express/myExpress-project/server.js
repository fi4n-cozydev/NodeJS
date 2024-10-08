const express = require('express');
const app = express();
const port = 3000;
const friends = [
    { id: 0, name: 'Viking' },
    { id: 1, name: 'Nomad' },
    { id: 2, name: 'Spartan' },
    { id: 2, name: 'Samurai' }
];

app.get ('/', (req, res) => {
    res.send('Hello Express!')
    // res.send({ id: 1, name: 'Tommy' });
});

app.get ('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:id', (req, res) => { //get specific data by ID like "GET /friends/1"
    const id = Number(req.params.id);   //parse TEXT to INT
    const selectID = friends[id];       //validation an ID of index
    if (selectID) {
        // res.json(id);
        res.status(200).json(selectID);
    } else {
        // res.sendStatus(404);
        res.status(404).json({
            error: "this \"ID\" does not exist."
        });
    }
})

app.get ('/msg', (req, res) => {
    const greeting = '<h1>Welcome!</h1>';
    res.send(greeting);
});

app.post ('/msg', (req, res) => {
    console.log('<h1>updating messages...</h1>');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});