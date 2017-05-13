var T = require('timbre');

function ButtonController(io) {
  io.on('connection', function (socket) {
    console.log("Connected: ", socket)
    var piPins = require('pi-pins')
    var button = piPins.connect(26)

    socket.on('disconnect', function () {
      socket.removeAllListeners();
    })

    button.on('rise', function () {
      io.emit('hihat')
    });
  });
}


module.exports = ButtonController;
