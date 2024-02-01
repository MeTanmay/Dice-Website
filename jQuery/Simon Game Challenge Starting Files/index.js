var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern =[];
userClickedPattern=[];
var started = false;
var level = 0;

// nextSequence();

$(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1); 
});

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        // console.log("success");
        // console.log(gamePattern[currentLevel]);
        // console.log(userClickedPattern[currentLevel]);
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        // console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor((Math.random()*4));
    var randomChosenColour=buttonColours[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
}

function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColor).removeClass('pressed');
    }, 100);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}




