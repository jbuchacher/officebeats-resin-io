function Metronome(eventController) {
  var timer;

  function start() {
    stop()

    timer = setInterval(tick, 1000)
  }

  function stop() {
    if (timer) {
      clearInterval(timer)
    }
  }

  function tick() {
    eventController.emit('bpm')
  }

  return {
    start,
    stop,
    tick,
  }
}


module.exports = Metronome;
