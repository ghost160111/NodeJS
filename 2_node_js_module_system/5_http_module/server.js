const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            html {
                background: #000;
                color: #fff;
            }
            a {
                color: white;
            }
            a:hover {
                color: red;
            }
            a:active {
                color: whitesmoke;
            }
            </style>
            <title>Node.js - Home</title>
        </head>
        <body>
            <header class="header">
                <div class="header-wrapper">
                <h1>Header Section</h1>
                </div>
            </header>
            <main class="main">
                <div class="main-wrapper">
                <h1>Main Section</h1>
                <a href="/">Home</a>
                <a href="/about">About</a>
                </div>
            </main>
            <footer class="footer">
                <div class="footer-wrapper">
                <h1>Footer Section</h1>
                </div>
            </footer>
        </body>
        </html>
        `);
    } else if (req.url === "/about" || req.url === "/about/") {
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            html {
                background: #000;
                color: #fff;
            }
            a {
                color: white;
            }
            a:hover {
                color: red;
            }
            a:active {
                color: whitesmoke;
            }
            </style>
            <title>Node.js - About</title>
        </head>
        <body>
            <header class="header">
                <div class="header-wrapper">
                <h1>Header Section</h1>
                </div>
            </header>
            <main class="main">
                <div class="main-wrapper">
                <h1>Main Section</h1>
                <a href="/">Home</a>
                <a href="/about">About</a>
                </div>
            </main>
            <footer class="footer">
                <div class="footer-wrapper">
                <h1>Footer Section</h1>
                </div>
            </footer>
        </body>
        </html>
        `);
    }
    res.end();
});

server.listen(5000);
console.log(`The HTTP Server is running on http://localhost:${port}/`);

