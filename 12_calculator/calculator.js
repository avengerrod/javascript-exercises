const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((acc, num) => acc + num, 0);
};

const multiply = function(a) {
	return a.reduce((product, num) => product * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  }
  return a * factorial(a - 1);
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
