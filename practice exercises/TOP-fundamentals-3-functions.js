


//Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"

let num1 = 10;
let num2 = 5;
let sentence = "The quick brown fox jumped over the lazy dog.";

//Write a function called add7 that takes one number and returns that number + 7.
function add7(num1){
    return num1 + 7;
};
document.write('<h1>' + num1 + ' + 7 = ' + add7(num1) + '</h1>');

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2){
    return num1 * num2;
};
document.write('<h1>' + num1 + ' * ' + num2 + ' = ' + multiply(num1, num2) + '</h2>');

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(sentence){
    return (sentence.charAt(0)).toUpperCase();
}
document.write('<h1>' + capitalize(sentence) + '</h1>');


//Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"
function lastLetter(sentence){
    return sentence.charAt(sentence.length - 1);
}

document.write('<h1>' + lastLetter(sentence) + '</h1>');
