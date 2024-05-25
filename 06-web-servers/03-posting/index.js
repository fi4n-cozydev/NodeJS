const http = require('http');
const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Johnny Depp',
    },
    {
        id: 1,
        name: 'Rowan Atkinson',
    },
    {
        id: 2,
        name: 'Tom Cruse',
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/');
    //=> /friends/2 => ['', 'friends', '2']

    if(req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        });
    } else if(req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        if(items.length === 3) {
            const friendsIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendsIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if(req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello, guest!</li>');
        res.write('<li>You must register our member to use a function.</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
        
});

//127.0.0.1 => localhost
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});