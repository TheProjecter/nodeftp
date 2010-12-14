
var net = require('net');

var PORT = '21';
// If the HOST is omitted, the server will accept connections directed to any IPv4 address (INADDR_ANY)
var HOST = undefined; 
var CRLF = '\r\n';

var server = net.createServer(function(client) {
	// a new client connect
	client.write("220 NodeFTP\r\n");
	client.on("data", function(data) {
    	client.write(data);
  	});
});

server.listen(port || PORT, host || HOST, function() {
	// server start
	address = server.address();
  	console.log("opened server on %j", address);
});

// catch process exit signal