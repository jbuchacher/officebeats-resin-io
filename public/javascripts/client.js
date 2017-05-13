console.log(io)
console.log(window.SOCKET_IO_SERVER_ADDRESS)
var socket = io.connect(window.SOCKET_IO_SERVER_ADDRESS);
socket.on('bpm', function() {
  console.log("yo")
})
