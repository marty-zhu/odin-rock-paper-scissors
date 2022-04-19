const userButtons = document.querySelectorAll('button.selection');
const options = ['rock', 'paper', 'scissor'];

let score = {
      'user': 0,
      'comp': 0,
      'tie': 0,
    };

// <!-- let the computer randomly choose an option -->
function getRandInt(min, max) {
      rand = Math.random() * (max - min) + min;
      return Math.floor(rand);
};

function revealSelections(choiceCode) {
    // TODO: add same functionality for comp display area
    //
    imgElem = document.querySelector(`img#user-choice-${choiceCode}`);
    imgElem.classList.toggle('show');

    setTimeout(() => {
        imgElem.classList.remove('show');
    }, 1000);
}

// <!-- for each round -->
function playRound(e) {

      // <!-- ask the user to make a choice -->
      // const input = prompt("Rock[1], Paper[2], or Scissor[3]?");

      let userChoice = parseInt(e.target.dataset.choiceCode);
      let compChoice = getRandInt(1, 4);

      // <!-- show what the computer's choice was -->
      console.log(`You: ${options[userChoice - 1]}`);
      console.log(`Comp: ${options[compChoice - 1]}`);

    revealSelections(userChoice);

      // <!-- show whether the user won or lost -->
      result = compare(userChoice, compChoice);

      // <!-- record the results of each game -->
      if (result === 0) {
            score.user++;
      } else if (result === 1) {
            score.comp++;
      } else {
            score.tie++;
      }
}

function assignListners(nodeList) {
    for (let node of nodeList) {
        node.addEventListener('click', playRound);
        console.log(`Event assigned to ${node}`);
    }
}

function restartGame() {
      location.reload()
}

// compare the users choice and the computer's choice -->
function compare(user, computer) {
      // <!-- if choices are the same then it's a tie -->
      if (user === computer) {
            console.log("It's a tie!");
            return 2;
      // <!-- if user chose rock and comp chose paper, then comp wins -->
      } else if (user === 1 && computer === 2) {
            console.log("You lose! Paper beats Rock!");
            return 1;
      // <!-- if user chose rock and comp chose scissor, then user wins -->
      } else if (user === 1 && computer === 3) {
            console.log("You win! Rock beats Scissor!");
            return 0;
      // <!-- if user chose paper and comp chose rock, then user wins -->
      } else if (user === 2 && computer === 1) {
            console.log("You Win! Paper beats Rock!");
            return 0;
      // <!-- if user chose paper and comp chose scissor, then comp wins -->
      } else if (user === 2 && computer === 3) {
            console.log("You Lose! Scissor beats Paper!");
            return 1;
      // <!-- if user chose scissor and comp chose rock, then comp wins -->
      } else if (user === 3 && computer === 1) {
            console.log("You Lose! Rock beats Scissor!");
            return 1;
      // <!-- if user chose scissor and comp chose paper, then user wins -->
      } else {
            console.log("You Win! Scissor beats Paper!");
            return 0;
      }
};

assignListners(userButtons);
