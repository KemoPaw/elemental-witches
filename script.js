const witch = document.getElementById("witch");
const monster = document.getElementById("monster");

const startScreenInfo = document.getElementById("info-screen");
const gameScreen =  document.getElementById("screen");
const gameoverScreen =  document.getElementById("gameover-screen");
const finalScore = document.getElementById("gameover-final-score");


let gameSound = new Audio('bensound-smile.mp3');

let counter = 0;
const keys = [];

let allowedToJump = true;
let startGame = false;
let restartGame = false;
let playSound = true;


// console.log(startGame);

// document.getElementsByClassName("info-screen").style.display = "block";

//  gameScreen.style.display = "block";
// startScreenInfo.style.display = "none";


function startTheGame(e){
    e.preventDefault();

    if (e.keyCode === 13 && startGame === false) {
    startGame = true;
    // console.log(startGame);
    // console.log(startScreenInfo.style.display);


    startScreenInfo.style.display = "none";
    // console.log(startScreenInfo.style.display);
    // console.log(gameScreen.style.display);

    gameScreen.style.display = "block";
    // console.log("Start the first game!")
    checkHit();
    }

}

function restartTheGame(e) { // PRESS R

    e.preventDefault();
    if (e.keyCode === 82 && startGame == true){
        restartGame = true;

        gameoverScreen.style.display = "none";
        gameScreen.style.display = "block";

        // console.log(allowedToJump);
        finalScore.textContent = 0;
        // console.log(finalScore.textContent);
        resetEventListener();
        checkHit();
        // location.reload();
        // console.log("Hello from restart the game");
        // console.log(counter);

    }

}

function resetEventListener() {

    // window.removeEventListener("keydown", startTheGame);
    // window.removeEventListener("keydown", restartTheGame);
    // window.removeEventListener("keydown", jump);
    // window.removeEventListener("keydown", colorChange);
    // window.removeEventListener("keyup", colorReset);
    colorReset();
    resetColor();

}

// if (startGame === false) {
//     startTheGame();
// }


window.addEventListener("keydown", startTheGame);
window.addEventListener("keydown", restartTheGame);
window.addEventListener("keydown", jump);
window.addEventListener("keydown", colorChange);
window.addEventListener("keyup", colorReset);
window.addEventListener("keydown", musicToggle);

function musicToggle(e) {

    if(e.keyCode === 77 && playSound === true) {
        gameSound.pause();
        gameSound.currentTime = 0;
        playSound = false;
    }

    else if (e.keyCode === 77 && playSound === false) {
        gameSound.play();
        playSound = true;
    }
}
function jump(e) {
    if (e.keyCode === 32 && allowedToJump === true){
        if (witch.classList === "animate") { return }
        witch.classList.add("animate");
        allowedToJump = false;
        // console.log(allowedToJump);
        // witch.classList.add("witchOrange");


        setTimeout(function () {
            witch.classList.remove("animate");
            // witch.classList.remove("witchOrange");


        }, 500);
    }
}

let checkJump = setInterval(function() {
    if (allowedToJump == false){
        allowedToJump = true;
    }

}, 500);

function colorReset() {
    witch.classList.remove("witchMagenta");
    witch.classList.remove("witchYellow");
    witch.classList.remove("witchCyan");
    witch.classList.remove("witchOrange");
    witch.classList.remove("witchGreen");
    witch.classList.remove("witchPurple");
    witch.classList.remove("witchGrey");
    witch.classList.remove("witchBlack");

}

function colorChange(e) {
    // switch(e.keyCode) {
    if (e.keyCode === 65){
        witch.classList.add("witchMagenta");

    }

    if (e.keyCode === 83) {
        witch.classList.add("witchYellow");

    }

    if (e.keyCode === 68) {
        witch.classList.add("witchCyan");

    }

    if (e.keyCode === 90) {
        witch.classList.add("witchOrange");

    }

    if (e.keyCode === 88) {
        witch.classList.add("witchGreen");

    }

    if (e.keyCode === 67) {
        witch.classList.add("witchPurple");

    }

    if (e.keyCode === 86) {
        witch.classList.add("witchGrey");

    }

    if (e.keyCode === 66) {
        witch.classList.add("witchBlack");

    }
}

