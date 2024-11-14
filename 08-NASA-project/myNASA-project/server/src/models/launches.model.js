
const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');

// const launches = new Map();

//make a state
// let latestFlightNumber = 100;
const DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

saveLaunch(launch);
// launches.set(launch.flightNumber, launch);

async function existsLaunchWithID(launchID){
    return await launchesDatabase.findOne({
        flightNumber: launchID,
    });
}

async function getLatestFlightNumber(){
    const latestLaunch = await launchesDatabase
        .findOne()
        .sort('-flightNumber')
    ;

    if(!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER;
    }

    return latestLaunch.flightNumber;
}

async function getAllLaunches() {
    // return Array.from(launches.values());
    return await launchesDatabase
        .find({}, { '_id': 0, '__v': 0,}        
    );
}

async function saveLaunch(launch){

    const planet = await planets.findOne({
        keplerName: launch.target,
    });

    if(!planets) {
        throw new Error('No matching planet found');
    }

    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    })
}

async function scheduleNewLaunch(launch) {
    const newFlightNumber = await getLatestFlightNumber()+1;

    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['Zero to Mastery', 'NASA'],
        flightNumber: newFlightNumber,
    });

    await saveLaunch(newLaunch);
}

// function addNewLaunch(launch) {
//     latestFlightNumber++;
//     launches.set(
//         latestFlightNumber,
//         Object.assign(launch, {
//             success: true,
//             upcoming: true,
//             customers: ['Zero to Mastery', 'NASA'],
//             flightNumber: latestFlightNumber,
//         })
//     )
// }

async function abortLaunchByID(launchID){

    const aborted = await launchesDatabase.updateOne({
        flightNumber: launchID,
    }, {
        upcoming: false,
        success: false,
    });

    return aborted.modifiedCount === 1;

    // const aborted = launches.get(launchID);
    // aborted.upcoming = false;
    // aborted.success = false;
    // return aborted;
}

module.exports = {
    // launches,
    existsLaunchWithID,
    getAllLaunches,
    // addNewLaunch,
    scheduleNewLaunch,   
    abortLaunchByID,
}