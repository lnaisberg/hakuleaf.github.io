$(document).ready(function(){

	var icons = [];
	for (var i = 0; i < 6; i++){
		icons[i] = $(".icon:eq(" + i + ")");
		icons[i].hide();
		fade(i);
	}

	function fade(i){
		setTimeout(function(){
			icons[i].hide().fadeIn(1000);
		},500*i);
	}

	console.log(icons[2]);

});