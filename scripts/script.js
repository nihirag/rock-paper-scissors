function generateRandomNumber(num)
{
    return Math.floor(Math.random() * 3) + 1;
}

function computerPlay()
{
    var num = generateRandomNumber(2);
    switch(num)
    {
        case 1 :
            return "rock";
        case 2 :
            return "paper";
        case 3 :
            return "scissors";
    }
}

let computerScore, playerScore;
computerScore = playerScore = 0;
const computerScoreDiv = document.querySelector("#computer");
const playerScoreDiv = document.querySelector("#player");
const caption = document.querySelector(".roundResult > p")

const buttons = document.querySelectorAll('button');

function game(playerChoice)
{
    
    let computerChoice = computerPlay();
    if(computerChoice == playerChoice)
    {
        caption.textContent = "Its a draw !!";
        return;
    }
    else if((playerChoice =="rock" && computerChoice =="scissors") || (playerChoice =="paper" && computerChoice =="rock") || (playerChoice =="scissors" && computerChoice =="paper"))
    {
        caption.textContent = "You win this round !!";
        playerScore++;
    }
    else
    {
        caption.textContent = "You lose this round!!";
        computerScore++;
    }
    if(computerScore >=5 || playerScore >=5)
    {
        buttons.forEach((button) => {
            button.style.display = "none";
        });
        computerScoreDiv.textContent = computerScore;
        playerScoreDiv.textContent = playerScore;
        caption.style.fontSize= "2rem";
        if(computerScore>playerScore)
            caption.textContent = "COMPUTER WINS!!";
        else
            caption.textContent = "PLAYER WINS!!";  
        let response = prompt("Game has ended if you want to play again enter y/n");
        if(response=="y")
            document.location.reload();
    }
    else
    {
        computerScoreDiv.textContent = computerScore;
        playerScoreDiv.textContent = playerScore;
    }
    
}


   buttons.forEach((button)=> {
        button.addEventListener('click',(e) =>{
        // console.log(e.target.getAttribute("data-key"));
            game(e.target.getAttribute("data-key"));
        });
    });

