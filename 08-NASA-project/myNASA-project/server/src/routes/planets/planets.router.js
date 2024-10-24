const express = require('express');

const {
    // getAllPlanets,
    httpGetAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

// planetsRouter.get('/planets', getAllPlanets);
planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;