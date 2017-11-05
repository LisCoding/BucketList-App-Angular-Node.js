var mongoose = require('mongoose');
var User = mongoose.model('User');
var BucketList = mongoose.model('BucketList');

module.exports = {

  showAll: function (req, res) {
    User.find({}, function(err, users){
      if(err){
        console.log("did not get dat", err);
      } else {
        console.log("We got data ####");
        return res.json(users);
      }
    })
  },

  //create a new user
  createUser: function(req, res){
    delete req.body._id

    User.findOne({name: req.body.name}, function(err, user){
      if(user){
        console.log("we already have this userSSS", user)
        return res.json(user);
      } else {
        User.create(req.body, function(err, user){
          if(err){
            console.log("we can't create a user", err.errors);
          }else {
            console.log("We succefully created a USer", user);
            return res.json(user)
          }
        })
      }
    })

  },
  //create a BList that belongs to User
  createBucketList: function(req, res){
    delete req.body._id
    User.findOne({_id: req.params.id}, function(err, user){
      var bucketLists = new BucketList(req.body);
      bucketLists._user = user._id;
       user.bucketLists.push(bucketLists);
      bucketLists.save(function(err){
        if(err){
          console.log("something went wrong saving list")
        }
        user.save(function(err){
          if(err){
            console.log("something went wrong", error );
          }else {
            console.log("We succefully created a List");
            return res.json(user)
          }
        })
      })
    })
  },

  //create a BList that belongs to taggedPerson
  createBucketListForTaggedPerson: function(req, res){
    console.log("we are inside controllers tagged person")
    delete req.body._id
    User.findOne({name: req.params.name}, function(err, user){
      console.log("this is wagr we sounf", user)
      var bucketLists = new BucketList(req.body);
      bucketLists._user = user._id;
       user.bucketLists.push(bucketLists);
      bucketLists.save(function(err){
        if(err){
          console.log("something went wrong saving list")
        }
        user.save(function(err){
          if(err){
            console.log("something went wrong", error );
          }else {
            console.log("We succefully created a List");
            return res.json(user)
          }
        })
      })
    })
  },



  showUser: function(req, res){
    User.findOne({_id: req.params.id}, function (err, user) {
      if(err){
        console.log("something went wrong can not get data", err);
      }else {
        return res.json(user)
      }
    })
  },

    //show bucket-list of a specific User
    showBucketList: function(req, res){
      console.log("we are in inside the controller showBucketList")
      BucketList.find({_user: req.params.id}, function (err, bucketList) {
        if(err){
          console.log("something went wrong can not get bucketList", err);
        }else {
          console.log("we are sending response" )
          return res.json(bucketList)
        }
      })
    },

  //delete Users!!
  deleteUser: function(req, res){
    User.remove({_id: req.params.id}, function(err, user){
      if(err){
        console.log("we cant delete something went wrong@", err);
      }else {
        res.json(true)
      }
    })
  },

  updateBucketList: function (req, res) {
    BucketList.update({_id: req.params.id}, req.body, function(err, itemList){
      if(err){
        console.log("We cant not Update BucketList something went wrong!");
      }else {
        return res.json(true)
      }
    })
  }

}
