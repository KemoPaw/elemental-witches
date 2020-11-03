var witch = document.getElementById("witch");
var monster = document.getElementById("monster");
// var counter = 0;
function jump() {
    if (witch.classList == "animate") { return }
    witch.classList.add("animate");
    setTimeout(function () {
        witch.classList.remove("animate");
    }, 300);
}