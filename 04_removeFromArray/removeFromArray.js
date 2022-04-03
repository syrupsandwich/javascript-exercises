const removeFromArray = function(numbers, target) {
  let array = [];

    for(let i = 0; i < numbers.length ; i++) {
        if (target === numbers[i]){
          continue;
        } else {
        array.push(numbers[i]);
        }
      }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
