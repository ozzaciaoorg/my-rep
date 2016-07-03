var fs = require('fs') ;
var http = require('http') ;
var dispatcher = require('./module_01') ;
dispatcher.addListener("get", "/", function(req, res) {
    fs.readFile(__dirname + '/home.html', function (err, content) {
        if (err) {
            res.writeHead(500) ;
            return res.end('Error loading file') ;
        }
        res.writeHead(200) ;
        res.end(content) ;
    }) ;
}) ;
dispatcher.addListener("get", "/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}) ;
    res.end('Page One') ;
}) ;
dispatcher.addListener("get", "/page2", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}) ;
    res.end('Page Two') ;
}) ;
dispatcher.addListener("post", "/login", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'}) ;
    res.end('Post one') ;
}) ;
http.createServer(function (req, res) {
    dispatcher.dispatch(req, res) ;
}).listen(8080, 'localhost') ;