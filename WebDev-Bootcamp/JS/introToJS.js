// var input = prompt('Write your story');
// alert('You have written ' + input.length + ' characters, you have ' + (140 - input.length) + ' left.');

// var name = "Grace";
// name.slice(0,1);

// var input = prompt('Write your story');
// var inputSlice = input.slice(0,140);
// alert(inputSlice);
// alert(prompt('write your tweet:').slice(0,140))

// var name = prompt("What is your name?");
// var firstLetter = name.slice(0,1).toUpperCase();
// var restOfName = name.slice(1,name.length).toLowerCase();
// alert("Hello " + firstLetter + restOfName);

// dogAge = prompt('How old is your dog?');
// humanAge = (dogAge - 2) * 4 + 21;
// alert('your dog is ' + humanAge + ' human years old')

// function getMilk(money, costPerBottle) {
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");

//   console.log('buy ' + calcBottles(money,costPerBottle) + ' bottles of milk')
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");

//   return calcChange(money,costPerBottle);
// }

// function calcBottles(startingMoney, costPerBottle){
//     var numberOfBottles = Math.floor(startingMoney/1.5);
//     return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle){
//     var change = startingAmount % costPerBottle;
//     return change

// }

// console.log('hello, here is your ' + getMilk(10,3) + ' change');
function bmiCalculator(weight, height){
    return Math.round(weight / (Math.pow(height,2)));
}

var bmi = bmiCalculator(65, 1.8);
