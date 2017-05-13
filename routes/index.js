var express = require('express');
var router = express.Router();
var socketIoServerAddr = process.env['SOCKET_IO_SERVER_ADDRESS'] || '127.0.0.1';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', socketIoServerAddr: socketIoServerAddr });
});

module.exports = router;
