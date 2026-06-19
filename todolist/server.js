const http = require("http");

const requestListener = (request, response) => {
  console.log(request.url);
  console.log(request.method);
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Hello");
  response.end();
};

const server = http.createServer(requestListener);
server.listen(8080);