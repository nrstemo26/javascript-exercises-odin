const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  const sumReducer = (prev, curr) => prev + curr;

	return arr.reduce(sumReducer, 0)

};

const multiply = function(arr) {
  const multReducer = (prev, curr) => prev * curr;

  return arr.reduce(multReducer, 1)
};

const power = function(num, exp) {
  return Math.pow(num, exp);
	
};

const factorial = function(x) {
  if(x == 1 || x == 0){
    return 1;
  }
  else{
    return x * factorial(x-1);
  }
	
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
