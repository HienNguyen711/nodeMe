var http = require('http');
var port = process.env.PORT || 3000;
var ip = process.env.IP;
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello Me \n');
}).listen(port,ip);
console.log('running on port '+port);