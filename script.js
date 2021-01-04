const witch = document.getElementById("witch");
const monster = document.getElementById("monster");

let counter = 0;
const keys = [];

let allowedToJump = true;


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

let checkHit = setInterval(function() {
    let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));

    
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

    if (counter === 0) {
        monster.classList.add("monsterMagenta");
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
        }

        if (monsterColor && counter >= 5) {
            resetColor();
            let newAdvColor = addAdvColor();
            monster.classList.add(newAdvColor);
            monsterColor = newAdvColor;
        }
       
    }
    else if (monsterLeft < 100 && monsterLeft > 50 && witchTop >= 300 && monsterColor !== witchColor){
        monster.style.animation = "none";
        alert("Game Over. score: " + counter);
        counter = 0;
        monster.style.animation = "block 1s infinite linear";
        location.reload();
    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter); //(counter / 100);

}, 70);