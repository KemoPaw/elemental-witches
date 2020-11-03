var witch = document.getElementById("witch");
var monster = document.getElementById("monster");
var counter = 0;

function jump() {
    if (witch.classList === "animate") { return }
    witch.classList.add("animate");
    setTimeout(function () {
        witch.classList.remove("animate");
    }, 500);
}

let checkHit = setInterval(function () {
    let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
    let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));
    if (monsterLeft < 100 && monsterLeft > -100 && witchTop >= 400){
        monster.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        monster.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 20);