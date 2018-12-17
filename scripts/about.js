$(document).ready(function(){

	var myText = "Harry W. Lopez III is a singer/songwriter from East New York, Brooklyn. He is known on stage by his alter-ego Haku Leaf, the title of his solo project. His stage presence as Haku Leaf is imbued with energy and passion that spills onto his audience during concerts. His solo work takes form as a diverse and abstract form of music that displays his musical roots from hip hop and funk to rock & roll and Caribbean soul. He is currently working on his first album as a solo artist titled Of the Virgo, scheduled to debut in 2019.";
	var newp = myText.substring(0, 5);

	console.log(myText);
	console.log(myText.length);
	console.log(newp);
	
	function addSubstring(i){
		var newSub = (myText.substring(i, i+1));
		var currentString = [];
		currentString[i] = newSub;
		console.log(currentString[i]);
			setTimeout(function(){
				$(".bio").append("<span class='" + i + "'>" + currentString[i] + "</span>");
				$("." + i +"").hide().fadeIn(1000);
			},3*i);
	}


	$(".title").hide()
	setTimeout(function(){
		$(".title").fadeIn(1500);
	},400);


	setTimeout(function(){
		for (var i = 0; i < myText.length; i+=1)
		{
			addSubstring(i);
		}
	},600);
	

});