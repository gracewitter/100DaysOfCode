// name1 = prompt("What is your name?");
// name2 = prompt("What is your crush's name?")
// loveScore = Math.floor(Math.random() * 100) + 1;

// if (loveScore > 70){
//     alert("Your love score is " + loveScore +"%" + " You love each other more than Kanye loves Kanye")
// }else if (loveScore > 30 && loveScore < 70){
//     alert("Your love score is " + loveScore +"%")
// }else{
// alert("Your love score is " + loveScore +"%" + " not a match")
// }

// function bmiCalculator(weight, height){
//     var bmiIndex = weight/Math.pow(height, 2);
//     var bmi = Math.floor(bmiIndex * 10) / 10;

//     var interpretation;


//     if (bmi < 18.5){
//         interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//     }else if(bmi > 18.5 && bmi < 24.9){
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
//     }else if(bmi > 24.9){
//         interpretation = "Your BMI is " + bmi + ", so you are overweight."
//     }
//     return interpretation;
// }
// bmiCalculator(6,2)

// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var name = prompt ("What's your name?")
// var message;
// if (guestList.includes(name)){
//      message = "welcome to the party";
// }else{
//      message = "you're not on the list"
// }
// console.log(message)

// var output = [];
// function fizzBuzz(){
//     for(var count = 100; count > 1; count--){
//         if (count % 3 === 0 && count % 5 === 0){
//             output.push('fizzbuzz');
//         }else if (count % 3 === 0){
//             output.push('fizz');
//         }else if (count % 5 === 0){
//             output.push('buzz');
//         }else{
//             output.push(count);
//         }
//         count++;
//         }
//     console.log(output);

// }
// fizzBuzz();

// var count = 100;
// function beer(){
//     while (count > 1){
//         console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, " + (count - 1) + " bottles of beer on the wall");
//         count--;
//     }
//     if (count === 1){
//         console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, no more bottles of beer on the wall");
//         count--;
//     }
//     if(count === 0){
//         console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");

//     }
// }

function fibonacciGenerator(n){
var output = [0, 1];
if (n === 0){
        output.length = 0;
}else if(n === 1){
        output.pop();
}else{
        for(var i = 2; i < n; i++){
                output.push(output[i - 2] + output[i-1])
        }
}
console.log(output);
}
