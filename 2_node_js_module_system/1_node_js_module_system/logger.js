// EXAMPLE 1:
const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info) {
    console.log(`${level}: ${message}`);
}

module.exports.log = log;
module.exports.error = error;
module.exports.info = info;
module.exports.warning = warning;

// EXAMPLE 2:
(function (exports, require, module, __filename, __dirname) {
    const error = "ERROR";
    const warning = "WARNING";
    const info = "INFO";

    function log(message, level = info) {
        console.log(`${level}: ${message}`);
    }

    module.exports.log = log;
    module.exports.error = error;
    module.exports.info = info;
    module.exports.warning = warning;
});
