function sumAll(arr){
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let temp = 0;
    for (let i = min; i <= max; i++){
        temp += i;
    };
    return temp;
}

console.log(sumAll([10, 5]));

//Diff Two Arrays
function diffArray(arr1, arr2){
    newArray = [];
    
    function onlyInFirst(first, second){
        for (let i = 0; i < first.length; i++){
            if (second.indexOf(first[i]) === -1){
                newArray.push(first[i]);
            }
        }
    }
    
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    
    return newArray;
}
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))

//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr){
    var args = Array.prototype.slice.call(arguments);
    
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < args.length; j++){
            if (arr[i] === args[j]){
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))




//Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).


function whatIsInAName(collection, source){
    var srcKeys = Object.keys(source);
    
    return collection.filter(function(obj){
        for (let i = 0; i < srcKeys.length; i++){
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
                return false;
            }
        }
        return true;
    });
};
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));




//Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str){
    //variable for white space and underscores
    var regex = /\s+|_+/g;
    
    //replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    //replace space and underscore with dash 
    return str.replace(regex, '-').toLowerCase();
};
console.log(spinalCase('AllThe-small Things'));




//Pig Latin
//Translate the provided string to pig latin.

function translatePigLatin(str){
    //empty string to hold pig word
    var pigLatin = '';
    //regular expression to search for vowels
    var regex = /[aeiou]/gi;
    
    //check if first character is a vowel. if true, add 'way' to the end
    if (str[0].match(regex)){
        pigLatin = str + 'way';
    }else if (str.match(regex) === null){
        //check if string is only consonants
        pigLatin = str + 'ay';
    }else{
        //find how many consants before the first vowel
        var vowelIndice = str.indexOf(str.match(regex)[0]);
        
        //start string with first vowel to the end, add consonants that were skipped, add ending
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }
    return pigLatin;
}
console.log(translatePigLatin('glv'));




//Search and Replace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.

function myReplace(str, before, after){
    //find index of before in str
    var index = str.indexOf(before);
    
    //check if first letter is capitalised
    if (str[index] === str[index].toUpperCase()){
        //change first letter of after to uppercase
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    //replace before with after
    str = str.replace(before, after);
    return str;
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));




//DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

function pairElement(str){
    //create object for pair lookup
    var pairs = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }
    
    //split str into array of characters
    var arr = str.split('');
    
    //map each character in arr to an array with the charater and its matching pair
    return arr.map(x => [x, pairs[x]]);
}
console.log(pairElement("TTGAG"));




//Missing letters
//Find the missing letter in the passed letter range and return it.

function fearNotLetter(str){
    //store character code for first missing letter in the string and store whatever missing letters we find
    var compare = str.charCodeAt(0), missing;
    
    //turn the string into an array and map through it comparing the character code with what should be in that index
    str.split('').map(function(letter,index){
        //if the current letter matches, move the comparison variable to the next position
        if (str.charCodeAt(index) === compare){
            ++compare;
        }else {
            //if no match, missing letter will be assigned to missing variable and returned
            missing = String.fromCharCode(compare);
        }
    });
    return missing;
}
console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'))




//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr){
    var finalArray = [];
    var args = [...arguments];
    
    //loop through arguments object in outer loop
    for (var i = 0; i < args.length; i++){
        //loop through individual array elements
        for (var j = 0; j < args[i].length; j++){
            //add element if it doesn't already exist in finalArray
            if(!finalArray.includes(args[i][j])){
                finalArray.push(args[i][j]);
            }
        }
    }
    return finalArray;
}
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))




//Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str){
    var arr = str.split('');
    
    for (var i = 0; i < arr.length; i++){
        switch (arr[i]){
            case '<':
                arr[i] = '&lt;';
                break;
            case '&':
                arr[i] = '&amp;';
                break;
            case '>':
                arr[i] = '&gt;';
                break;
            case '"':
                arr[i] = '&quot;';
                break;
            case "'":
                arr[i] = '&apos;';
                break;
        }
    }
    arr = arr.join('');
    return arr;
}
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//Sum All Odd Fibonacci Numbers
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num){
    //variables for current and previous numbers and result
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    
    while (currNumber <= num){
        //use modulo to check if odd or even. add to result if even
        if (currNumber % 2 !== 0){
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
}
console.log(sumFibs(75024));




//Sum All Primes
//Sum all the prime numbers up to and including the provided number.

function sumPrimes(num){
    //function to check if num is prime
    function isPrime(number){
        for (i = 2; i <= number; i++){
            if (number % i === 0 && number !=i){
                //return true if divisible by any number not itself
                return false;
            }
        }
        return true;
    }
    //1 is not prime, return 0
    if (num === 1){
        return 0;
    }
    //check if number is not prime
    if(isPrime(num) === false){
        //if not prime, check next number down from max number, don't add anything to answer
        return sumPrimes(num-1);
    }else{
        //if it is prime, add number to next number in sequence through recursive call to sumPrimes func
        return num + sumPrimes(num-1)
    }
}
console.log(sumPrimes(977))




//Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

function smallestCommons(arr){
    //sort array from greatest to least
    arr.sort(function(a,b){
        return b - a;
    });
    
    //create new array and use descending for loop to add all numbers greatest to smallest into the array
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--){
        newArr.push(i);
    }
    
    //smallest common multiple
    var quot = 0;
    //loop number we're checking
    var loop = 1;
    //index of the array of numbers
    var n;
    
    //run while n != array length
    do{
        //multiply very first number * number of loops * second number
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++){
            if (quot % newArr[n] !== 0){
                //stop loop if quot not even
                break;
            }
        }
        loop++;
    } while (n !== newArr.length);
    return quot;
}
console.log(smallestCommons([23, 18]));




//Drop it
//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
function dropElements(arr, func){
    var times = arr.length;
    for (var i = 0; i < times; i++){
        if (func(arr[0])){ //stop if true, drop element if not
            break;   
        }else{
            arr.shift();
        }
    }
    return arr;
}
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))




//Steamroller
//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr){
    var flattenedArray = [];
    
    //adds element if not an array. loops through arrays to get element using recursion
    var flatten = function(arg){
        if (!Array.isArray(arg)){
            flattenedArray.push(arg);
        }else{
            for (var a in arg){
                flatten(arg[a]); //calls function again with a layer of array deeper, keep going deeper into the nested array until it finds an element
            }
        }
    };
    arr.forEach(flatten);
    return flattenedArray;
}
console.log(steamrollArray([[["a"]], [["b"]]]))




//Binary Agents
//Return an English translated sentence of the passed binary string.
function binaryAgent(str){
    let biString = str.split(' ');
    let uniString = [];
    
    for (let i = 0; i < biString.length; i++){
        uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    
    return uniString.join('');
};
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"))




//Everything Be True
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre){
    //counter to check how many cases are true
    var counter = 0;
    //check each object if it's truthy
    for (var c in collection){
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])){
            counter++;
        }
    }
    return counter == collection.length;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))




//Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether(){
    //function to check if input is a number
    var checkNumber = function(num){
        if(typeof num !== 'number'){
            return undefined;
        }else{
            return num;
        }
    };
    //check if there are two parameters and if they're numbers
    if (arguments.length > 1){
        var a = checkNumber(arguments[0]);
        var b = checkNumber(arguments[1]);
        if (a === undefined || b === undefined){
            return undefined;
        }else{
            return a + b;
        };
    }else{ //if only 1 parameter found, return a new function that expects 2 parameters, stror the first argument
        var c = arguments[0];
        if (checkNumber(c)){
            return function(arg2){
                if (c === undefined || checkNumber(arg2) === undefined){
                    return undefined;
                }else {
                    return c + arg2;
                }
            }
        }
    
    }
}
console.log(addTogether(2, "3"))




//Make a Person
//Fill in the object constructor with the following methods below:
//getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
var Person = function(firstAndLast){
    var fullName = firstAndLast;
    
    this.getFirstName = function(){
        return fullName.split(' ')[0]
    };
    
    this.getLastName = function(){
        return fullName.split(' ')[1]
    };
    
    this.getFullName = function(){
        return fullName;
    };
    
    this.setFirstName = function(name){
        fullName = name + ' ' + fullName.split(' ')[1]
    };
    
    this.setLastName = function(name){
        fullName = fullName.split(' ')[0] + ' ' + name;
    };
    
    this.setFullName = function(name){
        fullName = name;
    };
};
var bob = new Person('Bob Ross');
console.log(bob.getLastName());




//Map the Debris
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
function orbitalPeriod(arr){
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = []; //stores orbPeriods
    var getOrbPeriod = function(obj){
        var c = Math.pow(earthRadius + obj.avgAlt, 3); //(earthRadius + avgAlt)^3
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        delete obj.avgAlt;
        obj.orbitalPeriod = orbPeriod;
        return obj;
    };
    for (var elem in arr){
        newArr.push(getOrbPeriod(arr[elem]));
    }
    return newArr;
}
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))