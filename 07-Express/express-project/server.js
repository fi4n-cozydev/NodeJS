const express = require('express');

const app = express();

const PORT = 3000;

//* SET ROUT Handler
app.get('/', (req, res) => {
    // res.send('Hello.....');
    res.send({
        id: 1, name: 'Johnny'
    });
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello..., cozyDev!</li></ul>');
});

app.post('/messages', (req, res) => {
    res.send('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});