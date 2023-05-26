const { Style, Home } = require('./layout');
const fs = require('fs');

let style = {
    htmlStart: `<!DOCTYPE html><html>`,
    head: fs.readFileSync('./head.html'),
    bodyStart: `<body>`,
    header: fs.readFileSync('./header.html'),
    footer: fs.readFileSync('./footer.html'),
    bodyEnd: `</body>`,
    htmlEnd: `</html>`,
}

let {
    htmlStart,
    head,
    bodyStart,
    header,
    footer,
    bodyEnd,
    htmlEnd,
} = style;

const html = new Style(htmlStart, head, bodyStart, header, footer, bodyEnd, htmlEnd);

module.exports.html = html;
