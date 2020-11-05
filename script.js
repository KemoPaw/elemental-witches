const witch = document.getElementById("witch");
const monster = document.getElementById("monster");
// let monsterColor = window.getComputedStyle(monster).backgroundColor;
let counter = 0;
const keys = [];




window.addEventListener("keydown", jump);

window.addEventListener("keydown", colorChange);
window.addEventListener("keyup", colorReset);


function jump(e) {
    if (e.keyCode === 32){
        if (witch.classList === "animate") { return }
        witch.classList.add("animate");
        // witch.classList.add("witchOrange");


        setTimeout(function () {
            witch.classList.remove("animate");
            // witch.classList.remove("witchOrange");

        }, 500);
    }
   
}


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

    // if (e.keyCode === 65 && e.keyCode === 83) {
    //     witch.classList.add("witchOrange");

    // }

        // case 83: 
        //         witch.classList.add("witchYellow");
        // case 68: 
        //         witch.classList.remove("witchMagenta");
        //         witch.classList.remove("witchYellow");
        //      witch.classList.add("witchCyan");
}




let checkHit = setInterval(function() {
    let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));
    let monsterColor = window.getComputedStyle(monster).backgroundColor;
    let witchColor = window.getComputedStyle(witch).backgroundColor;

    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);

    if (monsterLeft < 100 && monsterLeft > 50 && witchTop >= 400  && monsterColor === witchColor){
        counter+=1;
    }
    else if (monsterLeft < 100 && monsterLeft > 50 && witchTop >= 400 && monsterColor !== witchColor){
        monster.style.animation = "none";
        alert("Game Over. score: " + counter);
        counter = 0;
        monster.style.animation = "block 1s infinite linear";
        location.reload();
    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter); //(counter / 100);

}, 70);