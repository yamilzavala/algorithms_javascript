//########### 1 - reverse string
function getReverseString_1(str) {
  return str.split("").reverse().join("");
}

function getReverseString_2(str) {
  let strReverse = ""; //Option 2
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse;
}
//console.log(getReverseString('Hello'))

//########### 2 - factorialize
function factorialize(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
//console.log(factorialize(5))

//########### 3 - Palindrome
function palindrome(str) {
  let reg = /[\W_]/g;
  let onlyAlphaNumeric = str.toLowerCase().replace(reg, "");
  let strReverse = onlyAlphaNumeric.split("").reverse().join("");
  if (str === strReverse) return true;
  return false;
}

function palindrome_2(str) {
  let reg = /[^a-z0-9]/gi;
  let onlyAlphaNumeric = str.toLowerCase().replace(reg, "");
  console.log(onlyAlphaNumeric);
  let strReverse = onlyAlphaNumeric.split("").reverse().join("");
  if (onlyAlphaNumeric === strReverse) return true;
  return false;
}
//console.log(palindrome('eye'))

//########### 4 - longest word
function longestWord(str) {
  return str
    .split(" ")
    .reduce((a, b) => (a.length > b.length ? a.length : b.length), 0); //Option 3
}

function longestWord_2(str) {
  let words = str.split(" "); //Option 1
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest.length;
}

function longestWord_3(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0].length; //Option 2
}
//console.log(longestWord('first second third fourth'));

//########### 5 - Titlecase
function titleCase_1(str) {
  let words = str.toLowerCase().split(" "); //option 1
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

function titleCase_2(str) {
  return str //option 2
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(titleCase('the liFe iS cUtE'));

//########### 6 -Largest Numbers in Arrays
function getMax(array) {
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) max = array[index];
  }
  return max;
}

function largestNumber_1(num) {
  let result = []; //option 3
  for (let i = 0; i < num.length; i++) {
    result.push(getMax(num[i]));
  }
  return result;
}

function largestNumber_2(num) {
  return num.map((item) => item.sort((a, b) => b - a)[0]); //option 1
}

function largestNumber_3(num) {
  return num.map((item) =>
    item.reduce((a, b) => (a > b ? a : a === b ? a : b), 0)
  ); //option 2
}
// console.log(largestNumber_1([[5,10,2,5,7,50], [100, 150]]));

//########### 7 - Confirm the Ending
function confirmEnd(str, txt) {
  return str.endsWith(txt);
}

function confirmEnd_2(str, txt) {
  return str.substr(-txt.length) === txt;
}

function confirmEnd_3(str, txt) {
  return str.slice(-txt.length) === txt;
}
// console.log(confirmEnd_3('hello', 'llo'));

//########### 8 - Repeat String Num Times
function repeatStr(str, num) {
  let result = "";
  if (num > 0) {
    for (let index = 0; index < num; index++) {
      result += ` ${str}`;
    }
  }
  return result;
}

function repeatStr_2(str, num) {
  return str.repeat(num);
}

function repeatStrRecursive(str, num) {
  let result = "";
  if (num < 0) return "";
  if (num === 1) return str;
  return str + repeatStrRecursive(str, num - 1);
}
// console.log(repeatStrRecursive('hi',3));

//########### 9 - Truncate a String
function truncateString(str, num) {
  if (str.length > num) return str.slice(0, num) + "...";
  return str;
}

//########### 10 - Chunky Monkey
function chunky(arr, size) {
  let auxarr = [];
  for (let index = 0; index < arr.length; index = index + size) {
    auxarr.push(arr.slice(index, size + index));
  }
  return auxarr;
}

function chunky_2(arr, size) {
  let auxarr = [];
  while (arr.length > 0) {
    auxarr.push(arr.splice(0, size));
  }
  return auxarr;
}
// console.log(chunky_2([1,2,3,4],2));

//########### 11 - Slasher
function slasher(arr, size) {
  return arr.splice(size, arr.length);
}

function slasher(arr, size) {
  return arr.slice(size, arr.length);
}
// console.log(slasher([1, 2, 3, 4],1));

//########### 12 - mutation
function mutation(arr, characters) {
  let aux = [];
  characters
    .toLowerCase()
    .split("")
    .map((character) =>
      arr.toLowerCase().includes(character)
        ? aux.push("true")
        : aux.push("false")
    );
  return aux.every((item) => item == "true");
}

