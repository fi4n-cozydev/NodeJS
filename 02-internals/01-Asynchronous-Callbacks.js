// Synchronous : executes line by line (waiting for previous line to finish and moving on the next)
console.log('a');   //>a
console.log('b');   //>b

// Asynchronous : delay code with time which can set to authentication LIKE server response
setTimeout(
    () => {
    console.log('c');   //callbacks function (when something done.. call me back and run my code)
    }, 
    5000                //set delay times to run code above
)
console.log('d');
//>d (waiting for 5 second) then.. result 'c' below
//>c