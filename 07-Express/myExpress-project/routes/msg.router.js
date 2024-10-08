const express = require('express');

const messagesController = require('../controllers/msg.controller');

//middleWereRouter
const messagesRouter = express.Router();

messagesRouter.get ('/', messagesController.getMsg);
messagesRouter.post ('/', messagesController.postMsg);

module.exports = messagesRouter;

