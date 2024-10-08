const express = require('express');
const app = express();
const port = 3000;
const friends = [
    { id: 0, name: 'Viking' },
    { id: 1, name: 'Nomad' },
    { id: 2, name: 'Spartan' },
    { id: 2, name: 'Samurai' }
];

//added middleWere
app.use((req, res, next) => {
    const start = Date.now();    
    next();
    //all process along the the queue actions here...then >>
    const delta = Date.now() - start;
    console.log(`${req.method} \t ${req.url} \t ${delta} milliSeconds`);
});

app.get ('/', (req, res) => {
    res.send('Hello Express!')
    // res.send({ id: 1, name: 'Tommy' });
});

app.get ('/friends', (req, res) => {
    res.json(friends);
});

//parse JSON from middleWere
app.use(express.json());

//make an endPoint
app.post('/friends', (req, res) => {
    //validation of data type to ensure that user put a correct data not an Oject
    //**HTTP response status code
    //?[1] information 100~199 [2] successful 200~299 [3] redirects 300~399
    //?[4] client errors 400~499  [5] server errors 500~599
    if (!req.body.name) {       //to make sure that this field NOT-Empty
        return res.status(400).json({
            error: 'server unacceptable for this type of data.'
        });
    };

    const addNewFriend = {
        name: req.body.name,
        id: friends.length      //get a new ID by tracking ARRAY length (auto)
    };
    friends.push(addNewFriend); // Add new Data
    res.json(addNewFriend);
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