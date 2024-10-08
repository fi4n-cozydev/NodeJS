const express = require('express');
const app = express();
const port = 3000;

app.get ('/', (req, res) => {
    // res.send('Hello Express!')
    res.send({ id: 1, name: 'Tommy' });
});

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