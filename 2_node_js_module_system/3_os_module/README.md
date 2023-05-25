# Node.js OS Module

> __Summary__: in this doc page, you'll learn about the Node.js `os` module that allows you to perform operating system-related activity.

## Introduction to the Node.js OS module

To use the `os` module, you include it as follows:

```js
const os = require('os');
```

The os module provides you with many useful properties and methods for interacting with the operating system and server.

For example, the os.EOL property returns the platform-specific end-of-line marker.

The os.EOL property returns \r\n on Windows and \n on Linux or macOS.

## Getting the current Operating System information

The os module provides you with some useful methods to retrieve the operating system of the server. For example:

```js
let currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version()
};

console.log(currentOS);
```

Output:

```
{
    name: 'Windows_NT',
    architecture: 'x64',
    platform: 'win32',
    release: '10.0.18362',
    version: 'Windows 10 Pro'
}
```

## Checking server uptime

The `os.uptime()` method returns the system uptime in seconds. For example:

```js
console.log(`The server has been up for ${os.uptime()} seconds.`);
```

Output:

```
The server has been up for ... seconds.
```

## Getting the current user information

The os.userInfo() method returns the information about the current user:

```js
console.log(os.userInfo());
```

Output:

```
{
    uid: -1,
    gid: -1,
    username: 'User',
    homedir: 'C:\\Users\\User',
    shell: null
}
```

## Getting the server hardware information

THe os.totalmem() method returns the total memory in bytes of the server:

```js
let totalMem = os.totalmem();
console.log(totalMem);
```

Output:

```
8347516928
```

To get the amount of free memory in bytes, you use the os.freemem() method:

```js
let freeMem = os.freemem();
console.log(freeMem);
```

Output:

```
3332685824
```

To get the information of the CPU, you use the os.cpus() method:

```js
let cpuInfo = os.cpus();
console.log(cpuInfo);
```

Output:

```
All basic info about your CPU
```

The following example shows the model and speed of the server's CPU:

```js
const { model, speed } = os.cpus()[0];

console.log(`Model: ${model}`);
console.log(`Speed (MHz): ${speed}`);
```

## Retrieving network interface information

The `os.networkInterfaces()` method returns an object that contains network interface information.

Each key in the returned object identifies a network interface:

```js
console.log(os.networkInterfaces());
```

Output:

```
All settings about your network
```

# :memo: Summary

- In this doc page, you've learned some properties and methods of the Node.js os module to interact with the operating system.
