const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	let sumTotal = 0;
	a.forEach(item => sumTotal+=item);
	return sumTotal;
};

const multiply = function(a) {
	let multiplyTotal = 1;
	if (a === []){
		return 0;
	}
	a.forEach(item => multiplyTotal *= item);
	return multiplyTotal;
};

const power = function(a, b) {
	let powerTotal = 1;
	for (let i=0; i<b; i++){
		powerTotal *=a;
	}
	return powerTotal;
};

const factorial = function(a) {
	let factorialTotal = 1;
	while (a>0){
		factorialTotal *= a;
		a -= 1;
	}
	return factorialTotal;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
