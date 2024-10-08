function getMsg(req, res) {
    const greeting = '<h1>Welcome!</h1>';
    res.send(greeting);
}

function postMsg(req, res) {
    console.log('<h1>updating messages...</h1>');
}

module.exports = {
    getMsg, postMsg
}