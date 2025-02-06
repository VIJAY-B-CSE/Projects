var number = document.getElementById("number")
var randomnumber = Math.floor(Math.random() * 5) + 1;
var result = document.getElementById("result")
var score = document.getElementById("score")
var scorevalue = 3

function check()
{
    var guessnumber = number.value
    if(guessnumber==randomnumber)
    {
        console.log("you win")
        result.textContent="RESULT : You Win..."
        alert("🏆Congratulations! You guessed correctly!");
    }
    else if(guessnumber>5 || guessnumber<1)
    {
        alert("❌ Enter number between 1 - 5.")
    }
    else
    {
        console.log("you loose")
        result.textContent="RESULT : You Loose..."
        scorevalue = scorevalue-1
        score.textContent="SCORE : "+scorevalue
        if(scorevalue==0)
        {
            alert("😉 Better Luck Next Time.")
            location.reload()
        }
    }
}

function restart(){
    location.reload()
}