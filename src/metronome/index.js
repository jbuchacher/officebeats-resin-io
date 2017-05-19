function Metronome(io) {
  var timer;

  function start() {
    stop()

    timer = setInterval(tick(io), 1000)
  }

  function stop() {
    if (timer) {
      clearInterval(timer)
    }
  }

  function tick(io) {
    return function() {
      io.emit('bpm')
      console.log("bpm sent")
    }
  }

  return {
    start,
    stop,
    tick,
  }
}


module.exports = Metronome;
