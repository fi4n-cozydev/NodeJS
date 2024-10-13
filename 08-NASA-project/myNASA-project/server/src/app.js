const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

// function to return CORS middleware
app.use(cors({
    origin: 'http://localhost:3000',
}));
// middleware chains
app.use(express.json());
app.use(planetsRouter);

module.exports = app;