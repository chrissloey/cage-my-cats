Dropzone.options.catDrop  = {
    maxFilesize: 5, // MB
    dictDefaultMessage: "Drag cat to be Caged",
    acceptedFiles: "image/*", // Accept images only
    maxFiles: 1,
    success: function(file, response) {
    	if (!response.image_src) {
    		return;
    	}
    	$('#cat-drop-container').css('display', 'none');
    	$('#caged-cat').html("<img src='" + response.image_src + "'/>")
    	$('#caged-cat').css('display', 'block');
    }
};
