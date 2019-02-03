//make a random number
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let player1 = '.img1';
let player2 = '.img2';

//match randomNumber to appropriate images
function diceRoll(randomNumber, player){

switch (randomNumber) {
  case 1:
    document.querySelector(player).setAttribute('src', 'images/dice1.png');
    break;
  case 2:
    document.querySelector(player).setAttribute('src', 'images/dice2.png');
    break;
  case 3:
    document.querySelector(player).setAttribute('src', 'images/dice3.png');
    break;
  case 4:
    document.querySelector(player).setAttribute('src', 'images/dice4.png');
    break;
  case 5:
    document.querySelector(player).setAttribute('src', 'images/dice5.png');
    break;
}
}

//run function to roll dice
diceRoll(randomNumber1,player1);
diceRoll(randomNumber2, player2);

// compare randomNumber to determine the winner
if( randomNumber1 > randomNumber2){
  document.querySelector('h1').innerText = '🎉 Player 1 Wins!';
}else if( randomNumber1 < randomNumber2){
  document.querySelector('h1').innerText = 'Player 2 Wins! 🎉';
}else {
  document.querySelector('h1').innerText = 'Draw!';
}
