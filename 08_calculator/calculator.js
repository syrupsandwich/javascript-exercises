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

const multiply = function(num) {
  let product = 1;
  for(let i = 0 ; i < num.length ; i++) {
    product *= num[i];
  }
  return product;
};
const power = function(a, b) {
 	let product = a;
	for(let i = 1 ; i < b ; i++) {
 	  product *= a;
 	}
 	return product;
};

const factorial = function(num) {
	let product = num + 1;
 	for(let i = 0 ; i < num ; i++) {
 	  product *= (num - i);
  	}
 	return product / (num + 1);
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
