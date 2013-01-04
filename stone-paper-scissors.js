// Global Variables
// string -> var; var; var; var
// userWeaponName initiated to "" because the codecademy
// scratchpad doesn't seem to forget choices & variable
// initialisations from previous runs
var userWeaponName = "";
var userWeapon;
var computerWeapon;
var clashOutcome;
 
// Game Logic
// object-literal -> var; array -> var; array -> var
var weaponNameToGameLogicTranslation = {"rock" : 0, "paper" : 1, "scissors" : 2};
var weaponLogicalNumberUserTranslation = ["rock", "paper", "scissors"];
var clashOutcomeLogicalNumberUserTranslation = ["It's a tie!", "You Win!", "Computer Wins"];
 
// Functions
// Randomise Computer's Choice
// function int -> operator -> function -> var -> function
var computerWeapon = function() {
    return Math.floor(Math.random()*3);
};
 
// Get User's Choice
// User Input -> var -> object-literal -> var -> function
var userWeapon = function () {
   while (!(userWeaponName in weaponNameToGameLogicTranslation)) {
       userWeaponName = prompt("Do you choose rock, paper or scissors?");
   }
   return weaponNameToGameLogicTranslation[userWeaponName];
};
 
// Determine Result
// (var, var, int, int, operators) -> var
var clashOutcome = (userWeapon() + (3 - computerWeapon())) % 3;
 
// Display Results
document.write("Your choice: " + weaponLogicalNumberUserTranslation[userWeapon()] + "<br>"); 
document.write("Computer's choice: " + weaponLogicalNumberUserTranslation[computerWeapon()] + "<br>"); 
document.write("Result: "+ clashOutcomeLogicalNumberUserTranslation[clashOutcome] + "<br>"); 
