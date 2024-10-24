const express = require('express');

const {
    // getAllLaunches,
    httpGetAllLaunches,
    httpAddNewLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

// launchesRouter.get('/launches', getAllLaunches);
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;