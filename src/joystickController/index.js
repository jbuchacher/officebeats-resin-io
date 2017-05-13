var senseJoystick = require('sense-joystick');

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
	}
    });
  });
}


module.exports = JoystickController;
