function updateScore(result, score)
{
    let  { win, lose, tie } = score
    if (result === 'YOU WIN') {
      win++;
    } else if (result === 'YOU LOSE') {
      lose++;
    } else if (result === 'YOU HAVE A TIE') {
      tie++;
    }
    return {win, lose, tie};
}

function printScore(result, score, userChoice, compChoice) {
  const { win, lose, tie } = score;
  alert(`
USER                    COMPUTER        
=================================
${userChoice.padEnd(10, ' ')}         ${compChoice}
=================================

DECISION: ${result.toLowerCase()}

TOTAL - Wins: ${win} Loses: ${lose} Ties: ${tie}
`);
}

/*function getCompChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  return compChoice;
}*/

export {printScore, updateScore};
    
