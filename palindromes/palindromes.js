const palindromes = function (phrase) {
	let revised = '';
	for (let i=0; i<phrase.length ;i++){
		if (phrase.charAt(i) !== ' ' && phrase.charAt(i) !== '?' 
			 && phrase.charAt(i) !== '!' && phrase.charAt(i) !== ','
			&& phrase.charAt(i) !== '.') {
			revised = revised.concat(phrase.charAt(i));
		}
	}
	revised = revised.toLowerCase();
	
	let reversed = '';
	for (let j=revised.length-1; j>=0 ; j--){
		reversed = reversed.concat(revised.charAt(j));
	}
	
	return (revised === reversed);
};

module.exports = palindromes;
