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
let playerTwoChance = document.querySelector(".playerTwoChance");
let playerTwoHeading = document.querySelector(".playerTwoHeading");
let playerTwoChanceNum = document.querySelector(".playerTwoChanceNum");
let playerTwoChanceInput = document.querySelector(".playerTwoChanceInput");
let playerTwoChancePlayBtn = document.querySelector(".playerTwoChancePlayBtn");
let playerTwoChanceError = document.querySelector(".playerTwoChanceError");
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
        playerTwoChance.style.display = "block";
        let playerTwoName = playerTwoHeading.innerHTML + ' ( ' + playerTwoNameInput.value + ' ) ';
        playerTwoHeading.innerHTML = playerTwoName;
    }
});
// ============================================================
// ======================= Player Two Chance =========================
playerTwoChancePlayBtn.addEventListener("click", function () {
    let playerOneNumber = playerOneInput.value;
    let playerTwoNumber = playerTwoChanceInput.value;
    
    
    if (playerTwoChanceInput.value == "") {
        playerTwoChanceError.style.display = "block";
        playerTwoChanceError.innerHTML = "Number is Missing";
    }
    else if (!(playerTwoChanceInput.value - 15)) {
        console.log("Not a number");
        playerTwoChanceError.style.display = "block";
        playerTwoChanceError.innerHTML = "Invalid input";
    }
    else {       
        if (playerOneNumber === playerTwoNumber && counter <= 3) {
            console.log("Matched");
            playerTwoChance.style.display = "none";
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
            playerTwoChance.style.display = "none";
        }        
    }
});
// ============================================================