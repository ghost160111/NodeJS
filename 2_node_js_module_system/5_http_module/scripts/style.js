const { Layout, Home, About } = require('./layout');
const fs = require('fs');

let style = {
    htmlStart: `<!DOCTYPE html><html>`,
    head: fs.readFileSync('../layout/head.html'),
    bodyStart: `<body>`,
    header: fs.readFileSync('../layout/header.html'),
    footer: fs.readFileSync('../layout/footer.html'),
    bodyEnd: `</body>`,
    htmlEnd: `</html>`,
};

let {
    htmlStart,
    head,
    bodyStart,
    header,
    footer,
    bodyEnd,
    htmlEnd,
} = style;

let pages = {
    home: fs.readFileSync('../pages/index.html'),
    about: fs.readFileSync('../pages/about.html'),
};

let {
    home,
    about,
} = pages;

const html = new Layout(htmlStart, head, bodyStart, header, footer, bodyEnd, htmlEnd);

const homePage = new Home(home);
const aboutPage = new About(about);

module.exports.html = html;
module.exports.home = homePage;
module.exports.about = aboutPage;
