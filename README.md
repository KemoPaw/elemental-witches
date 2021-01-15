# Elemental Witches

[Live Game](https://kemopaw.github.io/elemental-witches/)

"Elemental Witches" is done entirely in JavaScript, HTML, and CSS!

# Technology

The technologies used for this project are: 

  - JavaScript
  - HTML/CSS
  
# Challenges

One of the challenges with only working with "Vanilla Javascript" is how to keep track of variables while being able to dynamically change the CSS classes so that the player will know what button to press to match with the game. I decided on a default transparent background to encompass both the monster and the witch character, and created custom CSS classes that were switched on and off depending on either the user input, or the game adding a class to a monster and removing it change the color again. 

# Changing the Witch's Color:

### In CSS:

While the CSS for the witch was pretty barebones, I knew that to give the illusion of the player being able to change the witch's background color I would need to override the original background color with !important when a certain key is pressed.


```

#witch {
    height: 100px;
    width: 50px;
    top: 355px;
    left: 50px;
    padding: 0px;
    margin: 0px;
    position: relative;
    background-color:rgba(173, 168, 173, 0);
}

.witchMagenta {
    background-color: magenta!important;
}
 
.witchYellow {
    background-color: yellow!important;
}

.witchCyan {
    background-color: cyan!important;
}

```

### In JavaScript:

```
window.addEventListener("keydown", colorChange);
window.addEventListener("keyup", colorReset);


function colorReset() {
    witch.classList.remove("witchMagenta");
    witch.classList.remove("witchYellow");
    witch.classList.remove("witchCyan");
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
}
```

In the Javascript portion, I removed all possible background color "classes" from the witch whenever a button was released, while depending on the button pressed the CSS class that matches the color will be added on the screen.

# Visuals

I found it to be a fun time to implement my own art into the game by creating customized sprites! I simply went to [PixilArt](https://www.pixilart.com/draw) to create my assets, and exported them to add to my game! 

<img src="https://github.com/KemoPaw/elemental-witches/blob/gh-pages/EM-Picture.png" width="500" height="auto">


