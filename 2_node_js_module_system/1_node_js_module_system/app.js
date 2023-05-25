// EXAMPLE 1:
const logger = require('./logger');

console.log(logger); /*
{
    log: [Function: log],
    error: 'ERROR',
    info: 'INFO',
    warning: 'WARNING'
}
*/

const {
    log,
    error,
    info,
    warning
} = require('./logger');

log("Node.js module demo 1");
log("Node.js module demo 2", warning);
log("Node.js module demo 3", error);

// EXAMPLE 2:
console.log(module.exports === exports);

// ANOTHER EXAMPLE:
let dbLogger = require('./dblogger');
dbLogger = require('./dblogger');
