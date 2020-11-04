const witch = document.getElementById("witch");
const monster = document.getElementById("monster");
var counter = 0;
const keys = [];




window.addEventListener("keydown", jump);

window.addEventListener("keydown", colorChange);
window.addEventListener("keyup", colorReset);


function jump(e) {
    if (witch.classList === "animate" && e.keyCode === 32) { return }
    witch.classList.add("animate");

    setTimeout(function () {
        witch.classList.remove("animate");
    }, 500);
}


function colorReset() {
    witch.classList.remove("witchMagenta");
    witch.classList.remove("witchYellow");
    witch.classList.remove("witchCyan");

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

        // case 83: 
        //         witch.classList.add("witchYellow");
        // case 68: 
        //         witch.classList.remove("witchMagenta");
        //         witch.classList.remove("witchYellow");
        //      witch.classList.add("witchCyan");
}
// window.addEventListener("keyup", function (e) {
//     delete keys[e.keyCode];
// });



let checkHit = setInterval(function () {
    let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));
    // let witchColor = witch.getPropertyValue("background-color");
    // let monsterColor = monster.getPropertyValue("background-color")
    if (monsterLeft < 100 && monsterLeft > -100 && witchTop >= 400){
        monster.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        monster.style.animation = "block 1s infinite linear";
    }
    // } else if (witchColor === monsterColor) {
    //     counter--;
    //     document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    // }
    else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 20);