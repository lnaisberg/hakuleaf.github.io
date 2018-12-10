$(document).ready(function(){

	var i = 0;
	var images = ["bckg1_copy.png", "bckg2.jpeg", "bckg3.png"];
	$("#template").css("background-image", "url(images/" + images[i] + ")");
	var i = 1;

	function changeBackground(){
		$("#template").css("background-image", "url(images/" + images[i] + ")");
		i++;
		if(i >= images.length)
			i = 0;
  	}
	setInterval(changeBackground, 4000);
	
	/*
	var slideIndex = 0;
	showSlides(slideIndex);

	function showSlides(slideIndex) {
		var slides = $(".mySlides");
		if (slideIndex == slides.length) {
			slideIndex = 0;
		} 
		for (var i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	    }
	    if (slideIndex == 0)
	    	slides[0].style.display = "block";
	    if (slideIndex == 1)
	    	slides[1].style.display = "block";
	    if (slideIndex == 2)
	    	slides[2].style.display = "block";
	    slideIndex++;
	}*/

	
});