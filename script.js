let container = document.querySelector(".flex-container");
let box = document.querySelectorAll(".box");

let playAgainButton = document.createElement("button");
playAgainButton.innerText = "Play Again?";

let turns = document.querySelector("h1");

let winningHeading = document.createElement("h1");
winningHeading.style.color = "yellow";
winningHeading.style.marginTop = "50px";


function checkWin() {

    //horizontal checks;
   if(box[0].innerText != "" && box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText) {
    return box[0].innerText;
   }
   if(box[3].innerText != "" && box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText) {
    return box[3].innerText;
   }
   if(box[6].innerText != "" && box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText) {
    return box[6].innerText;
   }

   //vertical checks;
   if(box[0].innerText != "" && box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText) {
    return box[0].innerText;
   }
   if(box[1].innerText != "" && box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText) {
    return box[1].innerText;
   }
   if(box[2].innerText != "" && box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText) {
    return box[2].innerText;
   }

   //diagonal checks;
   if(box[0].innerText != "" && box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText) {
    return box[0].innerText;
   }
   if(box[2].innerText != "" && box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText) {
    return box[2].innerText; 
   }

   return "NULL";
}
let canEdit = true; 
let idx = 1; 
container.addEventListener("click", (evt) => {

    if(canEdit && evt.target != container && evt.target.innerText == "") {
        
        if(idx % 2 != 0) {
            evt.target.innerText = "X";
        } else {
            evt.target.innerText = "O";
        }
        let char = checkWin();
        if(char !== "NULL") {
            //call a function that declares a winner; 
            winningHeading.innerText = `${char} WON!`;
            turns.after(winningHeading);
            canEdit = false;

            //play again button;
            winningHeading.after(playAgainButton);
            playAgainButton.addEventListener("click", () =>{
                playFurther();
            })
            // playfurther Function; 
        }
        if(char == "NULL" && allFilled()) {
            winningHeading.innerText = "Tie!";
            turns.after(winningHeading);

            winningHeading.after(playAgainButton);
            playAgainButton.addEventListener("click", ()=> {
                playFurther();
            })

        }
        idx++;
        if(idx % 2 != 0) {
            turns.innerText = "X's Turn";
        } else {
            turns.innerText = "O's Turn";
        }
        
        
    }
});

function allFilled() {
    for(let i = 0; i <= 8; i++) {
        if(box[i].innerText == "") {
            return false;
        }
    }

    return true; 
}

function playFurther() {
    for(let i = 0; i <= 8; i++) {
        box[i].innerText = "";
    }
    turns.innerText = "X's Turn";
    canEdit = true; 
    winningHeading.remove();
    playAgainButton.remove();
    idx = 1; 

}