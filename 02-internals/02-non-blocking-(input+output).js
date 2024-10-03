//blocking function : block until done.. (JS build-in OBJ)
console.log(
    JSON.stringify({
    food: 'love'
    })
);
//>{"food":"love"}

//non-blocking function : execute in the background
setTimeout(myFunction, 2000);
console.log('hello');

myFunction(() => {
    makeRequest('http://www.google.com');
    readFile('file.json');
})

//>hello
//> myFunction will do after passed 2 second