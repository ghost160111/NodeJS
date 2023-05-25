const os = require('os');

let currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
};

console.log(currentOS); /*
{
  name: 'Windows_NT',
  architecture: 'x64',
  platform: 'win32',
  release: '10.0.19042',
  version: 'Windows 10 Pro'
}
*/

console.log(`The server has been up for ${os.uptime()} seconds.`);
// The server has been up for 67426 seconds.

console.group(os.userInfo()); /*
{
  uid: -1,
  gid: -1,
  username: 'User',
  homedir: 'C:\\Users\\User',
  shell: null
}
*/

// Getting the server hardware information
let totalMem = os.totalmem();
console.log(totalMem); // 8347516928

let freeMem = os.freemem();
console.log(freeMem); // 3332685824

let cpuInfo = os.cpus();
console.log(cpuInfo); /*
[
    {
        model: 'Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz',
        speed: 1190,
        times: { user: 930328, nice: 0, sys: 611296, idle: 6267609, irq: 210218 }
    },
    {
        model: 'Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz',
        speed: 1190,
        times: { user: 898937, nice: 0, sys: 348468, idle: 6561625, irq: 27968 }
    },
    {
        model: 'Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz',
        speed: 1190,
        times: { user: 1039921, nice: 0, sys: 397000, idle: 6372109, irq: 69093 }
    },
    {
        model: 'Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz',
        speed: 1190,
        times: { user: 930078, nice: 0, sys: 327890, idle: 6551062, irq: 33968 }
    }
]
*/

// The following shows the model and speed of the server's CPU:

const { model, speed } = os.cpus()[0];

console.log(`Model: ${model}`); // Model: Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz
console.log(`Speed (MHz): ${speed}`); // Speed (MHz): 1190

// Retrieving network interface information

console.log(os.networkInterfaces()); /*
{
    'Беспроводная сеть': [
        {
            address: 'fe80::f046:7256:806:e767',
            netmask: 'ffff:ffff:ffff:ffff::',
            family: 'IPv6',
            mac: 'dc:41:a9:5f:e0:d8',
            internal: false,
            cidr: 'fe80::f046:7256:806:e767/64',
            scopeid: 16
        },
        {
            address: '10.222.221.131',
            netmask: '255.255.252.0',
            family: 'IPv4',
            mac: 'dc:41:a9:5f:e0:d8',
            internal: false,
            cidr: '10.222.221.131/22'
        }
    ],
    'Loopback Pseudo-Interface 1': [
        {
            address: '::1',
            netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
            family: 'IPv6',
            mac: '00:00:00:00:00:00',
            internal: true,
            cidr: '::1/128',
            scopeid: 0
        },
        {
            address: '127.0.0.1',
            netmask: '255.0.0.0',
            family: 'IPv4',
            mac: '00:00:00:00:00:00',
            internal: true,
            cidr: '127.0.0.1/8'
        }
    ]
}
*/

