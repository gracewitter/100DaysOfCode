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