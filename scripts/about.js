$(document).ready(function(){

	var myText = "Lorem ipsum dolor sit amet, postea impetus erroribus eu sea, no etiam fastidii maluisset mea. Ea cum suas mundi iudico, vim ea ferri summo detraxit, idque ullamcorper no pro. Mel te detraxit prodesset, te vis alii suavitate dissentiet. Inani mundi fabellas est ex. Cu utinam dolore graece eum, an prima facer mel. Ne hinc illud nihil vis, cum ad insolens abhorreant. Senserit definitionem ex vim, duo an voluptua tractatos efficiantur. Per in habeo atomorum adversarium.";
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
	},1000);

	


		

		


	

});