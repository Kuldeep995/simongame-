
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var level=0;
var userClickedPattern = [];

$("body").keydown(function(event){
  if(event.key=="a")
  {

    nextSequence();
}
});

$(".btn").click(function(){

 userClickedPattern.push(this.id);
 console.log(userClickedPattern);
 animatePress(this.id);

playSound(this.id);

  checkAnswer(userClickedPattern.length-1);

});

function animatePress(currentColour)
{

   $("#"+currentColour).addClass("pressed");

   setTimeout(function(){$("#"+currentColour).removeClass("pressed");}, 100);

}
function nextSequence() {
$("h1").text("Level " + level);
level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  console.log("gamePattern");
console.log(gamePattern);
}

function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel]!=userClickedPattern[currentLevel])
  {
    console.log("wrongPattern");

   $("h1").text("wrong answer, press key (a) to restart");
playSound("wrong");

$("body").addClass("game-over");

setTimeout(function(){$("body").removeClass("game-over");}, 200);

      setTimeout(function(){startOver();}, 2000);

  }
  else
  {
    console.log("success");
  }
  if(currentLevel==level-1)
  {
    userClickedPattern=[];
    setTimeout(function(){nextSequence();}, 1000);



  }


}

function startOver()
{

  gamePattern=[];
  userClickedPattern=[];
  level=0;
}

function playSound(i)
{
  var audio = new Audio("sounds/"+ i+ ".mp3");
  audio.play();

}
