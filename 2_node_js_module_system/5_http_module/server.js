const http = require('http');
const fs = require('fs');

const { html } = require('./style');

const port = 5000;
const encodingUTF_8 = 'utf-8';

const server = http.createServer((req, res) => {
    try {
        res.write(html.htmlStart, encodingUTF_8);
        res.write(html.head, encodingUTF_8);
        res.write(html.bodyStart, encodingUTF_8);
        res.write(html.header, encodingUTF_8);
        switch (req.url) {
            case "/":
                res.write(fs.readFileSync('./index.html', encodingUTF_8));
                break;
            case "/about" || "/about/":
                res.write(fs.readFileSync('./about.html', encodingUTF_8));
                break;
            default:
                res.write(`<h1>Sorry, but this page is not available at the moment!</h1>`, encodingUTF_8);
                break;
        }
        res.write(html.footer, encodingUTF_8);
        res.write(html.bodyEnd, encodingUTF_8);
        res.write(html.htmlEnd, encodingUTF_8);
        res.end();
    } catch (err) {
        console.log(`${err.name}: ${err.message}`);
    }
});

server.listen(port);
console.log(`Server runs on http://localhost:${port}`);
