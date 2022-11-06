// set variables
let randomLoc = Math.floor(Math.random() * 5);
let location_1 = randomLoc;
let location_2 = location_1 + 1;
let location_3 = location_2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

// set loop
while (isSunk == false) {
    guess = prompt("Ready, aim, Fiah! (Enter a number 0-6) : ");
    
    if(guess < 0 || guess > 6){
        alert("Please enter a valid cell number");
    } else {
        guesses += 1;

        if(guess == location_1 || guess == location_2 || guess == location_3){
            alert("HIT!");
            hits += 1;
            if(hits == 3){
                isSunk = true;
                alert("You sunk my battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}

let stats = "You took " + guesses + "guesses to sink the battleship, "+
            "which means your shooting accuracy was " + (3/guesses) +"%.";

alert(stats);