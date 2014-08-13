var http = require('http');
var fs = require('fs');

fs.readFile('index.html', function (err, data) {
  if (err) throw err;

function onRequest(request, response) {
console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(data);
  response.end();
}
http.createServer(onRequest).listen(8888);

console.log("Server has started.");

});
