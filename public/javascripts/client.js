var socket = io.connect(window.SOCKET_IO_SERVER_ADDRESS);
socket.on('bpm', function() {
  var sine1 = T("sin", {freq:440, mul:0.5});
  var sine2 = T("sin", {freq:660, mul:0.5});

  T("perc", {r:500}, sine1, sine2).on("ended", function() {
    this.pause();
  }).bang().play();
})

socket.on('hihat', function()
  var sine1 = T("sin", {freq:890, mul:0.5});
  var sine2 = T("sin", {freq:260, mul:1.0});

  T("perc", {r:200}, sine1, sine2).on("ended", function() {
    this.pause();
  }).bang().play();
})
