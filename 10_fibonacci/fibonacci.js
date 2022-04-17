const fibonacci = function(num) {
  if(num < 0) {
    return 'OOPS';
  }
  let firstNum = 0;
  let secondNum = 1;
  let result = 0;
  for(let i = 1; i < num ; i++) {
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }
return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
