var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var Metronome = require('./src/metronome')
var ClientController = require('./src/clientController')
var BpmController = require('./src/bpmController')
var JoystickController = require('./src/joystickController')

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.isSpeakerServer = true //!!process.env['SPEAKER_SERVER']

if (app.isSpeakerServer) {
  app.io = require('socket.io')();
  Metronome(app.io).start()
}

app.ioClient = require("socket.io-client");
ClientController(app.ioClient);
BpmController(app.ioClient)
JoystickController(app.ioClient);


module.exports = app;
