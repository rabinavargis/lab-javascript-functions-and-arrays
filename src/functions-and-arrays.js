const { chartreuse } = require("color-name");
const { count } = require("console");

// Progression #1: Greatest of the two numbers
var x = 10; var y= 20;
greatestOfTwoNumbers = () => {
  if( x >  y){
    return x;
  }
  else
  return y;

}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  var lngth = 0;
  var longest;
  for(var i=0; i < words.length ; i++){
    if(words[i].length > lngth){
      var lngth = words[i].length;
      longest = words[i];
    }
  }
}
console.log(longest);
findScaryWord();

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(){
  if(numbers.length === 0){
    return 0;
  }
  else if(numbers.length === 1){
    return numbers;
  }
  else{
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
      total += numbers[i];
    }
  }
  return total;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
midPointOfLevels = () => {
  if(numbersAvg.length === 0){
    return null;
  }
  else{
    var avg; var total = 0;
    for(var i in numbersAvg){
      total += numbersAvg[i];
    }
    avg = total/numbersAvg.length;
  }
  return avg;
}
midPointOfLevels();

/* const midPointOfLevel = numbersAvg => numbersAvg.reduce((a,b) => a + b, 0)/numbersAvg.length */

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
 averageWordLength = () => {
   var total = 0; var avg;
   for(var i =0; i < wordsArr.length; i++){
    total += wordsArr[i].length;
   }
   avg = total/wordsArr.length;
 } 
 averageWordLength()

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
uniquifyArray = () => {
  let uniquechar = wordsUnique.filter((c,index) => {
    return chartreuse.indexOf(c) === index;
  });
  console.log(uniquechar)
} 
uniquifyArray();

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
searchElement = () => {
  wordsCount.sort();
  var current = null;
  var count = 0;
  for(var i = 0; i < wordsCount.length; i++){
    if(wordsCount[i]!=current){
      if(count > 0) {
        return (current+ 'comes' + count + 'tmes<br>');
      }
      current = wordsCount[i];
      count =1;
    }
    else {
      count++;
    }
  }
  if(count>0){
    return (current+ 'comes' + count + 'tmes<br>')
  }
}
count();
searchElement();

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
