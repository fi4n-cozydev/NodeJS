const axios = require('axios');

axios.get('https://www.wiki.com')
    .then( (response) => {
        console.log(response);
    })
    .catch( (err) => {
        console.log(err);
    })
    .then( () => {
        console.log('[SERVER] :> ALL DONE!');
    });

/*
    node request.js
    npm start
    -----------------------------------------------------------
    [ NodeMon : automatic run after change something in file ]
    npm run dev 
    ./node_modules/.bin/nodemon request.js

    [ GLOBAL INSTALL ] > recommended to do
    npm install -g nodemon

    nodemon request.js

    npm uninstall nodemon
*/