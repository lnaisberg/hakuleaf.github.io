$(document).ready(function(){

	var initialScrollPos = 0;
	var heightOfViewport = $('body').height()/3;

	var colors_r = ["#8c14fc", "#5990a5"];
	var colors_l = ["#8c14fc", "#475904"];
	var sectionIndex = 0;

	$(window).on('scroll', function() {
		var currentScrollPos = $(this).scrollTop();

		if(currentScrollPos > initialScrollPos) {
			if($(window).scrollTop() > heightOfViewport*(sectionIndex+1)) {
				sectionIndex += 1;
				$(".right").css("background-color", colors_r[sectionIndex]);
				$(".left").css("background-color", colors_l[sectionIndex]);
				console.log(sectionIndex);
			} 
		} else {
			if($(window).scrollTop() <= heightOfViewport*(sectionIndex)) {
				sectionIndex -= 1;
				$(".right").css("background-color", colors_r[sectionIndex]);
				$(".left").css("background-color", colors_l[sectionIndex]);
			}
		}
		initialScrollPos = currentScrollPos;
	})

});