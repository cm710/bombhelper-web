var selectedColor = "none";
var selectedText = "none";
var selectedLabel = "none";
var carLabel = "none"
var frkLabel = "none"
var selectedBatteries = "none";

var optionSelected = function(optionId)
{
	var splitLabel = optionId.split('-');

	switch(splitLabel[0])
	{
    	case 'color':
        	selectColor(splitLabel[1]);
        	break;
    	case 'text':
        	selectText(splitLabel[1]);
        	break;
    	case 'batteries':
        	selectBatteries(splitLabel[1]);
        	break;
        default:
        	selectLabel(splitLabel[1]);

	}
}

var selectColor = function(color)
{
	var element = document.getElementById("color-" + selectedColor);
	
	if(element != null)
	{
		element.className = "";
	}

	selectedColor = color;
	document.getElementById("color-" + color).className = "bomb-helper-selected";
}

var selectText = function(text)
{
	var element = document.getElementById("text-" + selectedText);

	if(element != null)
	{
		element.className = "";
	}

	selectedText = text;
	document.getElementById("text-" + text).className = "bomb-helper-selected";
}

var selectBatteries = function(batteries)
{
	var element = document.getElementById("batteries-" + selectedBatteries);

	if(element != null)
	{
		element.className = "";
	}

	selectedBatteries = batteries;
	document.getElementById("batteries-" + batteries).className = "bomb-helper-selected";
}

var selectLabel = function(label)
{
	if(label == "blank"){
		carLabel = "false";
		frkLabel = "false";
	}
	
	if(label == "car"){
		if(carLabel != "true"){
			carLabel = "true";
		} else {
			carLabel = "false";
		}
		
	}
	
	if(label = "frk"){
		if(frkLabel != "true"){
			frkLabel = "true";
		} else {
			frklabel = "false";
		}
		
	}
}

/*var selectLabel = function(label)
{
	var element = document.getElementById("label-" + selectedLabel);

	if(element != null)
	{
		element.className = "";
	}

	selectedLabel = label;
	document.getElementById("label-" + label).className = "bomb-helper-selected";
}*/

$(document).ready(function(){
	var tapanswer = "<h2>Press and immediately release the button</h2>"
	var holdanswer = '<h2>Press and HOLD the button<br> If the label is <font color="blue">BLUE</font> release when there is a 4 on the counter<br> If the label is <font color="yellow">YELLOW</font> release when there is a 5 on the counter<br> Otherwise release when there is a 1 on the counter</h2>'
	var batteryhint = '<h2>Check number of batteries</h2>'
	var carhint = '<h2>Check if there is a lit indicator with <b>CAR</b> on it</h2>'
	var frkhint = '<h2>Check for a <b>FRK</b> label on the side and for the number of batteries</h2>'
	
	$(".puzzle-info").click(function(){
		var answerfound = false;
		
		//$("#answer").html("Var: "+selectedLabel);
		
		if(answerfound == false && selectedColor == "blue" && selectedText == "abort"){
			$("#answer").html(holdanswer); 
			answerfound = true;
		}
		
		if(answerfound == false && selectedText == "detonate" ){
			if(selectedBatteries == "none"){
				$("#answer").html(batteryhint);
				answerfound = "true";
			}
			if(selectedBatteries >1){
				$("#answer").html(tapanswer);
				answerfound = "true";
			}	
		}
		
		if(answerfound == false && selectedColor == "white" && selectedText != "none"){
			if(selectedLabel == "none"){
				$("#answer").html(carhint);
				answerfound = "true";
			}
			if(carLabel == "true"){
				$("#answer").html(holdanswer);
				answerfound = "true";
			}
			
		}
		
		if(answerfound == false && selectedColor != "none" && selectedText != "none"){
			if((frkLabel == "none" && selectedBatteries > 2) || (frkLabel != "false" && selectedBatteries == "none")){
				$("#answer").html(frkhint);
				answerfound = true;
			}
		}
		
		if(answerfound == false && selectedBatteries > 2 && frkLabel == "true"){
			$("#answer").html(tapanswer);
			answerfound = "true";
		}
		
		if(selectedColor != "none" && selectedText != "none" && answerfound == false){
			$("#answer").html(holdanswer);
		}
		
		//$("#debug").html(selectedColor+" "+selectedText+" "+selectedBatteries+" car="+carLabel+" frk="+frkLabel);
	});
});

