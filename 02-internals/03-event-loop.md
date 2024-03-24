# https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

while(!shouldExit) {
    processEvents();
}

# Event Loop Phases (concept)
1) Timers
2) I/O callbacks
3) setImmediate
4) Close callbacks

# Timers
- setTimeout
- setInterval
- setImmedaite