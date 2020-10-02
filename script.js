
var timer = 20;
var score=0;
var totalScore = 0;
var isWrong = false;

//current index of myQuestions
var i = 0;

//Buttons
var startbtn = document.getElementById('start-btn');
var submitbtn = document.getElementById('submit');

//Divs
var questionBox = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-button');
var timeDisplay = document.getElementById('timer');
var resultsDisplay = document.getElementById('result-page');
var scoresDisplay = document.getElementById('highscore-page')
var yourScore = document.getElementById('your-score');
var highscoreList = document.getElementById('highscore-list');

//button event listeners
startbtn.addEventListener('click', startQuiz);
submitbtn.addEventListener('click', function(event){
  storeScore(document.getElementById('initials').value);
});


//An array of objects where each set of question answers is also an array of objects
const myQuestions = [
    {
      question: "Inside which HTML element do we put the Javascript?",
      answers: [
        {answerTxt: "a. <js>", correct: false},
        {answerTxt: "b. <javascript>" , correct: false},
        {answerTxt: "c. <script>", correct: true},
        {answerTxt: "d. <scripting>", correct: false}
    ],

    },
    {
      question: "Where is the correct place to insert JavaScript?",
      answers: [
        {answerTxt: "a. The <head> section", correct: false},
        {answerTxt: "b. The <head> and <body> are both correct", correct: true},
        {answerTxt: "c. The <body> section", correct: false},
        {answerTxt: "d. Anywhere", correct: false}
      ],

    },
    {
      question: "What is the correct syntax for referring to an external script?",
      answers: [
        {answerTxt: "a. <script href= 'xyz.js'>", correct: false},
        {answerTxt: "b. <script source= 'xyz.js'>", correct: false},
        {answerTxt: "c. <script name= 'xyz.js'>", correct: false},
        {answerTxt: "d. <script src= 'xyz.js'>", correct: true}
      ]

    },
    {
      question: "How do you write 'Hello World to an alert box'?",
      answers: [
        {answerTxt: "a. alert('Hello World')", correct: true},
        {answerTxt: "b. prompt('Hello World')", correct: false},
        {answerTxt: "c. msg('Hello World')", correct: false},
        {answerTxt: "d. alertBox('Hello World')", correct: false}
      ]

    },

    {
      question: "How do you write a function in JavaScript?",
      answers: [
        {answerTxt: "a. var function = myFunction()", correct: false},
        {answerTxt: "b. function myFunction()", correct: true},
        {answerTxt: "c. function = MyFunction()", correct: false},
        {answerTxt: "d. function:myFuntion()", correct: false}
      ]

    }
  ];

 //called when the start button is pressed
function startQuiz(){
    countdown();
    // console.log("startQuiz is running");
    startbtn.classList.add('hidden');
    questionBox.classList.remove('hidden');
    setQuestion();
}

//Resets page, and displays next question and answers
function setQuestion(){
    resetForm();
    displayQuestion();
}

// displays current question and answers 
function displayQuestion(){
    
    //Current place in the array
    q = myQuestions[i];
    questionEl.innerText = q.question;

    //Display each answer to the current question
    q.answers.forEach(answer =>{
        var button = document.createElement('button');
        button.innerText = answer.answerTxt;
        button.classList.add('btn');

        //If the answer is correct, adds data attribute to the button element indicating that
        if(answer.correct){
            button.dataset.correct = answer.correct;
            // console.log("Score is currently: ", score);
        }

        //Listening for the answer click
        button.addEventListener('click', chooseAnswer);
        answerBtnEl.appendChild(button);
    })

}

//Resets everything back to default state when it's called
function resetForm(){
    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

//Checks what was chosen and if it was correct, increases and decreases score
function chooseAnswer(e){
    // console.log("chooseAnswer is running");

    //Which button was chosen
    var selectedAns = e.target;
    //Was answer correct
    var correct = selectedAns.dataset.correct;
    if(correct){
        score+=10;
        // console.log("You chose right, score is now: ", score);
    }

    //else set var to true so time is subtracted
    else{
      isWrong = true;
    }

    if(myQuestions.length > i + 1){
    // console.log("We are in chooseAnswer(), index is: ", i);
    i++;
    setQuestion();
    }
    //else go to the high score page because questions are over
    else{
      totalScore = score + timer;
      // console.log('Total score is: ', totalScore);
      enterInitials();

    }

}

//Timer function
function countdown(){
  timeDisplay.classList.remove('hidden');
  var timerCountdown = setInterval(function(){
    if(isWrong){
      // console.log("If statement isWrong is running.");
      timer = timer - 10;
      isWrong = false;
    }
    timer--;
    timeDisplay.textContent = timer; 
    if(timer <= 0){
      // console.log('Timer = 0 if statement running.');
      enterInitials();
      clearInterval(timerCountdown);    
    }
  },1000);

}

//Brings up results page where you enter you initials
function enterInitials(){

  // clearInterval(timerCountdown);
  // console.log('enterInitials is running.');
  questionBox.classList.add('hidden');
  questionEl.classList.add('hidden');
  timeDisplay.classList.add('hidden');
  resultsDisplay.classList.remove('hidden');
  submitbtn.classList.remove('hidden');
  yourScore.innerText = totalScore;
  // console.log('Initials entered: ', intialsVal);
}

//Stores the score in local storage, displays scores, and calls sort function to 
//put scores in order
function storeScore(value){
  resultsDisplay.classList.add('hidden');
  submitbtn.classList.add('hidden');
  scoresDisplay.classList.remove('hidden');
  // console.log('the initials input are ', value, 'Score: ', totalScore); 
  
  //Create var storedScores to either get the array and hold it, or make the array 
  var storedScores = JSON.parse(localStorage.getItem('highscoreArr')) || [];
  
  //newScore holds the values you want to put into the array.
  var newScore = {userInitials: value, score: totalScore};

  // console.log("Before push: ", storedScores);
  storedScores.push(newScore);

  //Turns the array back into a string so it can be stored in local storage
  localStorage.setItem('highscoreArr', JSON.stringify(storedScores));

  // console.log("After push: ", storedScores);

  //Sort the scores in the array from highest to lowest
  sortScores(storedScores);
 
  //list each element in the array on the highscores page
  for(var j = 0; j<storedScores.length; j++){
    var s = storedScores[j];  
    var l = document.createElement('p');
    var initials = s.userInitials
    l.innerText = (initials + ': ' + s.score);
    highscoreList.appendChild(l);
  }
}

//Sorts the scores
function sortScores(x){
  x.sort(function(a,b) {
    return b.score-a.score
  });
}


