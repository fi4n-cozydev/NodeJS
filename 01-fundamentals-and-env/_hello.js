const mission = 'learn';
if(mission === 'learn') {
    console.log('Time to write some code!');
} else {
    console.log(`IS ${mission} really more fun?`);
}
//?> node hello.js
//Time to write some code!

//?> node hello.js explore
//IS undefined really more fun?

//?> node hello.js learn
//Time to write some code!



//** pass some argument
const m = process.argv[2]; //!select from index = 2
if(m === 'lean') {
    console.log('Time to write some code!');
} else {
    console.log(`IS ${m} really more fun?`);
}
//?> node hello.js
//IS undefined really more fun?
