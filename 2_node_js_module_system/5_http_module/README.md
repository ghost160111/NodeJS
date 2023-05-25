# Node.js HTTP Module

> __Summary__: in this tutorial, you will learn about the Node.js http module and how to use it to create a simple HTTP server.

## Introduction to the Node.js HTTP module

The http module is a core module of Node designed to support many features of the HTTP protocol.

The following example shows how to use the http module:

First, create a new file called server.js and include the http module by using the require() function:

```js
const http = require('http');
```

Second, create an HTTP server using the createServer() method of the http object.

```js
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Hello, Node.js!</h1>');
    }
    res.end();
});
```

