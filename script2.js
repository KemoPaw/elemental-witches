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
    let startGame = false;
    let restartGame = false;
    let playSound = false;

    window.addEventListener("keydown", startTheGame);
    window.addEventListener("keydown", restartTheGame);
    window.addEventListener("keydown", musicToggle);

    
    
    function startTheGame(e){ //Press Enter
        e.preventDefault();
        
        if (e.keyCode === 13 && startGame === false ) {
        startGame = true;
        startGameCount += 1;

        
    
        checkHit();
    
        }}
    
    
    function restartTheGame(e) { // PRESS R
    
        e.preventDefault();
        if (e.keyCode === 82 && startGame == true ){

            restartGame = true;
            gameoverScreen.style.display = "none";
            gameScreen.style.display = "block";
    
            resetEventListener();
            checkHit();
    
            
            // location.reload();

    
        }
    
    }
    
    function resetEventListener() {
    
        // window.removeEventListener("keydown", startTheGame);
        // window.removeEventListener("keydown", restartTheGame);
        // window.removeEventListener("keydown", jump);
        // window.removeEventListener("keydown", colorChange);
        // window.removeEventListener("keyup", colorReset);
        colorReset();
        resetMonColor();

        // clearInterval(this.scoreTimer)

        clearInterval(this.collision);
            // let collisionCleared = true;
        // console.log("cleared collision");
    

        // if (collisionCleared) {
        //     console.log("cleared collision")
        // }
    
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

             // console.log(allowedToJump);
        // witch.classList.add("witchOrange");
    
    
            setTimeout(function () {
                witch.classList.remove("animate");

                //  witch.classList.remove("witchOrange");
    
    
            }, 500);
        }
    }
    
    let checkJump = setInterval(function() {
        if (allowedToJump == false){
            allowedToJump = true;
        }
    
    }, 500);

    // function sayHi() {
    //     console.log('Hello');

    // }
    
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
    
    
    function checkHit() {
    
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
        let witchRight = parseInt(window.getComputedStyle(witch).getPropertyValue("right"));
        let witchLeft = parseInt(window.getComputedStyle(witch).getPropertyValue("left"));

        // console.log(witchRight);
        // console.log(witchLeft);



        let monsterColor = window.getComputedStyle(monster).backgroundColor;
        let witchColor = window.getComputedStyle(witch).backgroundColor;
        
        // document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    
        if (counter === 0) {
            // resetMonColor();

            monster.classList.add("monsterMagenta");
            //   console.log("magenta");
            // console.log("MONSTER LEFT magenta:  " + monsterLeft);

            // console.log(monsterColor);
            // console.log(monsterLeft);
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
                    //    console.log("MONSTER LEFT  score:  " + monsterLeft);
                // console.log("baby levels");
    
            }
    
            if (monsterColor && counter >= 7 && counter < 13) {
                resetMonColor();
                let newAdvColor = addAdvColor();
                monster.classList.add(newAdvColor);
                monsterColor = newAdvColor;
                colorReset();
                    //    console.log("MONSTER LEFT  score:  " + monsterLeft);
                // console.log("adv levels");
    
            }
    
            if (monsterColor && counter >= 13) {
                resetMonColor();
                let newDiffColor = addDiffColor();
                monster.classList.add(newDiffColor);
                monsterColor = newDiffColor;
                colorReset();
                    //    console.log("MONSTER LEFT  score:  " + monsterLeft);
                // console.log("diff levels");
    
            }
        }
        else if (monsterLeft <= 50 && monsterLeft >= -50 && witchTop >= 300 && monsterColor !== witchColor){
            // console.log("game over");
            // console.log("mon color  gameover:  " + monsterColor);
            // console.log("witch color gameover:   " + witchColor);
            // console.log("witch left  gameover:  " + witchLeft);
            // console.log("witch right gameover:   " + witchRight);
            // console.log("mon left gameover:   " + monsterLeft);

    
   
            gameScreen.style.display = "none";
            gameoverScreen.style.display = "block";
            // console.log(counter);
            finalScore.textContent = counter;

            counter = 0;
            restartGame = true;
            clearInterval(collision);

    
        }

      

        // else{
        //     console.log("mon color   " + monsterColor);
        //     console.log("witch color   " + witchColor);
        //     console.log("witch left   " + witchLeft);
        //     console.log("witch right   " + witchRight);
        //     console.log("mon left   " + monsterLeft);

        // }

        // console.log("reseted interval");
        // console.log(monsterLeft);

        // timerSample += 1;
        // console.log(timerSample);

    
            }, 1500)
    
        }
    }


    // console.log('DOM fully loaded and parsed');
);



