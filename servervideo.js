const http = require("http");
const fs = require("fs");
const server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-type": "video/mp4" });
  var path = __dirname + "/video.mp4";
  var file = fs.readFileSync(path);
  res.write(file);
  res.end("Response ended.");
});
server.listen(3000);
console.log("server has been created on port 3000.");
