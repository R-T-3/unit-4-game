// set random target number between 19-120
// set random values for each crystal each 1-12
// set event keys for crystals
// add crystal values and append to score
// compare target number to score
// set win loss conditionals
// keep track of wins and losses
// reset target number, score, and crystal values every game

$(document).ready(function() {
  
  var targetNum = Math.floor((Math.random()* 120-19)+ 19);
  $("#targetNum").html(targetNum);
  
  var totalScore = 0;
  $("#totalScore").html(totalScore);
  
  var crystal1 = Math.floor((Math.random() * 12 - 1)+ 1);
  var crystal2 = Math.floor((Math.random() * 12 - 1)+ 1);
  var crystal3 = Math.floor((Math.random() * 12 - 1)+ 1);
  var crystal4 = Math.floor((Math.random() * 12 - 1)+ 1);
  
  var winsCounter = 0;
  $("#wins").text("Wins:    " + winsCounter);

  var lossCounter = 0;
  $("#losses").text("Losses:    " + lossCounter);

  $("#crystal1").on("click", function() {
    totalScore += crystal1;
    $("#totalScore").text(totalScore);

    if (totalScore === targetNum) {
      winsCounter++;
      $("#wins").text("Wins:    " + winsCounter);
      resetGame();
    }
    else if (totalScore > targetNum) {
      lossCounter++;
      $("#losses").text("Losses:    " + lossCounter);
      resetGame();
    }
  })

  $("#crystal2").on("click", function() {
    totalScore += crystal2;
    $("#totalScore").text(totalScore);

    if (totalScore === targetNum) {
      winsCounter++;
      $("#wins").text("Wins:    " + winsCounter);
      resetGame();
    }
    else if (totalScore > targetNum) {
      lossCounter++;
      $("#losses").text("Losses:    " + lossCounter);
      resetGame();
    }
  })

  $("#crystal3").on("click", function() {
    totalScore += crystal3;
    $("#totalScore").text(totalScore);

    if (totalScore === targetNum) {
      winsCounter++;
      $("#wins").text("Wins:    " + winsCounter);
      resetGame();
    }
    else if (totalScore > targetNum) {
      lossCounter++;
      $("#losses").text("Losses:    " + lossCounter);
      resetGame();
    }
  })

  $("#crystal4").on("click", function() {
    totalScore += crystal4;
    $("#totalScore").text(totalScore);

    if (totalScore === targetNum) {
      $("#wins").text("Wins:    " + winsCounter);
      winsCounter++;
      resetGame();
    }
    else if (totalScore > targetNum) {
      lossCounter++;
      $("#losses").text("Losses:    " + lossCounter);
      resetGame();
    }
  })

  function resetGame() {
    console.log("yoyoyoyo");
    totalScore = 0;
    $("#totalScore").text(totalScore);
    targetNum = Math.floor((Math.random() * 120 - 19)+ 19);
    crystal1 = Math.floor((Math.random() * 12 - 1)+ 1);
    crystal2 = Math.floor((Math.random() * 12 - 1)+ 1);
    crystal3 = Math.floor((Math.random() * 12 - 1)+ 1);
    crystal4 = Math.floor((Math.random() * 12 - 1)+ 1);
  }
})
  
  
  
  
  
  
  








