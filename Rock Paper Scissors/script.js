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

    if(round<5){
        if(playerSelection == computerSelection){
            alert('Draw! Player and Computer selected ' + playerSelection);
        }
        else if(playerSelection == 'rock'){
            if(computerSelection == 'paper'){
                alert('You lose! Paper beats rock');
                cScore++;
                console.log(cScore);
            }
            else if(computerSelection == 'scissors'){
                alert('You win! Rock beats scissors');
                pScore++;
                console.log(pScore);
            }
        }
        else if (playerSelection == 'scissors'){
            if(computerSelection == 'rock'){
                alert('You lose! Rock beats scissors');
                cScore++;
                console.log(cScore);
            }
            else if(computerSelection == 'paper'){
                alert('You win! Scissors beats paper');
                pScore++;
                console.log(pScore);
            }
        }
        else if (playerSelection == 'paper'){
            if(computerSelection == 'rock'){
                alert('You win! Paper beats rock');
                pScore++;
                console.log(pScore);

            }
            else if(computerSelection == 'scissors'){
                alert('You lose! Scissors beats paper');
                cScore++;
                console.log(cScore);
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
                    if(pScore > cScore)
                        alert("You win!");
                    else if(pScore == cScore)
                        alert("Tie!");
                    else
                        alert("You lose!");
                }
            });
        });