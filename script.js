let count = 1;
let value;
let winningCombo = [[1, 4, 7], [1, 2, 3], [1, 5, 9], [3, 5, 7], [2, 5, 8], [3, 6, 9], [7, 8, 9], [4, 5, 6]];
let holdValue = [0,0,0,0,0,0,0,0,0];
let boxNumber;
let checkCount1 =0;
let checkCount2 =0;


function decideWinner( boxNumber, value)
{
    if(holdValue[boxNumber-1] === 0)
    {
   holdValue[boxNumber-1] = value;
    }
    for(let i =0; i<winningCombo.length; i++)
    {
        for(let j =0; j<winningCombo[i].length; j++)
        {
             if(holdValue[winningCombo[i][j]-1] === "O")
             {
                 checkCount1++;
                 if(checkCount1 === 3)
                 {
                    let notification = setInterval(function()
                     {
                        window.alert("Player 1 Wins")
                        clearInterval(notification);
                     },500);
                     
                 }
             }
             if(holdValue[winningCombo[i][j]-1] === "X")
             {
                 checkCount2++;
                 if(checkCount2 === 3)
                 {
                    let notification = setInterval(function()
                     {
                        window.alert("Player 2 Wins")
                             clearInterval(notification)
                     }, 500);
                     
                 }
             }
        }
        checkCount1 = 0;
        checkCount2 = 0;
    }
}

for (let i = 0; i < 9; i++) {
    let htmlContent = document.querySelectorAll(".box")[i];
    htmlContent.addEventListener("click", function () {
        if (this.innerHTML != "O" && this.innerHTML != "X") {
            boxNumber = parseInt(this.innerHTML);
        }

        if (count % 2 === 0) {
            value = "X";
            
        }
        else {
            
            value = "O";
        }

        if (this.innerHTML != "O" && this.innerHTML != "X") {
            this.innerHTML = value;
            count++;
        }

        this.style.color = "black";

        if (count === 2) {
            document.querySelector(".points").classList.add("hide");
        }
         decideWinner( boxNumber, value);
    });
}