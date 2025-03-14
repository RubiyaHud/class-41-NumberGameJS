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
    else if(playerOneInput.value <1 || playerOneInput.value > 10)   {
        playerOneError.style.display = "block";
        playerOneError.innerHTML = "Out of Range!";
    }
    else if (playerOneInput.value - 15) {
        console.log("It's a number");
        playerOnegameArea.style.display = "none";
        playerTwoGameArea.style.display = "block";
        
    }
    else{
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
        // playerOnegameArea.style.display = "block";
        // let h = playerOneHeading.innerHTML + ' ( ' + nameInput.value + ' ) ';
        // playerOneHeading.innerHTML = h;
    }
});
// ============================================================
