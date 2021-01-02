const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('./navi/home.html')
const profile = fs.readFileSync('./navi/profile.html')
const about = fs.readFileSync('./navi/about.html')
const contact = fs.readFileSync('./navi/contact.html')


const server = http.createServer((req, res) => {

    var url = req.url;


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');


    if (url == '/') {
        res.end(home);
    } else if (url == '/profile') {
        res.end(profile);
    } else if (url == '/about') {
        res.end(about);
    } else if (url == '/contact') {
        res.end(contact);
    } else {
        res.statusCode = 404;
        res.end("<h1> Errrrrrrrrr 404 received</h1>");
    }

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});