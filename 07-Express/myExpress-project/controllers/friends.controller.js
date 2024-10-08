const friendsDatabase = require('../models/friends.model');

function postFriend(req, res) {
    //validation of data type to ensure that user put a correct data not an Oject
    //**HTTP response status code
    //?[1] information 100~199 [2] successful 200~299 [3] redirects 300~399
    //?[4] client errors 400~499  [5] server errors 500~599
    if (!req.body.name) {               //to make sure that this field NOT-Empty
        return res.status(400).json({   //return without add new data by use RETURN
            error: 'server unacceptable for this type of data.'
        });
    };
    //** code below this line will not run if user POST wrong data type */ 
    // to avoid add EMPTY data to ARRAY
    const addNewFriend = {
        name: req.body.name,
        id: friendsDatabase.length              //get a new ID by tracking ARRAY length (auto)
    };
    friendsDatabase.push(addNewFriend);         // Add new Data
    res.json(addNewFriend);
}

function getAllFriend(req, res) {
    res.json(friendsDatabase);
}

function getFriend(req, res) {                  //get specific data by ID like "GET /friends/1"
    const id = Number(req.params.id);           //parse TEXT to INT
    const selectID = friendsDatabase[id];       //validation an ID of index
    if (selectID) {
        // res.json(id);
        res.status(200).json(selectID);
    } else {
        // res.sendStatus(404);
        res.status(404).json({
            error: "this \"ID\" does not exist."
        });
    }
}

module.exports = {
    postFriend, getAllFriend, getFriend
}