const fs = require('fs');

class Style {
    constructor(htmlStart, head, bodyStart, header, footer, bodyEnd, htmlEnd) {
        this.htmlStart = htmlStart;
        this.head = head;
        this.bodyStart = bodyStart;
        this.header = header;
        this.footer = footer;
        this.bodyEnd = bodyEnd;
        this.htmlEnd = htmlEnd;
    }
}

class Home extends Style {
    constructor(main) {
        super();
        this.main = main;
    }
}

module.exports.Style = Style;
module.exports.Home = Home;