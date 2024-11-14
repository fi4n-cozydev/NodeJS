// const { launches } = require('../../models/launches.model');
// const { launchesModel } = require('../../models/launches.model');
const { 
    getAllLaunches,
    // addNewLaunch,
    scheduleNewLaunch,
    existsLaunchWithID,
    abortLaunchByID,
} = require('../../models/launches.model');


// function getAllLaunches(req, res) {
async function httpGetAllLaunches(req, res) {
    // return res.status(200).json(Array.from(launches.values()));
    // return res.status(200).json(launchesModel.getAllLaunches());
    return res.status(200).json(await getAllLaunches());
    
}

async function httpAddNewLaunch(req, res) {
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

    await scheduleNewLaunch(launch);
    console.log(launch);
    return res.status(201).json(launch);
}

async function httpAbortLaunch (req, res) {
    const launchID = Number(req.params.id);

    const existsLaunch = await existsLaunchWithID(launchID);
    // if launch doesn't exist
    if(!existsLaunch){
        return res.status(400).json({
            error: 'Launch not found',
        });
    }    

    // if launch exist
    const aborted = await abortLaunchByID(launchID);
    if (!aborted) {
        return res.status(400).json({
            error: 'Launch not aborted',
        });        
    }
    
    // return res.status(200).json(aborted);
    return res.status(200).json({
        ok: true,
    });
}

module.exports = {
    // getAllLaunches,
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};