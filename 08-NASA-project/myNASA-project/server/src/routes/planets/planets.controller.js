// const {planets} = require('../../models/planets.model');
const { getAllPlanets } = require('../../models/planets.model');

// function getAllPlanets(req, res) {
function httpGetAllPlanets(req, res) {
    //use return to ensure that function stops executing only time response
    // return res.status(200).json(planets);
    return res.status(200).json(getAllPlanets());
}

module.exports = {
    // getAllPlanets,
    httpGetAllPlanets,
}