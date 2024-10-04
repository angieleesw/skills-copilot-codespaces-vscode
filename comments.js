// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Create a route for the comments page
// 5. Create a route for the 404 page
// 6. Start and listen on the server

// 1. Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');

// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Create a route for the comments page
// 5. Create a route for the 404 page
const server = http.createServer(function (req, res) {
    const path = url.parse(req.url).pathname;

    switch (path) {
        case '/':
            fs.readFile(__dirname + '/index.html', function (err, data) {
                if (err) {
                    res.writeHead(404);
                    res.write('Page not found');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
            });
            break;
        case '/about':
            fs.readFile(__dirname + '/about.html', function (err, data) {
                if (err) {
                    res.writeHead(404);
                    res.write('Page not found');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
            });
            break;
        case '/comments':
            fs.readFile(__dirname + '/comments.html', function (err, data) {
                if (err) {
                    res.writeHead(404);
                    res.write('Page not found');
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                }
            });
            break;
        default:
            res.writeHead(404);
            res.write('Page not found');
            res.end();
    }
});

// 6. Start and listen on the server
server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});



