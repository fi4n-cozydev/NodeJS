const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const {loadPlanetData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:VFjwn6ZmfQ1okly3@nasacluster.sjuaw.mongodb.net/nasa?retryWrites=true&w=majority&appName=NasaCluster';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
});

mongoose.connection.on('error', (err) => {
    console.error('err');
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();


