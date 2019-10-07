var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
var reader = fs.createReadStream("video.mp4");
  res.writeHead(200,{"content-type":"video/mp4"})
  reader.pipe(res);
  console.log(Math.ceil(process.memoryUsage().external / 1024) + "KB");
});
server.listen(3000);
console.log("Server is listening at port 3000");