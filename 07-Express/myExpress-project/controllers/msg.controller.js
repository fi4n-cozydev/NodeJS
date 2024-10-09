const path = require('path');
//* macOS /folder/image_file.jpg
//* window \folder\image_file.jpg

function getMsg(req, res) {
    // const greeting = '<h1>Welcome!</h1>';
    // res.send(greeting);

    //!Image File handler    
    // res.sendFile('image_file.jpg');
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'smile.png'));

    //! views engine
    res.render('messages', {
        title: 'Messages to friend!',
        friend: 'Elon MUsk'
    })
}

function postMsg(req, res) {
    console.log('<h1>updating messages...</h1>');
}

module.exports = {
    getMsg, postMsg
}