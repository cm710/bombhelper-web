var selectedColor = "none";
var selectedText = "none";
var selectedLabel = "none";
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
	var element = document.getElementById("label-" + selectedLabel);

	if(element != null)
	{
		element.className = "";
	}

	selectedLabel = label;
	document.getElementById("label-" + label).className = "bomb-helper-selected";
}