/*$(document).ready(function(){
	var tapanswer = "<h2>Press and immediately release the button</h2>"
	var holdanswer = '<h2>Press and HOLD the button<br> If the label is <font color="blue">BLUE</font> release when there is a 4 on the counter<br> If the label is <font color="yellow">YELLOW</font> release when there is a 5 on the counter<br> Otherwise release when there is a 1 on the counter</h2>'
	var batteryhint = '<h2>Check number of batteries</h2>'
	var carhint = '<h2>Check if there is a lit indicator with <b>CAR</b> on it</h2>'
	var frkhint = '<h2>Check for a <b>FRK</b> label on the side and for the number of batteries</h2>'
	
	var colour = "none";
	var text = "none";
	var car = "none";
	var frk = "none";
	var batteries = -1;
	
	$(".batteries").hide();
	$("#frklabel").hide();
	$("#carlabel").hide();
	$("input:radio[name=COLOUR]").click(function(){
		colour = $(this).val();
		$("input:radio[name=batteries]").removeAttr("checked");
		$("input:checkbox[name=HAZMO]").removeAttr("checked");
		
		car = "none";
		frk = "none";
		batteries = -1;
	});
	
	$("input:radio[name=TEXT]").click(function(){
		text = $(this).val();
		$("input:radio[name=batteries]").removeAttr("checked");
		$("input:checkbox[name=HAZMO]").removeAttr("checked");
		
		car = "none";
		frk = "none";
		batteries = -1;
	});
	
	$("input:radio[name=batteries]").click(function(){
		switch ($(this).val()) {
			case "zero":
				batteries = 0;
				break;
			case "one":
				batteries = 1;
				break;
			case "two":
				batteries = 2;
				break;
			case "many":
				batteries = 3;
				break;
			case "other":
				batteries = -1;
				break;
		}
	});
	
	$("#carcheckbox").click(function(){
		if(this.checked){
			car = "true";
		} else {
			car = "false";
		}
	}
	);
	
	$("#frkcheckbox").click(function(){
		if(this.checked){
			frk = "true";
		} else {
			frk = "false";
		}
	}
	);
	
	
	
	$(".detail").click(function(){
		var answerfound = "false";
		if(answerfound == "false" && colour == "blue" && text == "abort"){
			$("#answer").html(holdanswer); 
			answerfound = "true";
		}
		
		if(answerfound == "false" && colour == "red" && text == "hold"){
			$("#answer").html(tapanswer); 
			answerfound = "true";
		}
		
		if(answerfound == "false" && text == "detonate"){
			if(batteries === -1){
				$("#answer").html(batteryhint);
				$(".batteries").show();
				answerfound=true;
			}
			if(batteries > 1){
				$("#answer").html(tapanswer);
				answerfound = "true";
				
			}
		} else {
			$(".batteries").hide();
		}
		
		if(answerfound == "false" && colour == "white" && text != "none"){
			$("#carlabel").show();
			if(car == "none"){
				$("#answer").html(carhint);
				answerfound = "true";
			}
			if(car == "true"){
				$("#answer").html(holdanswer);
				answerfound = "true";
			}
		} else{
			$("#carlabel").hide();
		}
		
		
		
		if(answerfound == "false" && colour != "none" && text != "none"){
			$(".batteries").show();
			$("#frklabel").show();
			if((frk == "none" && batteries > 2)|| (frk != "false" && batteries < 0)){
				$("#answer").html(frkhint);
				answerfound = true;
			}
			
		} else {
			$("#frklabel").hide();
		}
		
		if(answerfound == "false" && batteries>2 && frk == "true"){
			$("#answer").html(tapanswer);
			answerfound = "true";
		}
		
		if(colour != "none" && text != "none" && answerfound == "false"){
			$("#answer").html(holdanswer);
			$("#frklabel").hide();
			$("#carlabel").hide();
			$(".batteries").hide();
		}
		
		//$("#debug").html(colour+" "+text+" "+batteries+" frk="+frk);
	}
	);
	
}

);


*/