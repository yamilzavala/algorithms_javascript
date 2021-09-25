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
    console.log(onlyAlphaNumeric)
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
        if(arr2.indexOf(arr1[index]) === -1) result.push(arr1[index]);
    }
    for (let index = 0; index < arr2.length; index++) {
        if(arr1.indexOf(arr2[index]) === -1) result.push(arr2[index]);
    }
    return result;
}

function diffArray_2(arr1, arr2) {
    let joinarrays = arr1.concat(arr2);
    return joinarrays.filter(current => {
        return arr1.indexOf(current) === -1 || arr2.indexOf(current) === -1;
    });
}
// console.log(diffArray_2([1, 2, 3, 5], [1, 2, 3, 5, 10, 4, 7]));

//########### 19 - Roman Numeral
function convertToRoman(num) {
    let result = '';
    const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};
   for(let key in romanNumList) {
       while(num >= romanNumList[key]) {
            result +=  key;
            num -= romanNumList[key];
       }
   }
   return result;
}
console.log(convertToRoman(15)); 

//########### 20 -

//########### 21 -

//########### 22 -
