var socket = io.connect('http://localhost:8080/upload'),
  sendInput = document.getElementById('button-send'),
  fileInput = document.getElementById('button-file');

sendInput.addEventListener('click', function(e) {
  var file = fileInput.files[0],
    stream = ss.createStream();

  ss(socket).emit('file', stream, {
    name: file.name,
    size: file.size
  });

  ss.createBlobReadStream(file).pipe(stream);
});
