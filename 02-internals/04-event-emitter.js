// https://nodejs.org/api/events.html#events_events

const EventEmitter = require('events');
const celebrity = new EventEmitter();

//*Subscribe to celebrity for Observer 1
// celebrity.on('race win', () => {
//     console.log('Congratulation! You are the best!');
// });

//*Subscribe to celebrity for Observer 2
// celebrity.on('race win', () => {
//     console.log('Boo i could have better that that!');
// });

// celebrity.emit('race win');
// Congratulation! You are the best!
// Boo i could have better that that!

// celebrity.emit('race win');
// celebrity.emit('race lost');    //skip
// celebrity.emit('race win');
// Congratulation! You are the best!
// Boo i could have better that that!
// Congratulation! You are the best!
// Boo i could have better that that!

//--------------------------------------------------------------------
// process.on('exit', (code) => {
//     console.log('process exit event with code: ', code);
// });
// celebrity.emit('race win');
// celebrity.emit('race lost');    //skip
// celebrity.emit('race win');
// Congratulation! You are the best!
// Boo i could have better that that!
// Congratulation! You are the best!
// Boo i could have better that that!
// process exit event with code:  0

//--------------------------------------------------------------------
//*Subscribe to celebrity for Observer 3
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulation! You are the best!');
    }
});

//*Subscribe to celebrity for Observer 4
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Boo i could have better that that!');
    }
});

process.on('exit', (code) => {
    console.log('process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
// Congratulation! You are the best!
// Boo i could have better that that!
// process exit event with code:  0