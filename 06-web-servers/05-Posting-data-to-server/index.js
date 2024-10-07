const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [    
    {
        id: 0,
        name: 'Adam'
    },
    
    {
        id: 1,
        name: 'Rocket'
    },
    
    {
        id: 2,
        name: 'Slim'
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/');    // example /friends/2 => ['', 'friends', '2']
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        })
    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3) {
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }        
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello here!</li>');
        res.write('<li>What is your favorite games</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
}); //127.0.0.1 => localhost

//**------ testing function on chrome browser console ------*/
// fetch('http://localhost:3000/friends', {
//     method: 'POST',
//     body: JSON.stringify({id: 3, name: 'Jack'})
// });

