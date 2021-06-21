const repeatString = function(inputString, iteration) {

	let completedString="";
	
	if (iteration < 0){
		return 'ERROR'
	} else {
		for (let i=0; i<iteration; i++){
			completedString = completedString.concat(inputString);
		}
	}
	
	return completedString;
};

module.exports = repeatString;
