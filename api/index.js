var io = require('socket.io').listen(8080),
  ss = require('socket.io-stream'),
  path = require('path'),
  fs = require('fs');

io.of('/upload').on('connection', function(socket) {
  ss(socket).on('file', function(stream, data) {
    var filename = path.basename(data.name);
    stream.pipe(fs.createWriteStream(path.join('data', filename)));
  });
});
