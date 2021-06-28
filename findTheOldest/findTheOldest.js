const findTheOldest = function(people) {
	const sortedPeople = people.sort(function(personA,personB){
		//check if yearOfDeath is undefined
		const currentYear = new Date().getFullYear();
		let ageOfPersonA;
		let ageOfPersonB;
		if (personA["yearOfDeath"] === undefined){
			ageOfPersonA = currentYear - personA.yearOfBirth;
		} else {
			ageOfPersonA = personA.yearOfDeath - personA.yearOfBirth;
		}
		
		if (personB["yearOfDeath"] === undefined){
			ageOfPersonB = currentYear - personB.yearOfBirth;
		} else {
			ageOfPersonB = personB.yearOfDeath - personB.yearOfBirth;
		}
		
		
		if (ageOfPersonA > ageOfPersonB){
			return -1;
		} else {
			return 1;
		}
	});
	
	return sortedPeople[0];
};

module.exports = findTheOldest;
