function BpmController(io) {
  io.on('connection', function (socket) {
    console.log("Connected: ", socket)
    io.sockets.on('bpm', function () {
      console.log("bpm received");
    });

    io.on('bpm', function () {
      console.log("bpm received");
    });
  });
}


module.exports = BpmController;
