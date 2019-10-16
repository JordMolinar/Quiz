

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
};


function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;


  if (question1 == "null means absence of a value") {
    correct++;
  }
  if (question2 == "Var") {
    correct++;
  }
  if (question3 == "False") {
    correct++;
  }


  var pictures = [
    "https://media.tenor.com/images/9d8a44c47d4b39e2cbabdda61059fbcf/tenor.gif",

    "https://media.tenor.com/images/e53ac87e67659dd7d0ffb69952bf3fc5/tenor.gif",

    "https://media.tenor.com/images/61e6a98b56798085b1adfe5ec7eda00b/tenor.gif",
  ];
  var messages = [
    "You won wooo!",
    "Almost",
    "You lose lol"
  ];
  var score;

  if (correct == 0) {
    score = 2;
  }

  if (correct > 0 && correct < 3) {
    score = 1;
  }

  if (correct == 3) {
    score = 0;
  }


  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];
}
