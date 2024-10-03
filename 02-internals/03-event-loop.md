# https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

while(!shouldExit) {
    processEvents();
}

# Event Loop Phases (concept)
1) Timers
2) I/O callbacks ( input / output )
3) setImmediate
4) Close callbacks

# Type of "Timers"
- setTimeout    // call one times
- setInterval   // repeatable
- setImmediate  // call it now used in special case