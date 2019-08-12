function generateRandomNumber(num)
{
    return Math.floor(Math.random()*num);
}

function computerPlay()
{
    var num = generateRandomNumber(2);
    switch(num)
    {
        case 0 :
            return "rock";
        case 1 :
            return "paper";
        case 2 :
            return "scissors";
    }
}

