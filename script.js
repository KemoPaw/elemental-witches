const witch = document.getElementById("witch");
const monster = document.getElementById("monster");

const startScreenInfo = document.getElementById("info-screen");
const gameScreen =  document.getElementById("screen");
const gameoverScreen =  document.getElementById("gameover-screen");
const finalScore = document.getElementById("gameover-final-score");




let counter = 0;
const keys = [];

let allowedToJump = true;
let startGame = false;
let restartGame = false;

// console.log(startGame);

// document.getElementsByClassName("info-screen").style.display = "block";

//  gameScreen.style.display = "block";
// startScreenInfo.style.display = "none";


function startTheGame(e){
    e.preventDefault();

    if (e.keyCode === 13 && startGame === false) {
    startGame = true;
    // console.log(startGame);

    gameScreen.style.display = "block";
    startScreenInfo.style.display = "none";
    console.log("Start the first game!")
    checkHit();
    }

    // else if (e.keyCode === 13){
       
            // restartGame = true;
            // startGame = true;
            // startGame = true;

            // startGame = true;

            // gameoverScreen.style.display = "none";
            // gameScreen.style.display = "block";
            // checkHit();
            // console.log("Hello from start the game");
    // }

}

function restartTheGame(e) { // PRESS R
    e.preventDefault();
    if (e.keyCode === 82){
        restartGame = true;

        gameoverScreen.style.display = "none";
        gameScreen.style.display = "block";

        // resetEventListener();
        // console.log(allowedToJump);
        finalScore.textContent = 0;
        console.log(finalScore.textContent);

        // allowedToJump = true;
        // console.log(witchTop);
    // console.log(monsterLeft);


        checkHit();
        // location.reload();
        console.log("Hello from restart the game");
        // console.log(counter);

    }

}

function resetEventListener() {

    window.removeEventListener("keydown", startTheGame);
    window.removeEventListener("keydown", restartTheGame);
    window.removeEventListener("keydown", jump);
    window.removeEventListener("keydown", colorChange);
    window.removeEventListener("keyup", colorReset);
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

function resetColor(){
    monster.classList.remove("monsterMagenta");
    monster.classList.remove("monsterYellow");
    monster.classList.remove("monsterCyan");
    monster.classList.remove("monsterOrange");
    monster.classList.remove("monsterPurple");
    monster.classList.remove("monsterGreen");

}

// let noGame = console.log("game not started");

function checkHit() {
    if (startGame || restartGame) {
    setInterval(function() {
            // console.log("inside the game")

    // console.log("Game Start!")
    let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));
    
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

        console.log(finalScore.textContent);

    // console.log(monster.style.animation);
    // console.log(witch.style)


    if (counter === 0) {
        monster.classList.add("monsterMagenta");
        // console.log("counter is zero");
        // console.log(monster.style.animation);
        
        if (monster.style.animation === "none") {
            monster.style.animation = "0s ease 0s 1 normal none running none";
        }
    }

    let monsterColor = window.getComputedStyle(monster).backgroundColor;
    let witchColor = window.getComputedStyle(witch).backgroundColor;

    if (monsterLeft < 100 && monsterLeft > 0 && witchTop >= 300  && monsterColor === witchColor){
        counter+=1;

        if (monsterColor && counter >= 1) {
            resetColor();
            let newColor = addColor();
            monster.classList.add(newColor);
            monsterColor = newColor;
        console.log("baby levels");

        }

        if (monsterColor && counter >= 5) {
            resetColor();
            let newAdvColor = addAdvColor();
            monster.classList.add(newAdvColor);
            monsterColor = newAdvColor;
            console.log("adv levels");

        }
       
    }
    else if (monsterLeft < 100 && monsterLeft > 50 && witchTop >= 300 && monsterColor !== witchColor){
        console.log(monster.style.animation);

        // monster.style.animation = "none";
        console.log(monster.style.animation);
        finalScore.textContent = counter;
        // alert("Game Over. score: " + counter);
        // monster.style.animation = "block 1s infinite linear";
        gameScreen.style.display = "none";
        gameoverScreen.style.display = "block";
        console.log(counter);
        counter = 0;
        restartGame = true;


        console.log("Game Over! Counter is zero now!");
        // clearInterval(checkHit);

    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter); //(counter / 100);

        }, 70)

    }

    else {
        console.log("game not started");
    }
} 

