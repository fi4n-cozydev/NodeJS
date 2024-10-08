const express = require('express');

//relate controller
const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/msg.controller');

const app = express();
const port = 3000;

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

//parse JSON from middleWere
app.use(express.json());

//make an endPoint
app.post('/friends', friendsController.postFriend);
app.get ('/friends', friendsController.getAllFriend);
app.get('/friends/:id', friendsController.getFriend);

app.get ('/msg', messagesController.getMsg);
app.post ('/msg', messagesController.postMsg);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});