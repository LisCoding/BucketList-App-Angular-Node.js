
// require mongoose
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
var BucketListSchema = new mongoose.Schema({
 _user: {type: Schema.Types.ObjectId, ref: 'user'},
 title: { type: String, required: true, minlength: 5},
 description: { type: String, required: true, minlength: 10},
 author: {type: String, required: true, minlength: 3},
 tagName: {type: String}, 
 done: { type: Boolean }
},{timestamps: true });


// register the schema as a model
// We are setting this Schema in our Models as 'User'
mongoose.model('BucketList', BucketListSchema);
var BucketList = mongoose.model('BucketList');

mongoose.Promise = global.Promise;
