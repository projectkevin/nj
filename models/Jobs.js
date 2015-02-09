var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new mongoose.Schema({
  title: { type: String }
});

var Job = mongoose.model('Job', jobSchema);
