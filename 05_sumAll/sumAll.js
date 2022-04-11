const sumAll = function(num1, num2) {
  if(num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if(num1 + 1 !== +num1 + 1 || num2 + 1 !== +num2 + 1) {
    return "ERROR";
  } else if(num1 < num2) {
    sum = num1;
    end = num2;
  } else {
    sum = num2;
    end = num1;
  }
  for(let i = (sum + 1) ; i <= end ; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
