const removeFromArray = function(numbers, ...target) {
  let array = numbers;
  let tempArray = [];

  for(let n = 0; n < target.length ; n++) {

    for(let i = 0; i < array.length ; i++) {
        if (target[n] === array[i]) {
          continue;
        } else {
        tempArray.push(array[i]);
        }
    }
      array = tempArray;
      tempArray = [];

  }
  return array;

};
// Do not edit below this line
module.exports = removeFromArray;
