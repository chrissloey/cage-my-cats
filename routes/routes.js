var cager = require('../libs/cager'),
		fs = require('fs');

/*
 * GET home page.
 */
exports.index = function(req, res){
	console.log(req);
	res.render('index');
};

/*
 * POST upload
 */
exports.upload = function(req, res){
	console.log(req.files);
	// TODO handle req.files.file.path not existing - error response
  cager.cage(req.files.file.path, function(image_src, err) {
  	if (err) throw err;
  	res.send({image_src: image_src})
  });
};
