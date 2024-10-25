
const launches = new Map();

//make a state
let latestFlightNumber = 100;

function existsLaunchWithID(launchID){
    return launches.has(launchID);
}

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['Zero to Mastery', 'NASA'],
            flightNumber: latestFlightNumber,
        })
    )
}

function abortLaunchByID(launchID){
    const aborted = launches.get(launchID);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    // launches,
    existsLaunchWithID,
    getAllLaunches,
    addNewLaunch,    
    abortLaunchByID,
}