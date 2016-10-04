const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('It works!');
});

server.on('clientError', (err,socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');

});
server.listen(8000);