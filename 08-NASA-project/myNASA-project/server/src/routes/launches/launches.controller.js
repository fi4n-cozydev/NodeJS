// const { launches } = require('../../models/launches.model');
// const { launchesModel } = require('../../models/launches.model');
const { 
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithID,
    abortLaunchByID,
} = require('../../models/launches.model');


// function getAllLaunches(req, res) {
function httpGetAllLaunches(req, res) {
    // return res.status(200).json(Array.from(launches.values()));
    // return res.status(200).json(launchesModel.getAllLaunches());
    return res.status(200).json(getAllLaunches());
    
}

function httpAddNewLaunch(req, res) {
    const  launch = req.body;

    //validating data
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property',
        })
    }

    launch.launchDate = new Date(launch.launchDate);
    // if(launch.launchDate.toString() === 'Invalid Date') {
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        })
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch (req, res) {
    const launchID = Number(req.params.id);

    // if launch doesn't exist
    if(!existsLaunchWithID(launchID)){
        return res.status(400).json({
            error: 'Launch not found',
        });
    }    

    // if launch exist
    const aborted = abortLaunchByID(launchID);
    return res.status(200).json(aborted);
}

module.exports = {
    // getAllLaunches,
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};