function ButtonController(io) {
  io.on('connection', function (socket) {
    console.log("Connected: ", socket)
    var piPins = require('pi-pins')
    var button = piPins.connect(26)

    button.on('rise', function () {
      console.log("button pressed");
    });
  });
}


module.exports = ButtonController;
