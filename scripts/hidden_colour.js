$(document).ready(function(){

	var icons = [];
	for (var i = 0; i < 6; i++)
	{
		icons[i] = $(".icon:eq(" + i + ")");
		icons[i].hide();
		fade(i);
	}

	function fade(i){
		setTimeout(function(){
			setTimeout(function(){
				icons[i].fadeIn(1000);
			},100*i);
		},800)
	}

	setTimeout(function(){
		$("#picture").fadeIn(1000);
	},300);

	setTimeout(function(){
		$("iframe").fadeIn(1000);
	},1300);

	setTimeout(function(){
		$(".about").fadeIn(1000);
	},1600);

});