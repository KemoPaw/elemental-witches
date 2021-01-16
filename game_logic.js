window.addEventListener('DOMContentLoaded', (event) => {

    let witch = document.getElementById("witch");
    let monster = document.getElementById("monster");
    
    const startScreenInfo = document.getElementById("info-screen");
    const gameScreen =  document.getElementById("screen");
    const gameoverScreen =  document.getElementById("gameover-screen");
    const finalScore = document.getElementById("gameover-final-score");
    
    
    let gameSound = new Audio('bensound-smile.mp3');
    
    let counter = 0;
    let startGameCount = 0;

    
    let allowedToJump = true;
    let gameStarted = false;
    let restartGame = false;
    let playSound = false;

    window.addEventListener("keydown", startTheGame);
    window.addEventListener("keydown", restartTheGame);
    window.addEventListener("keydown", musicToggle);
    
    function startTheGame(e){ //Press Enter
        e.preventDefault();
        
        if (e.keyCode === 13 && gameStarted === false ) {
        gameStarted = true;
        startGameCount += 1;

        startGame();
    
        }}
    
    
    function restartTheGame(e) { // PRESS R
    
        e.preventDefault();
        if (e.keyCode === 82 && gameStarted == true ){

            restartGame = true;
            gameoverScreen.style.display = "none";
            gameScreen.style.display = "block";
    
            resetEventListener();
            startGame();
        }
    
    }
    
    function resetEventListener() {
        colorReset();
        resetMonColor();

        clearInterval(this.collision);
    }
    
    
    function musicToggle(e) {
    
        gameSound.volume = 0.1;
    
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
    
            setTimeout(function () {
                witch.classList.remove("animate");
            }, 500);
        }
    }
    
    let checkJump = setInterval(function() {
        if (allowedToJump == false){
            allowedToJump = true;
        }
    
    }, 500);
    
    function colorReset() {
        // setTimeout(sayHi, 5000);
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

    function addTestColor() {
        // const randMonsterColors = ["monsterMagenta", "monsterYellow", "monsterCyan"];
        let randomTestColor = "monsterCyan";
        // console.log(randomColor);
        return randomTestColor;
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
    
    function resetMonColor(){
        monster.classList.remove("monsterMagenta");
        monster.classList.remove("monsterYellow");
        monster.classList.remove("monsterCyan");
        monster.classList.remove("monsterOrange");
        monster.classList.remove("monsterPurple");
        monster.classList.remove("monsterGreen");
        monster.classList.remove("monsterGrey");
        monster.classList.remove("monsterBlack");
    
    }
    
    
    function startGame() {
    
        restartGame = false;

        if (startGameCount === 1){
                startScreenInfo.style.display = "none";
                gameScreen.style.display = "block";

                monster.classList.add("monsterMagenta");

        }

   

        window.addEventListener("keydown", jump);
        window.addEventListener("keydown", colorChange);
        window.addEventListener("keyup", colorReset);
    
        if (playSound === true) {
            gameSound.play();
        }

        let scoreCheck = setInterval(function(){
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter);
           
        }, 10);
        
    
        let collision = setInterval(function() {

        let witchTop = parseInt(window.getComputedStyle(witch).getPropertyValue("top"));
        let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue("left"));

        let monsterColor = window.getComputedStyle(monster).backgroundColor;
        let witchColor = window.getComputedStyle(witch).backgroundColor;
        
    
        if (counter === 0) {
            monster.classList.add("monsterMagenta");
        }

        if (monsterLeft >= 1100){
            monsterLeft = 50;
        } 
    
        if ( monsterLeft <= 50 && monsterLeft >= -50 && witchTop >= 300 && monsterColor === witchColor ){

            counter+=1;
    
            if (monsterColor && counter >= 1 && counter < 7 ) {
                resetMonColor();
                let newColor = addColor();
                monster.classList.add(newColor);
                monsterColor = newColor;
                colorReset();
            }
    
            if (monsterColor && counter >= 7 && counter < 13) {
                resetMonColor();
                let newAdvColor = addAdvColor();
                monster.classList.add(newAdvColor);
                monsterColor = newAdvColor;
                colorReset();
            }
    
            if (monsterColor && counter >= 13) {
                resetMonColor();
                let newDiffColor = addDiffColor();
                monster.classList.add(newDiffColor);
                monsterColor = newDiffColor;
                colorReset();
            }
        }
        else if (monsterLeft <= 50 && monsterLeft >= -50 && witchTop >= 300 && monsterColor !== witchColor){ //game over logic
            gameScreen.style.display = "none";
            gameoverScreen.style.display = "block";

            finalScore.textContent = counter;

            counter = 0;
            restartGame = true;
            clearInterval(collision);
        }
            }, 1500)
    
        }
    }
);



