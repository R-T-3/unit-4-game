// set random target number between 19-120
// set random values for each crystal each 1-12
// set event keys for crystals
// add crystal values and append to score
// compare target number to score
// set win loss conditionals
// keep track of wins and losses
// reset target number, score, and crystal values every game

$(window).load(function() {
  var targetNum = Math.floor((Math.random()* 120-19)+ 19);
  console.log(targetNum);
  $("#targetNum").html(targetNum);
  
  var totalScore = 0;
  $("#totalScore").html(totalScore);
  
  var crystal1 = Math.floor((Math.random() * 12 - 1)+ 1);
  var crystal2 = Math.floor((Math.random() * 12 - 1)+ 1);
  var crystal3 = Math.floor((Math.random() * 12 - 1)+ 1);
  var crystal4 = Math.floor((Math.random() * 12 - 1)+ 1);
  
  var wins = 0;
  $("#wins").html("Wins: " + wins);

  var losses = 0;
  $("#losses").html("Losses: " + losses);

  $("#crystal1").on("click", function() {
    totalScore += crystal1;

    if (totalScore === targetNum) {
      wins++;
      resetGame();
    }
    else if (totalScore > targetNum) {
      losses++;
      resetGame();
    }
  })

  $("#crystal2").click(function() {
    console.log("im working");
    totalScore += crystal2;

    if (totalScore === targetNum) {
      wins++;
      resetGame();
    }
    else if (totalScore > targetNum) {
      losses++;
      resetGame();
    }
  })

  $("#crystal3").on("click", function() {
    totalScore += crystal3;

    if (totalScore === targetNum) {
      wins++;
      resetGame();
    }
    else if (totalScore > targetNum) {
      losses++;
      resetGame();
    }
  })

  $("#crystal4").on("click", function() {
    totalScore += crystal4;

    if (totalScore === targetNum) {
      wins++;
      resetGame();
    }
    else if (totalScore > targetNum) {
      losses++;
      resetGame();
    }
  })

  function resetGame() {
    totalScore = 0;
    targetNum = Math.floor((Math.random() * 120 - 19)+ 19);
    crystal1 = Math.floor((Math.random() * 12 - 1)+ 1);
    crystal2 = Math.floor((Math.random() * 12 - 1)+ 1);
    crystal3 = Math.floor((Math.random() * 12 - 1)+ 1);
    crystal4 = Math.floor((Math.random() * 12 - 1)+ 1);
  }
})
  
  
  
  
  
  
  








