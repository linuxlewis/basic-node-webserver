var port = 1337;
var server = require('./basicserver').createServer();

server.useFavIcon("localhost", "./docroot/favicon.png");
server.docroot("localhost", "/", "./docroot");

require('./httpsniffer').sniffOn(server);

server.listen(port);
