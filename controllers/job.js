var Job = require('../models/Jobs');
var User = require('../models/User');

/**
 * GET /jobs
 * Job mgmt page.
 */
exports.getJobs = function(req, res) {
  res.render('jobs/index', {
    title: 'Job Manager'
  });
};

/**
 * POST new Job
 * Create a new local job.
 */
exports.postJob = function(req, res) {
  req.assert('title', 'Title of role').len(32);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/jobs/index');
  }

  var job = new Job({
    title: req.body.title
  });

    job.save(function(err) {
      if (err) return next(err);
      req.logIn(user, function(err) {
        if (err) return next(err);
        res.redirect('/');
      });
    });
  });
};
