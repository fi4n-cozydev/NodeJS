const {planets} = require('../../models/planets.model');

function getAllPlanets(req, res) {
    //use return to ensure that function stops executing only time response
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
}