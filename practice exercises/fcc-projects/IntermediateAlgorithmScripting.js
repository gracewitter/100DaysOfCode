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