var cager = require('../libs/cager')
/*
 * GET home page.
 */

exports.index = function(req, res){
	cager.cage(null, function(image_src, err) {
		if (err) throw err;
	  res.render('index', { title: 'Express', image_src: image_src });
	});
};
