var Job = require('../models/Jobs');

exports.getJob = function(req, res) {
  res.render('job', {
    title: 'Job'
  });
};
