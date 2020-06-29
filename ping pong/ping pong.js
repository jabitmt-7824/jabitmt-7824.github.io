const Name = "Name";
const Score = "highScore";
const rod1Name = "Rod 1";
const rod2Name = "Rod 2";

var rod=document.getElementsByClassName("rod");
var ball=document.getElementById("ball");

let score,highScore,movement,rodName,ballSpeedX = 2,ballSpeedY = 2;
let gameOn = false;

(function () {
    rodName = localStorage.getItem(Name);
    highScore = localStorage.getItem(Score);

    if (rodName === "null" || highScore === "null") {
        alert("This is the first time you are playing this game. LET'S START");
        highScore = 0;
        rodName = "Rod1";
    } else {
        alert(rodName + " has maximum score of " + highScore * 10);
    }

    reset(rodName);
})();

function reset(rodName) {

    rod[0].style.left = (window.innerWidth - rod[0].offsetWidth) / 2 + 'px';
    rod[1].style.left = (window.innerWidth - rod[1].offsetWidth) / 2 + 'px';
    ball.style.left = (window.innerWidth - ball.offsetWidth) / 2 + 'px';

    if (rodName === rod2Name) {
        ball.style.top = (rod[0].offsetHeight) + 'px';
        ballSpeedY = 2;
    } else if (rodName === rod1Name) {
        ball.style.top = (Window.innerHeight - rod[1].offsetHeight) + 'px';
        ballSpeedY = -2;
    }

    score = 0;
    gameOn = false;
}


function win(rodName, score) {

    if (score > highScore) {
        highScore = score;
        localStorage.setItem(Name, rodName);
        localStorage.setItem(Score, highScore);
    }

    clearInterval(movement);
    reset(rodName);

    alert("Score of " + rodName + ":" + (score * 10) + ".\n High score is: " + (highScore * 10));
}

window.addEventListener('keypress', function (event) {
     		var rodleft = rod[0].offsetLeft;
     	    var rodWidth = rod[0].offsetWidth;  

            if (event.key === "A" || event.key === "a") {
               if (rodleft > 20) {
                  rod[0].style.left = (rodleft - 20) + "px";
                  rod[1].style.left = (rodleft - 20) + "px";
               }
           }

           else if (event.key === "D" || event.key === "d") {
               if (rodleft < (window.innerWidth-rodWidth) - 20) {
                  rod[0].style.left = (rodleft + 20) + "px";
                  rod[1].style.left = (rodleft + 20) + "px";
               }
           }

           if(event.key==="Enter"){
           	if (!gameOn) {
            gameOn = true;
            let ballRect = ball.getBoundingClientRect();
            let ballX = ballRect.x;
            let ballY = ballRect.y;
            let ballDiameter = ballRect.width;

            movement = setInterval(function () {
                ballX += ballSpeedX;
                ballY += ballSpeedY;
                ball.style.left = ballX + 'px';
                ball.style.top = ballY + 'px';

                if ((ballX + ballDiameter) > window.innerWidth || ballX < 0) {
                    ballSpeedX = -ballSpeedX;
                }

                let ballPosition = ballX + ballDiameter / 2;
                rod1X = rod[0].getBoundingClientRect().x;
                rod2X = rod[1].getBoundingClientRect().x;

                if (ballY <= rod[0].offsetHeight) {
                    ballSpeedY = -ballSpeedY;
                    score++;

                    if ((ballPosition < rod1X) || (ballPosition > (rod1X + rod[0].offsetWidth))) {
                        win(rod2Name, score);
                    }
                }
                else if ((ballY + ballDiameter) >= (window.innerHeight - rod[1].offsetHeight)) {
                    ballSpeedY = -ballSpeedY;
                    score++;

                    if ((ballPosition < rod2X) || (ballPosition > (rod2X + rod[1].offsetWidth))) {
                        win(rod1Name, score);
                    }
                }

                 
            },10);
           }
          }
});

