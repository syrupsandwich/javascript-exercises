const palindromes = function (phrase) {
  let string = phrase.toLowerCase();
  let filteredString = '';
  let stringInReverse = '';
  for(let i = 0; i <= string.length ; i++) {
    if(string.substr(i, 1) == ' '
    || string.substr(i, 1) == '!'
    || string.substr(i, 1) == ','
    || string.substr(i, 1) == '.') {
      continue;
    } else {
    filteredString += string.substr(i, 1);
    }
  }
  for(let i = 1; i <= filteredString.length ; i++) {
    stringInReverse += filteredString.substr(i * -1, 1);
    }
  return (filteredString == stringInReverse ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
