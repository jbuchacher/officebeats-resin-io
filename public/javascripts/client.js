var socket = io.connect(window.SOCKET_IO_SERVER_ADDRESS);

socket.on("connect", function() {
  console.log("connected!", socket)

  socket.on('bpm', function() {
    console.log("arguments: ", arguments)
    console.log("bpm")
    var sine1 = T("sin", {freq:440, mul:0.5});
    var sine2 = T("sin", {freq:660, mul:0.5});

    T("perc", {r:500}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
  })

  socket.on('hihat', function() {
    console.log("hihat")
    var sine1 = T("sin", {freq:890, mul:0.5});
    var sine2 = T("sin", {freq:260, mul:1.0});

    T("perc", {r:200}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
  })

  socket.on('crash', function() {
    console.log("crash")
    var sine1 = T("sin", {freq:100, mul:1.0});
    var sine2 = T("sin", {freq:200, mul:0.5});

    T("perc", {r:200}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
  })

  socket.on('bd', function() {
    console.log("bd")
    var sine1 = T("sin", {freq:300, mul:0.5});
    var sine2 = T("sin", {freq:500, mul:1.0});

    T("perc", {r:200}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
  })

  socket.on('snare', function() {
    console.log("snare")
    var sine1 = T("sin", {freq:890, mul:0.5});
    var sine2 = T("sin", {freq:1000, mul:0.7});

    T("perc", {r:200}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
  })

  socket.on('boobooboobooooooooo', function() {
    console.log("boobooboobooooooooo")
    var sine1 = T("sin", {freq:1200, mul:0.5});
    var sine2 = T("sin", {freq:260, mul:1.0});

    T("perc", {r:200}, sine1, sine2).on("ended", function() {
      this.pause();
    }).bang().play();
  })
})
