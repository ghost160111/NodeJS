const path = require('path');

console.log(path.sep); // Outputs: \
console.log(path.delimiter); // Outputs: ;

// The following shows some handy methods of the path module that you probably use very often:

//path.basename(path, [,ext])
//path.dirname(path)
//path.extname(path)
//path.format(pathObj)
//path.isAbsolute(path)
//path.join(...path)
//path.normalize(path)
//path.parse(path)
//path.relative(from, to)
//path.resolve(...path)

// path.basename(path, [,ext]);
{
    console.log("Topic: path.basename(path, [,ext])");

    let result = path.basename('./text.txt');
    console.log(result); // text.txt

    result = path.basename('./text', 'txt');
    console.log(result); // text

    console.log("\n");
}

// path.dirname(path)
{
    console.log("Topic: path.dirname(path)\n");

    let result = path.dirname('./text.txt');
    console.log(result); // .

    console.log("\n");
}

// path.extname(path)
{
    console.log("Topic: path.extname(path)\n");

    console.log(path.extname('index.html')); // .html
    console.log(path.extname('app.js'));     // .js
    console.log(path.extname('node.js.md')); // .md

    console.log("\n");
}

// path.format(pathObj)
{
    console.log("Topic: path.format(pathObj)\n");

    let pathToFile = path.format({
        dir: 'public_html/home/js',
        base: 'app.js',
    });

    console.log(pathToFile); // public_html/home/js\app.js

    console.log("\n");
}

// path.isAbsolute(path)
{
    console.log("Topic: path.isAbsolute(path)\n");

    let result = path.isAbsolute("C:\\node.js\\");
    console.log(result); // true

    result = path.isAbsolute("C:/node.js/");
    console.log(result); // true

    result = path.isAbsolute("/node.js");
    console.log(result); // true

    result = path.isAbsolute("home/");
    console.log(result); // false

    result = path.isAbsolute(".");
    console.log(result); // false

    console.log("\n");
}

// path.join(...paths)
{
    console.log("Topic: path.join(...paths)\n");

    let pathToDir = path.join("/home", "js", "dist", "app.js");
    console.log(pathToDir); // \home\js\dist\app.js

    console.log("\n");
}

// path.parse(path)
{
    console.log("Topic: path.parse(path)\n");

    let pathObj = path.parse("d:/nodejs/html/js/app.js");
    console.log(pathObj); /*
    Result:
        {
          root: 'd:/',
          dir: 'd:/nodejs/html/js',
          base: 'app.js',
          ext: '.js',
          name: 'app'
        }
    */

    console.log("\n");
}

// path.normalize(path)
{
    console.log("Topic: path.normalize(path)\n");

    let pathToDir = path.normalize("C:\\node.js/module/js//dist");
    console.log(pathToDir); // C:\node.js\module\js\dist

    console.log("\n");
}

// path.relative(from, to)
{
    console.log("Topic: path.relative(from, to)\n");

    let relativePath = path.relative('/home/user/config/', '/home/user/js');
    console.log(relativePath); // ..\js

    console.log("\n");
}

// path.resolve(...paths)
{
    console.log("Topic: path.resolve(...paths)\n");

    console.log("Current working directory: ", __dirname);
    // c:\Users\User\Documents\GitHub\NodeJS\2_node_js_module_system\2_path_module
    console.log(path.resolve());
    // c:\Users\User\Documents\GitHub\NodeJS

    let path1, path2, path3;

    // Resolve 2 segments with the current directory
    path1 = path.resolve("html", "index.html");
    console.log(path1); // c:\Users\User\Documents\GitHub\NodeJS\html\index.html

    // Resolve 3 segments with the current directory
    path2 = path.resolve("html", "js", "app.js");
    console.log(path2); // c:\Users\User\Documents\GitHub\NodeJS\html\js\app.js

    // Treat of the first segment as root and ignore
    // the current working directory
    path3 = path.resolve("/home/html", "about.html");
    console.log(path3); // c:\home\html\about.html

    console.log("\n");
}