function mutation_2(arr) {
  let first = arr[0].toLowerCase();
  let last = arr[1].toLowerCase();
  for (let character of last) {
    if (first.indexOf(character) == -1) return false;
  }
  return true;
}

function mutation_3(arr) {
  let first = arr[0].toLowerCase();
  let last = arr[1].toLowerCase();
  for (let character of last) {
    if (!first.includes(character)) return false;
  }
  return true;
}
// console.log(mutation_3(['hello', 'he']));

//########### 13 - Falsy
function falsy(arr) {
  return arr.filter((item) => item);
}

function falsy_2(arr) {
  let aux = [];
  for (let item of arr) {
    if (item) aux.push(item);
  }
  return aux;
}
// console.log(falsy_2(['',0,undefined,NaN,false,1,'a',true]));

//########### 14- Seek and Destroy
function destroy(arr) {
  let args = Array.from(arguments).slice(1);
  let aux = [];
  for (let item of arr) {
    if (args.indexOf(item) === -1) aux.push(item);
  }
  return aux;
}

function destroy_2(arr) {
  let args = Array.from(arguments).slice(1);
  let aux = [];
  for (let item of arr) {
    if (!args.includes(item)) aux.push(item);
  }
  return aux;
}

function destroy_3(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter((item) => !args.includes(item));
}
// console.log(destroy_3([1,2,3,4],1,2));

//########### 15 - Where do I belong
function belong(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) return i;
  }
  return arr.length;
}
// console.log(belong([40,45,20],21));

//########### 16 - Caesars cipher
function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let codeLetter = str[i].charCodeAt();
    if (codeLetter >= 65 && codeLetter <= 77) {
      result += String.fromCharCode(codeLetter + 13);
    } else if (codeLetter >= 78 && codeLetter <= 90) {
      result += String.fromCharCode(codeLetter - 13);
    } else {
      result += str[i];
    }
  }
  return result;
}
// console.log(rot13('SERR PBQR PNZC'));

//########### 17 - sum all
function sumAll(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr[1]; i++) {
    if (i > arr[0] && i < arr[1]) {
      result.push(i);
    }
  }
  return arr.concat(result).sort((a, b) => a - b);
}

function sumAll_2(arr) {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
}
// console.log(sumAll_2([4, 1]));

//########### 18 - diff array
function diffArray(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index++) {
    if (arr2.indexOf(arr1[index]) === -1) result.push(arr1[index]);
  }
  for (let index = 0; index < arr2.length; index++) {
    if (arr1.indexOf(arr2[index]) === -1) result.push(arr2[index]);
  }
  return result;
}

function diffArray_2(arr1, arr2) {
  let joinarrays = arr1.concat(arr2);
  return joinarrays.filter((current) => {
    return arr1.indexOf(current) === -1 || arr2.indexOf(current) === -1;
  });
}
// console.log(diffArray_2([1, 2, 3, 5], [1, 2, 3, 5, 10, 4, 7]));

//########### 19 - Roman Numeral
function convertToRoman(num) {
  let result = "";
  const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XV: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let key in romanNumList) {
    while (num >= romanNumList[key]) {
      result += key;
      num -= romanNumList[key];
    }
  }
  return result;
}
// console.log(convertToRoman(15));

//########### 20 - Replace
function replaceWords(str, before, after) {
  return before.charAt(0) === before.charAt(0).toUpperCase()
    ? str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))
    : before.charAt(0) === before.charAt(0).toLowerCase()
    ? str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
    : str.replace(before, after);
}

function replaceWords_2(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
  } else if (before.charAt(0) === before.charAt(0).toLowerCase()) {
    str = str.replace(before, after.charAt(0).toLowerCase() + after.slice(1));
  } else {
    str = str.replace(before, after);
  }
  return str;
}
// console.log(replaceWords_2("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));

//########### 21 - Missing letters
function fearNotLetter(str) {
  let first = str.charCodeAt(0);
  let end = str.charCodeAt(str.length - 1);
  for (let i = first; i <= end; i++) {
    let letter = String.fromCharCode(i);
    let strLetter = str[i - first];
    if (letter !== strLetter) return letter;
  }
  return undefined;
}
// console.log(fearNotLetter("abce"));

//########### 22 - DNA pairing
function DNAPair(str) {
  let pair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return str.split("").map((letter) => {
    return [letter, pair[letter]];
  });
}
// console.log(DNAPair("GCG"));

