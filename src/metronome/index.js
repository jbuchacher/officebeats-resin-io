function Metronome(io) {
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
    console.log("bpm sent")
    io.emit('bpm')
  }

  return {
    start,
    stop,
    tick,
  }
}


module.exports = Metronome;
