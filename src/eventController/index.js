var remove = require('lodash/remove')
var map = require('lodash/map')

function EventController(io) {
  var sockets = [];

  io.on('connect', onConnect)
  io.on('disconnect', onDisconnect)

  function onConnect(socket) {
    console.log("Connected socket: ", socket)
    sockets.push(socket);
  }

  function onDisconnect(socket) {
    console.log("Disconnected socket: ", socket)
    remove(sockets, socket);
   }

  function emit() {
    const emitArgs = arguments
    console.log("Emitting: ", emitArgs)

    io.emit(...emitArgs)

    /* sockets.map(function(socket){
     *   console.log("Emitting to socket", socket)
     *   socket.emit(...emitArgs)
     * })*/
  }

  function use() {
    const useArgs = arguments
    console.log("Emitting: ", useArgs)

    io.use(...useArgs)

    /* sockets.map(function(socket){
     *   console.log("Emitting to socket", socket)
     *   socket.emit(...emitArgs)
     * })*/
  }

  return {
    emit,
    use,
  }
}

module.exports = EventController;
