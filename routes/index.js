var express = require('express');
var router = express.Router();
var get = require('lodash/get')
var socketIoServerAddr = get(process.env, 'SOCKET_IO_SERVER_ADDRESS', 'http://127.0.0.1:3000');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', socketIoServerAddr });
});

module.exports = router;
