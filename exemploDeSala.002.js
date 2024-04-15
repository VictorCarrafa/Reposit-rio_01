
var minhabiblioteca = require("./exemploModule");

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(minhabiblioteca.primeironome);
    res.write(minhabiblioteca.sobrenome);
    res.write(minhabiblioteca.rgm);
    res.end();
 }).listen(9080);
