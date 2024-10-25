const express = require('express');

const {
    // getAllLaunches,
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

// launchesRouter.get('/launches', getAllLaunches);
launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.post('/:id', httpAbortLaunch);

module.exports = launchesRouter;