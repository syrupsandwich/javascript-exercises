const reverseString = function(string) {
  let stringInReverse = '';
  let newString = string;
  for(let i = string.length; i > -1 ; i--) {
    stringInReverse += newString.slice(-1);
    newString = string.slice(0, i - 1);
  }
  return stringInReverse;
};

// Do not edit below this line
module.exports = reverseString;
