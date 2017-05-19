var get = require('lodash/get')
var socketIoServerAddr = get(process.env, 'SOCKET_IO_SERVER_ADDRESS', 'http://127.0.0.1:3000');

function ClientController(ioClient) {
  const socket = ioClient(socketIoServerAddr)
  socket.on('connect', function(){
    console.log("connected to socket server: ", socketIoServerAddr)
  });

  socket.on('bpm', function(data){
    console.log("bpm rcvd")
  });
}


module.exports = ClientController;
