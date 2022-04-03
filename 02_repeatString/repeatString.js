const repeatString = function(string,number) {
let fatAlbert = '';
if(number < 0){
fatAlbert = 'ERROR';
} else {
for(let i = 0; i < number ; i++){
      fatAlbert += string;
  }
}
return fatAlbert;
};

// Do not edit below this line
module.exports = repeatString;
