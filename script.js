
function startGame(){

}

function setQuestion(){

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