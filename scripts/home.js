$(document).ready(function(){

	var i = 0;
	var images = ["bckg1_copy.png", "bckg2.jpg", "bckg3.png"];
	$("#template").css("background-image", "url(images/" + images[i] + ")");
	var i = 1;

	function changeBackground(){
		$("#template").css("background-image", "url(images/" + images[i] + ")");
		i++;
		if(i >= images.length)
			i = 0;
  	}
	setInterval(changeBackground, 4000);

	
});