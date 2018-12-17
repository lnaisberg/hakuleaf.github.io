$(document).ready(function(){


	$(".arrow").click(function(){
		$('html, body').animate({
    	scrollTop: $(".indie").offset().top
		}, 800);
	});

	

	var initialScrollPos = 0;
	var heightOfViewport = $('body').height()/2;

	var colors_r = ["#470031", "#f1f1f1"];
	var colors_l = ["#470031", "#111111"];
	var colors_r_h = ["#f1f1f1", "#111111"];
	var colors_l_h = ["#111111", "#f1f1f1"];
	var sectionIndex = 0;

	$("a:nth-child(2)").css("color", colors_l_h[sectionIndex]);
	$("a:nth-child(3)").css("color", colors_l_h[sectionIndex]);

	$(window).on('scroll', function() {
		var currentScrollPos = $(this).scrollTop();

		if(currentScrollPos > initialScrollPos) {
			if($(window).scrollTop() >= (heightOfViewport)*(sectionIndex+1)) {
				sectionIndex += 1;
				$(".right").css("background-color", colors_r[sectionIndex]);
				$(".left").css("background-color", colors_l[sectionIndex]);
				$("a:nth-child(2)").css("color", colors_l_h[sectionIndex]);
				$("a:nth-child(3)").css("color", colors_l_h[sectionIndex]);
				$("a:nth-child(4)").css("color", colors_r_h[sectionIndex]);
				$("a:nth-child(5)").css("color", colors_r_h[sectionIndex]);
				$(".indie").css("color", colors_l[sectionIndex]);
				$(".hip_hop").css("color", colors_r[sectionIndex]);

				console.log(sectionIndex);
			} 
		} else {
			if($(window).scrollTop() <= heightOfViewport*(sectionIndex)) {
				sectionIndex -= 1;
				$(".right").css("background-color", colors_r[sectionIndex]);
				$(".left").css("background-color", colors_l[sectionIndex]);
				$("a:nth-child(2)").css("color", colors_l_h[sectionIndex]);
				$("a:nth-child(3)").css("color", colors_l_h[sectionIndex]);
				$("a:nth-child(4)").css("color", colors_r_h[sectionIndex]);
				$("a:nth-child(5)").css("color", colors_r_h[sectionIndex]);

			}
		}
		initialScrollPos = currentScrollPos;
	})

});
