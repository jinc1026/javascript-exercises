const reverseString = function(inputString) {
	var completedString="";
	
	for (var i=inputString.length; i>=0; i--){
		completedString += inputString.charAt(i);
	}
	
	return completedString;
};

module.exports = reverseString;