//########### 23 - spinal Case
function spinalCase(str) {
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let regex = /[\s_]+/g;
  return newStr.split(regex).join("-").toLowerCase();
}
// console.log(spinalCase('thisIsSpinalTap'));

//########### 24 - Pin latin
function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let cluster = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.some((v) => v === str[i])) {
      break;
    } else {
      cluster += str[i];
    }
  }

  if (!cluster.length) {
    return str + "way";
  } else {
    return str.slice(cluster.length) + cluster + "ay";
  }
}
// console.log(translatePigLatin("dover"));

//########### 25 - Sorted Union
function uniteUnique(arr) {
  let uniqueArr = [];
  let flatArray = Array.from(arguments).reduce(
    (acc, curr) => acc.concat(curr),
    []
  );
  flatArray.map((item) => {
    if (!uniqueArr.includes(item)) uniqueArr.push(item);
  });
  return uniqueArr;
}
//   console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//########### 26 - converting in HTML code
function convertHTML(str) {
  let entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let arrStr = str.split("").map((letter) => {
    if (entities.hasOwnProperty(letter)) {
      return entities[letter];
    } else {
      return letter;
    }
  });
  return arrStr.join("");
}
//   console.log(convertHTML('Stuff in "quotation marks"'));

//########### 27 - Fibonacci
function sumFibs(num) {
  if (num < 0) return 0;
  let fibArr = [1, 1];
  let nextFib = 0;

  while ((nextFib = fibArr[0] + fibArr[1]) <= num) {
    fibArr.unshift(nextFib);
  }

  return fibArr.reduce((acc, curr) => {
    if (curr % 2 != 0) return acc + curr;
    return acc;
  }, 0);
}
// console.log(sumFibs(75024));

//########### 28 - Prime
function isPrime(num) {
  if (num == 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
// console.log(sumPrimes(10));

//########### 29 -  dropElements
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length + 1);
}
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5; }));

//########### 30 -  nested arrays
function steamrollArray(arr) {
  return arr.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(steamrollArray(b));
    }
    return a.concat(b);
  }, []);
}
//   console.log(steamrollArray([[["a"]], [["b"]]]));

//########### 31 -  Binary agent
function binaryAgent(str) {
  return str
    .split(" ")
    .map((item) => String.fromCharCode(parseInt(item, 2)))
    .join("");
}
// console.log(
//   binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   )
// );

//########### 32 - Everithing be true
function truthCheck(collection, pre) {
  return collection.every((obj) => {
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);
  });
}
// console.log(
//   truthCheck(
//     [
//       { user: "Tinky-Winky", sex: "male", age: 0 },
//       { user: "Dipsy", sex: "male", age: 3 },
//       { user: "Laa-Laa", sex: "female", age: 5 },
//       { user: "Po", sex: "female", age: 4 },
//     ],
//     "age"
//   )
// );

//########### 33 - Call itself and return a function
function addTogether() {
  let args = [...arguments];
  console.log(args);
  if (args.some((item) => typeof item !== "number")) {
    return undefined;
  } else if (args.length == 1) {
    return (x) => addTogether(args[0], x);
  } else {
    return args[0] + args[1];
  }
}
//addTogether(2, 3);

//########### 34 - Building a person - get and set
var Person = function (firstAndLast) {
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };

  this.setFirstName = function (first) {
    firstAndLast = first + " " + this.getLastName();
  };
  this.setLastName = function (last) {
    firstAndLast = this.getFirstName() + " " + last;
  };
  this.setFullName = function (fullname) {
    firstAndLast = fullname;
  };
};
let bob = new Person("Yamil Zavala");

//########### 35 - Orbital period
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map((elem) => {
    elem.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + elem.avgAlt, 3) / GM)
    );
    delete elem.avgAlt;
    return elem;
  });
}
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//########### 36 - Even or Odd
function everOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
// console.log(everOrOdd(23));

//########### 37 - Count vowel
function countVowel(str) {
  let countVowels = [];
  let vowels = ["a", "e", "i", "o", "u"];
  str
    .toLowerCase()
    .replace(" ", "")
    .split("")
    .map((letter) => {
      return typeof letter == "string" && vowels.includes(letter)
        ? countVowels.push(true)
        : countVowels.push(false);
    });
  return countVowels;
}
// console.log(countVowel('lA eUo 4I'));

