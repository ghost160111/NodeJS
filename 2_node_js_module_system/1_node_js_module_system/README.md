# Node.js Modules

> __Summary__: in this doc page, you will learn about Node.js modules and understand how they work.

## Introduction to the Node.js modules

Node.js supports a module system called CommonJS modules by default. Later, it supports ES modules starting in version 14.0.0. This tutorial focuses on the CommonJS modules.

In CommonJS modules, Node.js treats each JavaScript file as a separate module.

Let’s take a simple example to see how modules work in Node.js.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2020/06/nodejs-modules.png">

## Creating a new module

First, create a new file called logger.js with the following code:

```js
const error = "ERROR";
const warning = "WARNING";
const info = "INFO";

function log(message, level = info) {
    console.log(`${level}: ${message}`);
}
```

The logger.js contains three constants and a function.

The log() function in the logger module accepts two parameters: message and level. If you don’t pass the level into the log() function, it defaults to info.

In the logger.js module, all the variables and functions are private. This means that they are invisible and cannot be used in other modules.

To use the variables and functions of a module in another module, you need to export them at the end of the logger.js file:

```js
module.exports.log = log;
module.exports.error = error;
module.exports.info = info;
module.exports.warning = warning;
```

This code creates new properties on the module.exports object and assigns them to the corresponding variables and functions.

Also, you can use different names when exporting the objects. For example:

```js
module.exports.fatal = error;
```

In this case, other modules will reference the error constant as the fatal constant.

Now, you’re ready to use the log() function and all the constants of the logger module in another module.

## Importing a module

Second, create a new file called app.js that uses the logger.js module. To use the logger.js module from the app.js, you need to import the logger module by using the require() function:

```js
const logger = require('./logger.js');
```

Or you can remove the .js extension from the logger.js like this:

```js
const logger = require('./logger');
```

Behind the scenes, the require() function executes the logger.js file and returns the exports object. If the require() function cannot find the file, it’ll throw an error.

The following shows the logger objects to the console:

```js
const logger = require('./logger');

console.log(logger);
```

Output:

```
{
    log: [Function: log],
    error: 'ERROR',
    info: 'INFO',
    warning: 'WARNING'
}
```

The logger object contains the log() function and other constants from the logger.js module. You can reference them as follows:

```js
const logger = require('./logger');

logger.log('Node.js module demo 1');
logger.log('Node.js module demo 2', logger.warning);
```

Output:

```
INFO: Node.js module demo 1
WARNING: Node.js module demo 2
```

To make the code more concise, you can use the object destructuring when importing a module like this:

```js
const { log, error, info, warning } = require('./logger');
```

The object destructuring assigns the properties of the exports object returned by the require() function to the variables on the left side.

After destructuring, you can these variables directly:

```js
log('Node.js module demo 1');
log('Node.js module demo 2', warning);
```

Output:

```
INFO: Node.js module demo 1   
WARNING: Node.js module demo 2
```

## Understanding the module wrapper function

Before Node.js executes a module, it wraps all the code inside that module with a function wrapper which looks like the following:

```js
(function(exports, require, module, __filename, __dirname) {
    // module code
});
```

For example, the code of the logger.js module before execution will look like this:

```js
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
```

By doing this, Node.js achieves the following important goals:

- Keep the top-level variables (var, let, and const) scoped to the module instead of the global object.
- Make some module-specific variables like global variables for example module and exports.

Notice that the exports object references the module.exports:

```js
console.log(module.exports === exports); // true
```

## Importing the same module multiple times

When you use the require() function to include a module multiple times, the require() function evaluates the module once only at the first call and puts it in a cache.

From the subsequent calls, the require() function uses the exports object from the cache instead of executing the module again.

The following example illustrates how it works:

First, create a new module called dblogger.js that has the following code:

```js
console.log("Connected to the DB");
```

Second, use the require() function to include the dblogger.js module multiple times in the app.js:

```js
let dbLogger = require('./dblogger');
dbLogger = require('./dblogger');
```

Output:

```
DBLogger is loaded.
```

In this example, you can see the message `'DBLogger is loaded.'` only once, not twice. This means that Node.js evaluated the dblogger.js only once.

# :memo: Summary

- In the CommonJS modules, Node.js treats a JavaScript file as a module.
- Expose variables and functions to other module by assign them to the properties of the module.exports object.
- Node.js wraps the module code in a module wrapper function before executing it.
- All variables, constants, functions, classes, etc., declared in a module are scoped to the module, not the global scope.
- Node.js executes a module only once and place the result in the cache for the next use.
