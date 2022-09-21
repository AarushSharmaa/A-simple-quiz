
// taking input from the user - readline takes input from user
// importing readline-sync
var readlineSync = require("readline-sync");

// initialising score to 0
var score = 0;

// highscore database
var highScores = [
  {
    name: "Mukesh",
    score: 1,
  },

  {
    name: "Anjali",
    score: 2,
  },
  {
    name: "Don Number 1",
    score: 4,
  },
  {
    name: "Shah Rukh Khan",
    score: 5,
  }
]

// array of objects containing questions and answers
var questions = [{
  question: "Where do I live? ",
  answer: "Patna"
}, {
  question: "My favorite number is? ",
  answer: "6"
},
{
  question: "What is my favourite food? ",
  answer: "Biryani"
},
{
  question: "What is my favourite SRK movie? ",
  answer: "Swades"
},
{
  question: "Do I find Web Development interesting(Yes or No)? ",
  answer: "Yes"
}];

// taking input then displaying it
function greetings() {
  var playerName = readlineSync.question("Hello. May I know your name? ");

  console.log("Welcome " + playerName + " to DO YOU KNOW AARUSH? A fun way to know me if you don't. And if you do, a fun way to check it.");
}

function play(question, answer) {
  
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

// playing the quiz
function game() {
  // traversing over the questions database
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    // passing the current question and answer to another function
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// for displaying the final scores
function displayScores() {
  console.log("YAY! You SCORED: ", score);
  console.log("The maximum possible score was 5");

  console.log("If your score is not updated, let me know : I will do the needful");
  console.log("Score History : ");
  highScores.map(score => console.log(score.name, " : ", score.score))
}


greetings(); // calling the function to display welcome message

game(); // calling the function to start the game 

displayScores(); // calling the function to display final scores