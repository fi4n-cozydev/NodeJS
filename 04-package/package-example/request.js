const axios = require('axios');

// axios.get('https://www.google.com')
// axios.get('https://www.googsle.com')
axios.get('https://www.wikipedia.org')
// axios..get('https://www.wikipedia.org')
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("status: Done....")
    });