let firstCard = 10;
let secondCard = 1;
let hasBlacKJack = false;
let isAlive = true;
let message;
let sum = firstCard + secondCard;
let messageEl = document.getElementById('message');

function startGame() {
  if (sum < 21) {
    message = 'Do you want new card ? 🙂 ';
  } else if (sum === 21) {
    message = 'Wohoo!!! You hit a BlackJack ...🥳';
    hasBlacKJack = true;
  } else {
    message = "You're out of the game !! 😭";
    isAlive = false;
  }
  message = messageEl.textContent;
}

console.log('This is Part of the testing');
