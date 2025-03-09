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
    }
});
// ============================================================