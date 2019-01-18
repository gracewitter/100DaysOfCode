//Palindrome Checker
//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str){
    //replace any white space or non-alphanumeric symbols with null which removes them from the string
    //remove any capital letters
    //then split the string, reverse it, and join it back together
    str = str.toLowerCase().replace(/[\W_]/g,'');
    for(var i = 0, len = str.length - 1; i < len/2; i++){ //loop stops when halfway through the string
        if (str[i] !== str[len-i]){ //checks if the letters at either end of the string match, moving towards the middle with each iteration
            return false;
        }
    }
    return true;
}
console.log(palindrome("A man, a plan, a canal. Panama"))




//Roman Numeral Converter
//Convert the given number into a roman numeral.
function convertToRoman(num){
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var romanized = '';
    
    //loop through the decimalValue array until while value at current index fits into num
    for (var index = 0; index < decimalValue.length; index++){
        while (decimalValue[index] <= num){
            romanized += romanNumeral[index];
            num -= decimalValue[index]; //add the roman numeral and decrease num by the decimal equivalent
        }
    }
    return romanized;
}
console.log(convertToRoman(83));




//Caesars Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
function rot13(str){
    var rotCharArray = [];
    var regEx = /[A-Z]/; //all uppercase letters A-Z
    str = str.split('');
    for (var x in str){
        if(regEx.test(str[x])){ //if the string has only uppercase letters, use rot13 transformation and charCodeAt to return correct value, otherwise return initial value
            rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
        }else{
            rotCharArray.push(str[x].charCodeAt());
        }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}
console.log(rot13("SERR CVMMN!"))




//Telephone Number Validator
//Return true if the passed string looks like a valid US phone number.
function telephoneCheck(str){
    //^ = beginning of the string and $ = end of the string
    //(1/s?)? allows for '1' or '1 '
    //\d{n} checks for n number of digits
    //(\(\d{3}\)|\d{3}) checks for either 3 digits surrounded or not surrounded by parenthesis   
    //[\s\-]? checks for spaces or dashes between digits

    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
    console.log(telephoneCheck("123**&!!asdf#"))




//Cash Register
//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//array of objects holding the denominations and values
var denom = [
    {name: 'ONE HUNDRED', val: 100.00},
    {name: 'TWENTY', val: 20.00},
    {name: 'TEN', val: 10.00},
    {name: 'FIVE', val: 5.00},
    {name: 'ONE', val: 1.00},
    {name: 'QUARTER', val: 0.25},
    {name: 'DIME', val: 0.10},
    {name: 'NICKEL', val: 0.05}, 
    {name: 'PENNY', val: 0.01}
];
    
function checkCashRegister(price,cash,cid){
    var output = {status: null, change: []};
    var change = cash - price;
    
    //transform CID into drawer object
    var register = cid.reduce(function(acc, curr){
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, {total: 0});
    
    //handle exact change
    if (register.total === change){
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }
    
    //handle obvious insufficient funds
    if (register.total < change){
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    
    //Loop through denomination array
    var change_arr = denom.reduce(function(acc, curr){
        var value = 0;
        //while there is still money of this denomination in the drawer and while denomination is larger than change
        while(register[curr.name] > 0 && change >= curr.val){
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            
            //round change to nearest hundreth 
            change = Math.round(change * 100) / 100;
        }
        //add this denomination to output only if any was used
        if (value > 0){
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);
    
    //no elements in change_arr or we have leftover change
    if (change_arr.length < 1 || change > 0){
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))