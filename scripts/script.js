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

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == computerSelection)
        return  0;
    if(computerSelection == "rock")
    {
        if(playerSelection =="paper")
            return 1;
        else
            return -1;
    }
    if(computerSelection == "paper")
    {
        if(playerSelection =="scissors")
            return 1;
        else
            return -1;
    }
    if(computerSelection == "scissors")
    {
        if(playerSelection =="rock")
            return 1;
        else
            return -1;
    }
}
function checkvalue(playerSelection)
{
    if(playerSelection == "rock" || playerSelection == "paper" ||playerSelection == "scissors")

        return 1;
    else
        return 0;

}
function game()
{
    let computerscore,userscore;
    computerscore=0;
    userscore=0;
    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter your choice");
    playerSelection.toLowerCase();
    while(!checkvalue(playerSelection))
    {
        alert("please enter a valid choice");
        playerSelection = prompt("Enter your choice");
        playerSelection.toLowerCase();
    }
    
    // computerscore= userscore =0;
    for(let i=0;i<5;i++)
    {
        let decide = playRound(playerSelection,computerSelection);
        if(decide == 1)
        {
            userscore++;
            playerSelection = prompt("You win !! " + playerSelection.toUpperCase()+ " beats " + computerSelection.toUpperCase() +"\nCOMPUTER = " +computerscore + " USER = " + userscore+ "\nEnter your choice for round "+(i+1));
            playerSelection.toLowerCase();
            while(!checkvalue(playerSelection))
            {
                alert("please enter a valid choice");
                playerSelection = prompt("COMPUTER = " +computerscore + " USER = " + userscore+ "\nEnter your choice for round "+(i+1));
                playerSelection.toLowerCase();        
            }
            computerSelection  = computerPlay();
        }
        else if(decide == 0)
        {
            playerSelection = prompt("Its a tie !! "+"\nCOMPUTER = " +computerscore + "USER = " + userscore+ "\nEnter your choice for round "+(i+1));
            playerSelection.toLowerCase();
            while(!checkvalue(playerSelection))
            {
                alert("please enter a valid choice");
                playerSelection = prompt("COMPUTER = " +computerscore + "USER = " + userscore+ "\nEnter your choice for round "+(i+1));
                playerSelection.toLowerCase();        
            }
            computerSelection  = computerPlay();
        }
        else
        {
            computerscore++;
            playerSelection = prompt("You lose !! " + computerSelection.toUpperCase()+ " beats " + playerSelection.toUpperCase() +"\nCOMPUTER = " +computerscore + " USER = " + userscore+ "\nEnter your choice for round "+(i+1));
            playerSelection.toLowerCase();
            while(!checkvalue(playerSelection))
            {
                alert("please enter a valid choice");
                playerSelection = prompt("COMPUTER = " +computerscore + " USER = " + userscore+ "\nEnter your choice for round "+(i+1));
                playerSelection.toLowerCase();        
            }
            computerSelection = computerPlay();
        }    
    }

    if(computerscore>userscore)
        alert("You lose");
    else
        alert("YOU WIN");
    var again = prompt("want to play again?");
    again.toLowerCase();
    if(again == "yes" || again == "y")
        game();
    else
        alert("BYE");   
}


alert("Welcome to my Game");
document.onload = game();