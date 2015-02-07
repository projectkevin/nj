var mongoose = require('mongoose');
var User = require('./user').User;

var jobSchema = new mongoose.Schema({
  title: { type: String }
, desc: String
, salary: Number
, user : [{ type : Mongoose.Schema.ObjectId, ref : 'User' }]
});
});

var Job = mongoose.model('Job', jobSchema);
