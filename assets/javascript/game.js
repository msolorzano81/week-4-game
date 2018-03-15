// global variables

// crystal variables
var crystal = {
    blue:
    {
        value:0
    },
    green:
    {
        value: 0
    },
    red:
    {
        value: 0 
    },
    yellow:
    {
        value:0 
    }
};

// scores
var currentScore = 0;
var targetScore = 0;

// wins and losses
var wins = 0;
var losses = 0;

// Functions
var getRandom = function(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

var startGame = function(){
currentScore = 0;
targetScore = getRandom(19, 120);
crystal.blue.value = getRandom(1, 12);
crystal.green.value = getRandom(1, 12);
crystal.red.value = getRandom(1, 12);
crystal.yellow.value = getRandom(1, 12);

$("#currentScore").html(currentScore);
$("#targetScore").html(targetScore);

console.log("Target Score:" + targetScore);
console.log("Blue:" + crystal.blue.value + "| Green:" + crystal.green.value + "| Red:" + crystal.red.value + "| Yellow:" + crystal.yellow.value);

}

var addValues = function(crystal){
    currentScore = currentScore + crystal.value;
    $("#currentScore").html(currentScore);
    checkWin();


    console.log ("Your Score:" + currentScore);
    
}

var checkWin = function() {

    if(currentScore > targetScore) {
        alert("Sorry...You Lose!");
        console.log("You Lose!");
        losses++;
        $("#losses").html(losses);
        startGame();
    }
    else if (currentScore === targetScore){
         alert("You Won!");
         console.log("You Won!");
         wins++;
         $("#wins").html(wins);
         startGame();
    }

}

// click event function
startGame();

$("#blue").click(function(){
    addValues(crystal.blue);
});
$("#green").click(function(){
    addValues(crystal.green);
});
$("#red").click(function(){
    addValues(crystal.red);
});
$("#yellow").click(function(){
    addValues(crystal.yellow);
});

