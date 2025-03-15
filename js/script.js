let gameArea = document.querySelector(".gameArea");
let nameInput = document.querySelector(".nameInput");
let playBtn = document.querySelector(".playBtn");
let nameError = document.querySelector(".nameError");


// ======================= Player One =========================
let playerOnegameArea = document.querySelector(".playerOnegameArea");
let playerOneHeading = document.querySelector(".playerOneHeading");
let playerOneInput = document.querySelector(".playerOneInput");
let playerPlayBtn = document.querySelector(".playerPlayBtn");
let playerOneError = document.querySelector(".playerOneError");
// ============================================================

// ======================= Player Two =========================
let playerTwoGameArea = document.querySelector(".playerTwoGameArea");
let playerTwoNameInput = document.querySelector(".playerTwoNameInput");
let playerTwoPlayBtn = document.querySelector(".playerTwoPlayBtn");
let playerTwoNameError = document.querySelector(".playerTwoNameError");
// ============================================================
// ======================= Player Two Chance =========================
let playerTwoChanceOne = document.querySelector(".playerTwoChanceOne");
let playerTwoHeading = document.querySelector(".playerTwoHeading");
let playerTwoChanceNum = document.querySelector(".playerTwoChanceNum");
let playerTwoChanceOneInput = document.querySelector(".playerTwoChanceOneInput");
let playerTwoChanceOnePlayBtn = document.querySelector(".playerTwoChanceOnePlayBtn");
let playerTwoChanceOneError = document.querySelector(".playerTwoChanceOneError");
let counter = 1;
// ============================================================

playBtn.addEventListener("click", function () {
    if (nameInput.value == "") {
        nameError.style.display = "block";
    }
    else {
        gameArea.style.display = "none";
        playerOnegameArea.style.display = "block";
        let h = playerOneHeading.innerHTML + ' ( ' + nameInput.value + ' ) ';
        playerOneHeading.innerHTML = h;
    }
});

// ======================= Player One =========================
playerPlayBtn.addEventListener("click", function () {
    if (playerOneInput.value == "") {
        playerOneError.style.display = "block";
        playerOneError.innerHTML = "Number is Missing";
    }
    else if (playerOneInput.value < 1 || playerOneInput.value > 10) {
        playerOneError.style.display = "block";
        playerOneError.innerHTML = "Out of Range!";
    }
    else if (playerOneInput.value - 15) {
        console.log("It's a number");
        playerOnegameArea.style.display = "none";
        playerTwoGameArea.style.display = "block";

    }
    else {
        playerOneError.style.display = "block";
        playerOneError.innerHTML = "Invalid input";
    }

});
// ============================================================
// ======================= Player Two =========================
playerTwoPlayBtn.addEventListener("click", function () {
    if (playerTwoNameInput.value == "") {
        playerTwoNameError.style.display = "block";
    }
    else {
        playerTwoGameArea.style.display = "none";
        playerTwoChanceOne.style.display = "block";
        let playerTwoName = playerTwoHeading.innerHTML + ' ( ' + playerTwoNameInput.value + ' ) ';
        playerTwoHeading.innerHTML = playerTwoName;
    }
});
// ============================================================
// ======================= Player Two Chance =========================
playerTwoChanceOnePlayBtn.addEventListener("click", function () {
    let playerOneNumber = playerOneInput.value;
    let playerTwoNumber = playerTwoChanceOneInput.value;
    
    
    if (playerTwoChanceOneInput.value == "") {
        playerTwoChanceOneError.style.display = "block";
        playerTwoChanceOneError.innerHTML = "Number is Missing";
    }
    else if (!(playerTwoChanceOneInput.value - 15)) {
        console.log("Not a number");
        playerTwoChanceOneError.style.display = "block";
        playerTwoChanceOneError.innerHTML = "Invalid input";
    }
    else {       
        if (playerOneNumber === playerTwoNumber && counter <= 3) {
            console.log("Matched");
            playerTwoChanceOne.style.display = "none";
        }
        else if (playerOneNumber != playerTwoNumber && counter <= 3) {
            console.log(counter);
            counter++;   
            if(counter <= 3){
                playerTwoChanceNum.innerHTML = "Chance - " + counter;
            }         
        }
        if(counter > 3){
            console.log("Game Over");
            playerTwoChanceOne.style.display = "none";
        }        
    }
});
// ============================================================