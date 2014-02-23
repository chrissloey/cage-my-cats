fs = require('fs'),
		Canvas = require('canvas'),
		kittydar = require('kittydar'),
		Image = Canvas.Image;

exports.cage = function(image_location, callback) {
	fs.readFile(__dirname + '/../public/images/example.jpg', function(err, data){
		if (err) throw err;
		var img = new Image;
		img.src = data;

		// Initialiaze a new Canvas with the same dimensions
		// as the image, and get a 2D drawing context for it.
		var catCanvas = new Canvas(img.width, img.height);
		var ctx = catCanvas.getContext('2d');
		ctx.drawImage(img, 0, 0, img.width, img.height);

		var cats = kittydar.detectCats(catCanvas);
		console.log("there are", cats.length, "cats in this photo");
		console.log(cats[0]);

		callback(catCanvas.toDataURL());
	});
}
