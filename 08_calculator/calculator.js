const add = function(...num) {
	let sum = 0;
	for(let i = 0 ; i < num.length ; i++) {
	  sum += num[i];
	}
	return sum;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(num) {
	let total = 0;
	for(let i = 0 ; i < num.length ; i++) {
	  total += num[i];
	}
	return total;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
