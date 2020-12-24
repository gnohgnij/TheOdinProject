function computerPlay(){
    let choice = ['rock', 'paper', 'scissors'];
    let randNum = Math.floor(Math.random()*choice.length);
    return choice[randNum];
}

function playRound(playerSelection, computerSelection){

    const playerScore = document.querySelector('#human-score').textContent;
    let pScore = Number(playerScore);

    const computerScore = document.querySelector('#com-score').textContent;
    let cScore = Number(computerScore);

    let round = Number(document.querySelector('#round').textContent);

    const comChoice = document.querySelector('#com-choice');

    if(round<5){
        if(playerSelection == 'rock'){
            if(computerSelection == 'paper'){
                comChoice.innerHTML = '<i class="fas fa-hand-paper fa-4x" style="color: goldenrod;"></i>';
                cScore++;
            }
            else if(computerSelection == 'scissors'){
                comChoice.innerHTML = '<i class="fas fa-hand-scissors fa-4x" style="color: goldenrod;"></i>';
                pScore++;
            }
            else if(computerSelection == 'rock'){
                comChoice.innerHTML = '<i class="fas fa-fist-raised fa-4x" style="color: goldenrod;"></i>';
            }
        }
        else if (playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                comChoice.innerHTML = '<i class="fas fa-fist-raised fa-4x" style="color: goldenrod;"></i>';
                cScore++;
            }
            else if(computerSelection == 'paper'){
                comChoice.innerHTML = '<i class="fas fa-hand-paper fa-4x" style="color: goldenrod;"></i>';
                pScore++;
            }
            else if(computerSelection == 'scissors'){
                comChoice.innerHTML = '<i class="fas fa-hand-scissors fa-4x" style="color: goldenrod;"></i>';
            }
        }
        else if (playerSelection == 'paper'){
            if(computerSelection == 'rock'){
                comChoice.innerHTML = '<i class="fas fa-fist-raised fa-4x" style="color: goldenrod;"></i>';
                pScore++;
            }
            else if(computerSelection == 'scissors'){
                comChoice.innerHTML = '<i class="fas fa-hand-scissors fa-4x" style="color: goldenrod;"></i>';
                cScore++;
            }
            else if(computerSelection == 'paper'){
                comChoice.innerHTML = '<i class="fas fa-hand-paper fa-4x" style="color: goldenrod;"></i>';
            }
        }
        round++;
    }

    document.querySelector("#human-score").textContent = pScore.toString();

    document.querySelector("#com-score").textContent = cScore.toString();

    document.querySelector('#round').textContent = round.toString();

    return round;
}

btn = document.querySelectorAll('button');

        btn.forEach((button) => {
            button.addEventListener('click', () => {
                const round = playRound(button.id, computerPlay());
                if(round == 5){
                    const pScore = Number(document.querySelector("#human-score").textContent);
                    const cScore = Number(document.querySelector("#com-score").textContent);
                    const winner = document.querySelector("#winner");
                    if(pScore > cScore)
                        winner.innerHTML = '<h2 style="color: red">YOU WIN!</h2>';
                    else if(pScore == cScore)
                        winner.innerHTML = '<h2 style="color: red">TIE!</h2>';
                    else
                        winner.innerHTML = '<h2 style="color: red">YOU LOSE!</h2>';
                }
            });
        });