function addColor() {
    const randMonsterColors = ["monsterMagenta", "monsterYellow", "monsterCyan"];
    let randomColor = randMonsterColors[Math.floor(Math.random() * randMonsterColors.length)];
    // console.log(randomColor);
    return randomColor;
}

function addAdvColor() {
    const randAdvMonsterColors = ["monsterMagenta", "monsterYellow", "monsterCyan", "monsterOrange", "monsterGreen", "monsterPurple"];
    let randomAdvColor = randAdvMonsterColors[Math.floor(Math.random() * randAdvMonsterColors.length)];
    // console.log(randomColor);
    return randomAdvColor;
}

function addDiffColor() {
    const randDiffMonsterColors = ["monsterMagenta", "monsterYellow", "monsterCyan", "monsterOrange", "monsterGreen", "monsterPurple", "monsterGrey", "monsterBlack"];
    let randomDiffColor = randDiffMonsterColors[Math.floor(Math.random() * randDiffMonsterColors.length)];
    // console.log(randomColor);
    return randomDiffColor;
}

function resetColor(){
    monster.classList.remove("monsterMagenta");
    monster.classList.remove("monsterYellow");
    monster.classList.remove("monsterCyan");
    monster.classList.remove("monsterOrange");
    monster.classList.remove("monsterPurple");
    monster.classList.remove("monsterGreen");
    monster.classList.remove("monsterGrey");
    monster.classList.remove("monsterBlack");

}

// let noGame = console.log("game not started");

function checkHit() {
    if (startGame || restartGame) {
    // console.log("inside checkhit");

    restartGame = false;
    if (playSound === true) {
        gameSound.play();
        // playSound = false;
    }
    

    let collision = setInterval(function() {

    // console.log("inside colli");

            // console.log("inside the game")

    // console.log("Game Start!")
    let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));
    
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

    if (counter === 0) {
        monster.classList.add("monsterMagenta");
        // console.log("Monster bg color is shown to be magenta");
    }

    let monsterColor = window.getComputedStyle(monster).backgroundColor;
    let witchColor = window.getComputedStyle(witch).backgroundColor;

    if (monsterLeft < 100 && monsterLeft > 0 && witchTop >= 300  && monsterColor === witchColor ){

        counter+=1;

        if (monsterColor && counter >= 1 && counter < 7 ) {
            resetColor();
            let newColor = addColor();
            monster.classList.add(newColor);
            monsterColor = newColor;
            // console.log("baby levels");

        }

        if (monsterColor && counter >= 7 && counter < 13) {
            resetColor();
            let newAdvColor = addAdvColor();
            monster.classList.add(newAdvColor);
            monsterColor = newAdvColor;
            // console.log("adv levels");

        }

        if (monsterColor && counter >= 13) {
            resetColor();
            let newDiffColor = addDiffColor();
            monster.classList.add(newDiffColor);
            monsterColor = newDiffColor;
            // console.log("diff levels");

        }
    }
    else if (monsterLeft < 100 && monsterLeft > 50 && witchTop >= 300 && monsterColor !== witchColor){
        // console.log(monster.style.animation);
        // console.log(monsterColor);

        // monster.style.animation = "none";
        // console.log(monster.style.animation);
        // console.log(monsterLeft);
        // console.log(witchTop);
        // console.log("monster color =" + monsterColor);
        // console.log("witch color =" + witchColor);
        finalScore.textContent = counter;
        // alert("Game Over. score: " + counter);
        // monster.style.animation = "block 1s infinite linear";
        gameScreen.style.display = "none";
        gameoverScreen.style.display = "block";
        // console.log(counter);
        counter = 0;
        restartGame = true;


        // console.log("Game Over! Counter is zero now!");
        resetColor();
        colorReset();
        clearInterval(collision);


        // clearInterval(checkHit);

    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter); //(counter / 100);

        }, 70)

    }

    else {
        // console.log("game not started");
    }
} 

