var Job = require('../models/Jobs');
var User = require('../models/User');

/**
 * GET /jobs
 * Job mgmt page.
 */
exports.getJobs = function(req, res) {
  Job.find(function(err, docs) {
    res.render('jobs', { jobs: docs });
  });
};

exports.postJobs = function(req, res) {
  Job.save(function(err) {
    console.log("saving...");
    
  })
}
