const fs = require('fs');

class Layout {
    constructor(htmlStart, head, bodyStart, header, footer, bodyEnd, htmlEnd) {
        this.htmlStart = htmlStart;
        this.head = head;
        this.bodyStart = bodyStart;
        this.header = header;
        this.footer = footer;
        this.bodyEnd = bodyEnd;
        this.htmlEnd = htmlEnd;
        this.title = "Node.js - Server";
    }
    
    set HtmlStart (value) { this.htmlStart = value; }
    set Head      (value) { this.head      = value; }
    set BodyStart (value) { this.bodyStart = value; }
    set Header    (value) { this.header    = value; }
    set Footer    (value) { this.footer    = value; }
    set BodyEnd   (value) { this.bodyEnd   = value; }
    set HtmlEnd   (value) { this.htmlEnd   = value; }

    get HtmlStart () { return this.htmlStart; }
    get Head      () { return this.head;      }
    get BodyStart () { return this.bodyStart; }
    get Header    () { return this.header;    }
    get Footer    () { return this.footer;    }
    get BodyEnd   () { return this.bodyEnd;   }
    get HtmlEnd   () { return this.htmlEnd;   }
}

class Home extends Layout {
    constructor(main) {
        super();
        this.main = main;
        this.title = "Home";
    }

    set Main(value) { this.main = value; }
    get Main() { return this.main; }
}

class About extends Layout {
    constructor(about) {
        super();
        this.about = about;
        this.title = "About";
    }

    set About(value) { this.about = value; }
    get About() { return this.about; }
}

module.exports.Layout = Layout;
module.exports.Home = Home;
module.exports.About = About;