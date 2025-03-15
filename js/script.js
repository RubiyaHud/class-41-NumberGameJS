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
let totalChance = 3;
// ============================================================
// ======================= Game Over =========================
let gameOver = document.querySelector(".gameOver");
let gameOverHeading = document.querySelector(".gameOverHeading");
let winnerName = document.querySelector(".winnerName");
let matchedOrUnmatched = document.querySelector(".matchedOrUnmatched");
let winnerEmoji = document.querySelector(".winnerEmoji");
let failedEmoji = document.querySelector(".failedEmoji");
// ==================================================================

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
        if (playerOneNumber === playerTwoNumber && counter <= totalChance) {
            console.log("Matched");
            playerTwoChance.style.display = "none";
            gameOver.style.display = "block";
            let winnerNam = "Winner is " + 'Player - 2 ("' + playerTwoNameInput.value + '")';
            winnerName.innerHTML = winnerNam;
            matchedOrUnmatched.innerHTML = "Number Matched!";
            winnerEmoji.style.display = "block";
            failedEmoji.style.display = "none";
        }
        else if (playerOneNumber != playerTwoNumber && counter <= totalChance) {
            console.log(counter);
            let chanceLeft = totalChance - counter;
            counter++;
            if (counter <= totalChance) {
                playerTwoChanceNum.innerHTML = "Chance - " + counter;
                playerTwoChanceError.style.display = "block";                
                playerTwoChanceError.innerHTML = "Wrong Guess! You have only " + chanceLeft + " chance left";
            }
        }
        if (counter > totalChance) {
            console.log("Not Matched");
            playerTwoChance.style.display = "none";
            gameOver.style.display = "block";
            matchedOrUnmatched.innerHTML = "Number Does not Match!";
            winnerEmoji.style.display = "none";
            failedEmoji.style.display = "block";
        }
    }
});
// ============================================================