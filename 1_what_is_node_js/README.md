# What is Node.js

> __Summary__: in this doc page, you'll learn about what Node.js is, and why and when you should use Node.js.

## Introduction to Node.js

Node.js is an open-source and cross-platform runtime enviroment that allows you to use JS to develop server-side applications.

Every web browser has a JavaScript engine that takes JavaScript code and compiles it to machine code. For example, Firefox uses SpiderMonkey, and Google Chrome uses V8. Because browsers use different JavaScript engines, sometimes, you will see that JavaScript behaves differently between the browsers.

In 2009, Ryan Dahl, the creator of Node.js, took the V8 engine and embedded it in an application that could execute JavaScript on the server.

<img src="https://www.javascripttutorial.net/wp-content/uploads/2020/06/nodejs-v8-engine.png">

The following picture illustrates the Node.js system:

<img src="https://www.javascripttutorial.net/wp-content/uploads/2020/06/what-is-node.js.png">

Node.js uses the single-threaded, non-blocking, and event-driven execution model, which is similar to the execution model of JavaScript in the web browser.

## Node.js is Single-threaded

Node.js is single-threaded. It means that each process has only one thread of execution.

The single-threaded execution model allows Node.js to handle more concurrent requests easily via the event loop. Because of this, Node.js applications typically consume comparatively less memory.

If you have not familiar with the event loop, check out this event loop tutorial. The event loop in Node.js works the same as the event loop in web browsers.

## Node.js uses Non-blocking I/O

I/O stands for input/output. It can be disk access, a network request, or a database connection. I/O requests are expensive and slow and hence block other operations.

Node.js addresses blocking I/O issues by using non-blocking I/O requests.

Non-blocking means that you can make a request while doing something else, and then, when this request is finished, a callback will execute to handle the result.

In other words, the program execution can continue while other operations are taking place.

## Node.js is event-driven

The event-driven nature of node.js explains how it schedules operations using the event loop.

## Why node.js

Node.js is good for prototyping and agile development. It also allows you to build fast and highly scalable applications.

Node.js has a large ecosystem of open source libraries so that you can reuse existing libraries and spend more time focusing on your applications.

If you already use JavaScript for front-end development, you can leverage your existing skills for server-side development. By using the same JavaScript on both client-side and server-side, your codebase is cleaner and more consistent.
