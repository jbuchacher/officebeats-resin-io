function BpmController(eventController, timbre) {
  eventController.use(function(socket, next){
    console.log(socket)
    next();
  });
}


module.exports = BpmController;
