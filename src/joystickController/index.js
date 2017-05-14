var senseJoystick = require('sense-joystick')
var socketClient = require('socket.io-client')

function JoystickController() {
  var socket = socketClient("http://192.168.78.254:3000")
  socket.on('connect', function () {
    console.log("CONNECTED")
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
                     socket.emit(instrument)
	           });
                 }).catch((e) => {
                   console.log("Didn't find a PI hat")
                 });
  })
}


module.exports = JoystickController;
