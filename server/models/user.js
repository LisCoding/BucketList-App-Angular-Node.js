var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 3},
  bucketLists: [{type: Schema.Types.ObjectId, ref: "bucketList"}]
}, {timestamps:true});

//set up model
//get model
mongoose.model('User', UserSchema);
//set model
var User = mongoose.model("User")

mongoose.Promise = global.Promise
