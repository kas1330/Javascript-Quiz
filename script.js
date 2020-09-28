
var counter;
var score=0;

//current index of myQuestions
var i = 0;

var startbtn = document.getElementById('start-btn');
var nextbtn = document.getElementById('next-btn');
var questionBox = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-button');

startbtn.addEventListener('click', startQuiz);
nextbtn.addEventListener('click', () => {
    i++;
    console.log("we are on index: ", i);
    setQuestion();
})

const myQuestions = [
    {
      question: "Inside which HTML element do we put the Javascript?",
      answers: [
        {answerTxt: "a. <js>", correct: false},
        {answerTxt: "b. <javascript>" , correct: false},
        {answerTxt: "c. <script>", correct: true},
        {answerTxt: "d. <scripting>", correct: false}
    ],
    //   correctAnswer: "c"
    },
    {
      question: "Question 2?",
      answers: [
        {answerTxt: "one", correct: false},
        {answerTxt: "two", correct: false},
        {answerTxt: "three", correct: true},
        {answerTxt: "four", correct: false}
      ],
      //correctAnswer: "c"
    },
    {
      question: "Question 3?",
      answers: [
        {answerTxt: "one", correct: false},
        {answerTxt: "two", correct: false},
        {answerTxt: "three", correct: false},
        {answerTxt: "four", correct: true}
      ]
      //correctAnswer: "d"
    }
  ];

function startQuiz(){
    console.log("Game is running");
    startbtn.classList.add('hidden');
    questionBox.classList.remove('hidden');
    setQuestion();
}

function setQuestion(){
    resetForm();
    displayQuestion();
 

}



function displayQuestion(){
    q = myQuestions[i];
    questionEl.innerText = q.question;
    
    q.answers.forEach(answer =>{
        var button = document.createElement('button');
        button.innerText = answer.answerTxt;
        button.classList.add('btn');
        //Check if the answer is right, else subtract time
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', chooseAnswer);
        answerBtnEl.appendChild(button);
    })

}

function resetForm(){
    nextbtn.classList.add('hidden');
    while(answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

function chooseAnswer(e){
    var selectedAns = e.target;
    var correct = selectedAns.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if(myQuestions.length > i + 1){
    nextbtn.classList.remove('hidden');
    }
    //else go to the high score page because questions are over


}

//sets the colors to the red or green in theory
function setStatusClass(element, correct){
     clearStatusClass(element);
     if(correct){
         element.classList.add('correct');
     }
     else{
         element.classList.add('wrong');
     }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}






/*Vars for pages
var titlePage = document.querySelector('#title-page');
var questionPage = document.querySelector('#question-page');
var resultsPage = document.querySelector('#result-page');
var hsPage = document.querySelector('#highscore-page');
var startBtn = document.querySelector("#start");

//Vars for elements on pages
var questionPos = document.querySelector('#question-class');
var initialQues = 0;

const myQuestions = [
    {
      question: "Question 1?",
      answers: {
        a: "one",
        b: "two",
        c: "three",
        d: "four"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 2?",
      answers: {
        a: "one",
        b: "two",
        c: "three",
        d: "four"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 3?",
      answers: {
        a: "one",
        b: "two",
        c: "three",
        d: "four"
      },
      correctAnswer: "d"
    }
  ];

  function questionIterator(){

    console.log('Function question iterator is running.');
    
    //Hides title page
    titlePage.classList.add('hidden');

    //Unhides question page
    questionPage.classList.remove('hidden');

    //Add each question to the page
    for(var i = 0; i < myQuestions.length; i++){

        var q = myQuestions[i];
        var questionPos = document.querySelector('#question-class');

      questionPos.append(q.question);
    //   console.log('Question is: '. q.question); 

    // q.answers.forEach(function => {
        
    // });

    //   var answerPos =document.querySelector('#answer-section');
    //   answerPos.append(q.answer1);
    //   console.log('Question is: '. q.question); 
    }


  }

//   function rightOrWrong(){

//   }

// function endQuiz(){

// }

//   start-btn.addEventListener("click", questionIterator);

// function questionIterator() {
   //var q = myQuestions[initialQues];
//}

//loop over choices
// ereate a button for each choice
   //var userChoices = document.createElement("button")

// add an onclick event listener to each choice
     // userChoices.onClick = isRightOrWrong 
// display on page

//vv a seperate function from questionIterator
//seperate end quiz function

//isRightOrWrong
    //check if user is wrong or right
         // if (this !== myQuestions[initialQues].correctAnswer) {
             // time penalty
                 // time -= 5
         //}
    // move to next Q
         // initialQues++;
    // do you have more questions?
        // if(initalQues === myQuestions.length) {
            //endQuiz()
        
    //} else {
        //questionIterator()
    //}

//hishScores
    //get value of input
    //get  saved scores or, if no saved scores, set to an empty array
    //make an object to score user data
    // save to localstorage

//make buttons to populate answers    
    //var initialQuestion = myQuestions[initialQues]
    // initialQuestion.answers.forEach(function(i) {
        //create button
        //userChoices.textContent = i + answers
    //})*/