const http = require('http');

const server = http.createServer((_, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(JSON.stringify({ message: 'Hello Moon' }));
});

server.listen(3000, () => {
  console.log('Access page: http://localhost:3000');
});
