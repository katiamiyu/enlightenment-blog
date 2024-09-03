const rockButton = document.querySelector(".css-rock");
const paperButton = document.querySelector(".css-paper");
const scizzorsButton = document.querySelector(".css-scizzors");
const resetButton = document.querySelector(".css-reset")

let scores = {
  wins: 0,
  loses: 0,
  ties: 0,
};

rockButton.addEventListener("click", ()=>{
  const compChoice = getComputerChoice();
  let verdict = getVerdict(0, compChoice);
  scores = updateScores(verdict, scores);
  updateScreen(scores, verdict);
});

paperButton.addEventListener("click", ()=>{
  const compChoice = getComputerChoice();
  let verdict = getVerdict(1, compChoice);
  scores = updateScores(verdict, scores);
  updateScreen(scores, verdict);
});

scizzorsButton.addEventListener("click", ()=>{
  const compChoice = getComputerChoice();
  let verdict = getVerdict(2, compChoice);
  scores = updateScores(verdict, scores);
  updateScreen(scores, verdict);
});

resetButton.addEventListener("click",
  ()=>{
    scores = {
      wins: 0,
      loses: 0,
      ties: 0,
    };
    updateScreen(scores, 'play again');
  }
)
function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function updateScores(verdict, scores) {
  let { wins, loses, ties } = scores;
  if (verdict === 'win') {
     wins += 1;
   } else if (verdict === 'lose') {
     loses += 1;
   } else {
     ties += 1;
   }
   return {wins, loses, ties};
}
function getVerdict(userChoice, compChoice) {
   let verdict = '';
   if ((userChoice === 0) && (compChoice === 2)) {
     verdict = 'win';
   } else if ((userChoice === 1) && (compChoice === 0)) {
     verdict = 'win';
   } else if ((userChoice === 2) && (compChoice === 1)) {
     verdict = 'win';
   } else if (userChoice === compChoice) {
     verdict = 'tie';
   } else {
     verdict = 'lose';
   }
 
   return verdict;
}

function updateScreen(scores, verdict) {
  let {wins, loses, ties} = scores;
  const pS = document.getElementsByTagName("p");
  pS[0].innerHTML = `WINS: ${wins}`;
  pS[1].innerHTML = `LOSES: ${loses}`;
  pS[2].innerHTML = `TIES: ${ties}`;
  pS[3].innerHTML = `${verdict.toUpperCase()}`;
}