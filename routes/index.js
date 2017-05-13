var express = require('express');
var router = express.Router();
var get = require('lodash/get')
var socketIoServerAddr = get(process.env, 'SOCKET_IO_SERVER_ADDRESS', '127.0.0.1');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("SOCKET IO SERVER: ", socketIoServerAddr)
  res.render('index', { title: 'Express', socketIoServerAddr });
});

module.exports = router;
