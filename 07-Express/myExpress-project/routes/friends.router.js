const express = require('express');

const friendsController = require('../controllers/friends.controller');

//middleWereRouter
const friendsRouter = express.Router();

//custom middleWere
friendsRouter.use((req, res, next) => {
    console.log('ip address', req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get ('/', friendsController.getAllFriend);
friendsRouter.get('/:id', friendsController.getFriend);

module.exports = friendsRouter;