//########### 38 - Is n divisible by x and y?
function isDivideBy(n, x, y) {
  return n > 0 && n >= x && n >= y && (n / x) % 1 == 0 && (n / y) % 1 == 0
    ? true
    : false;
}
// console.log(isDivideBy(6,3,6));

//########### 39
function makeNegative(num) {
  return -Math.abs(num); //absolute num value
}

//########### 40
function findSmallestInt(args) {
  return Math.min(...args);
}

function findSmallestInt_Reduce(args) {
  let array = [...args];
  return array.reduce((a,b) => {
      return b < a ? b : a
  } ,array[0])
}

function findSmallestInt_Loop(args) {
    let array = [...args];
    let min = array[0];
    console.log(min);
    for(let i = 0; i < array.length; i++) { 
       if(min > array [i]) min =  array [i];
    }
    return min;
  }
// console.log(findSmallestInt_Loop([78, 56, 232, 12, 8]));

//########### 41 - summation
var summation = function (num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
//   console.log(summation(8))


//########### 42 - average (avg)
function average (arr) {
    let array = [...arr];
    return Math.floor(array.reduce((a,b) => a + b, 0) / array.length);
}
// console.log(average([5,6,8]));

//########### 43 - piedra papel o tijera
const rps = (p1, p2) => {
    let rules = {
      'rock': 'scissors',
      'paper': 'rock',
      'scissors': 'paper'
    }
    if(p2 === p1) return 'Draw';
    if(p2 === rules[p1]) {
        return 'Player 1 won'
    } else {
        return 'Player 2 won'
    }
  };

  const rps_2 = (p1, p2) => {
    if(p1 === p2) return 'Draw';
    if((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')) {
        return 'Player 1 won'
    } else {
        return 'Player 2 won'
    }
  };
// console.log(rps_2('scissors','scissors'));  

//########### 44 - removw
function removeChar(str){
  return str.split('').slice(1,str.length-1).join('');  
}

function removeChar_slice(str){
  return str.slice(1,-1) 
}

function removeChar_2(str){
  return str.substr(1,str.length-2);  
};
// console.log(removeChar_slice('hola'));

//########### 45 - sum all positives
function sumAllPositives(arr) {
  return arr.filter(item => item > 0).reduce((a,b) => a + b,0)
}
// console.log(sumAllPositives([1,-2,3,4,5]));

//########### 46 operations
const operations = (operator, val1, val2) => { 
  return eval(`${val1} ${operator} ${val2}`) ;
}
// console.log(operations('+', 2, 3));


//########### 47 repeat string
const repetatStr = (str, num) => {
  let repeat = '';
  for (let i = 0; i < num; i++) { 
    repeat += str;
  }
  return repeat;
}

const repetatStr_r = (str, num) => {
  return str.repeat(num);
}
// console.log(repetatStr_r('hi',3));

//########### 48 remove spaces
const removeSpaces = (str) => {
  return str.replace(/\s/g, '')
}
// console.log(removeSpaces('Hola yam il'));

//########### 49 double
const double = (arr) => {
  return arr.map( item => item * 2)
}
// console.log(double([1,2,3]));

//########### 50 bullet by dragon
const bulletByDragon = (bullets, dragons) => bullets / dragons >= 2;
// console.log(bulletByDragon(3,2));

//########### 51 sumArrays
const sumArrs = (arr1, arr2) => {
  return arr1.reduce((a,b) => a + b, 0) + arr2.reduce((a,b) => a + b, 0)
}

const sumArrs_2 = (arr1, arr2) => {
  return arr1.concat(arr2).reduce((a,b) => a + b, 0)
}
// console.log(sumArrs_2([1,2,3], [4,1]));

//########### 52 century
function geyCenturyByYear(year) {
  return Math.ceil(year/100)
}
// console.log(geyCenturyByYear(2021));

//########### 53 agePets
function catAndDogYears (humanYears) {
  let petyears = {1: 15, 2: 9, 3: 4}
  if(typeof humanYears !== 'number') return 'Invalid years';
  if(humanYears == 1) {
    return [humanYears, petyears[1], petyears[1]]
  } else if(humanYears > 1 && humanYears < 3) {
    return [humanYears, petyears[2], petyears[2]]
  } else {
    return [humanYears, humanYears * petyears[3], humanYears * petyears[3] + 1]
  }
}
// console.log(catAndDogYears(3));

//########### 54 scoreTeams
function chanpionshipScore(arr) {
  let points = 0;
  arr.map(item => {
    let x = item.split(':')[0];
    let y = item.split(':')[1];    
    return x > y ? points += 3 : x === y ? points += 1 : points += 0
  });
  return points;
}
// console.log(chanpionshipScore(['6:4','5:5','6:4','5:5']))

//########### 55 object unique values
const products = [
  {title: 'iphone_1', company: 'apple'},
  {title: 'iphone_2', company: 'apple'},
  {title: 'iphone_2', company: 'apple'},
  {title: 'galaxy', company: 'samsung'},
  {title: 'galaxy_2', company: 'samsung'}
]

function findUniqueValuesByCompany() {
  return [...new Set(products.map(item => item.company))];
}

function findUniqueValues() {
  return [...products.reduce((a,c) => {
    return a.add(c.company)
  }, new Set())];
}
// console.log(findUniqueValuesByCompany());

//########### 56 Unique values
const findUnique = (str) => {
  let values = [];
  for(let letter of str) {
    if (values.includes(letter)) {
      return false
    }
    values.push(letter);
  }
  return true;
}

const findUniqueObj = (str) => {
  let values = {};
  for(let letter of str) {
    if (values.hasOwnProperty(letter)) {
      return false
    }
    values[letter] = values[letter]
  }
  return true;
}

function uniqueValuesWithSet(str) {
  let values = new Set();
  for(let letter of str) {
    if(values.has(letter)){
      return false
    }
    values.add(letter)
  }
  return true;
}
// console.log(uniqueValuesWithSet('hoola'))

//########### 57 - Counting Letters - show the word that has more letters repeat
function countingLetters(str) {  
  let words = str.toLowerCase().split(' ');
  words = words.map(currentWord => { 
    let obj = {word: currentWord, max: 1}; 
    currentWord.split('').map(letter => {
      if(obj[letter]>obj.max) {obj.max = obj[letter]};
      return obj[letter] = obj[letter] ? obj[letter] + 1 : 1
    })   
    return obj;
  })  

  let amount = 1;
  let word = '';
  for(let item of words) {
    if (item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }

  if (amount > 1) {
    return word
  }

  return -1
}
// console.log(countingLetters('javascript is esssssss')); 

function countingLettersTwo(str) {  
  let words = str.toLowerCase().split(' ');
  words = words.map(currentWord => { 
    let letters = currentWord.split('')
    return letters.reduce((acc, curr) => {
      acc[curr] =  acc[curr] ?  acc[curr] + 1 : 1;
      if(acc[curr]>acc.max) {acc.max = acc[curr]};
      return acc
    }, {max: 1, word: currentWord});
  });

  let amount = 1;
  let word = '';
  for(let item of words) {
    if (item.max > amount) {
      amount = item.max;
      word = item.word;
    }
  }

  if (amount > 1) {
    return word
  }

  return -1
}
//console.log(countingLettersTwo('javascript is esssssss'));

const longestWordInStr = (str) => {
  let splitStr =  str.toLowerCase().split(' ');
  let longestTmp = splitStr[0];
 
  splitStr.map(word => {
      if(word.length > longestTmp.length) longestTmp = word;
      return word
    })
  return longestTmp;
}
// console.log(longestWordInStr('asadsadsada bbb a asdf'));

//########### 58 - Math Sequences
function mathSequencesGeoArit(arr) {
  let arit = new Set();
  let geo = new Set();

  for(let i = 1; i < arr.length; i++) {
    let tempArit = arr[i] - arr[i-1]; 
    arit.add(tempArit);

    let tempgeo = arr[i] / arr[i-1]; 
    geo.add(tempgeo);
  }

  if(arit.size === 1) return 'Arithmetic';
  if(geo.size === 1) return 'Geometric';
  return -1;
}
// console.log(mathSequencesGeoArit([2,4,6,8]));
// console.log(mathSequencesGeoArit([2,4,8,16]));
// console.log(mathSequencesGeoArit([2,23,7,809]));



function longestStr(str) {
  let max = [''];
  let size = 0;
  let words = str.split(' ');
  
  for(let i = 0; i < words.length; i++){
    if (words[i].length >= size) {
      size = words[i].length;
      if (max[max.length-1].length < words[i].length) {
        max = [];
        max.push(words[i])
      } else if(max[max.length-1].length == words[i].length){
        max = [...max, words[i]]
      }
    }
  }
  return [...max]
}
console.log(longestStr('hola soyy unaa prurrr'));
