let users = require('../controllers/users.js')
var path = require('path');

module.exports = function(app) {
  //**** 2. create routes ********

  //get all the users info
  app.get('/users', function(req,res) {
    console.log("GET request")
    users.showAll(req,res)
  });


  //create users
  app.post('/users', function (req, res){
    console.log("POST Request: We are here")
    users.createUser(req,res)
  });

  //***create BucketList**** belongs to User
  app.post("/users/:id", function(req, res){
    console.log("Post create a new list")
    users.createBucketList(req, res)
  });

  // show one specific user info
  app.get('/users/:id', function(req, res) {
    console.log("im in the routes", req.params.id)
    users.showUser(req, res)
  });

  //Delete a User
  app.delete('/users/:id', function(req, res) {
    console.log("DELETE Request")
    users.deleteUser(req, res)
  });

  //Update a user!!!
  app.put('/users/:id', function(req, res) {
    console.log(" from routes ID", req.params.id);
    users.updateUser(req, res)
  });


  // if none of these do not match we go to Angular routes
  app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/index.html"))
  });

}
