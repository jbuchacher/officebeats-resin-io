var senseJoystick = require('node-sense-hat').Joystick;

function JoystickController(io) {
  io.on('connection', function (socket) {
    socket.on('disconnect', function () {
      socket.removeAllListeners();
    })

    senseJoystick.getJoystick()
      .then((joystick) => {
	joystick.on('press', (direction) => {
	  console.log('Got button press in the direction: ', direction);

          var directionToInstrumentMapping = {
            left: 'hihat',
            right: 'crash',
            up: 'bd',
            down: 'snare',
            click: 'boobooboobooooooooo',
          }

          var instrument = directionToInstrumentMapping[direction]
          console.log("emitting: ", instrument)
          io.emit(instrument)
	});
      }).catch((e) => {
        console.log("Didn't find a PI hat")
      })
  });
}


module.exports = JoystickController;
