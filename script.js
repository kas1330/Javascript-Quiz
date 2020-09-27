/*As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/


//Start button
//Timer
//Multiple choice questions - each a button?
    //Store correct answers in array?
//Subtract time from clock if question is answered wrong
//Game ends when all questions are answered or when time runs out
//Prompt to enter initials
//Save score and initials in local storage

//Vars for pages
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

      var answerPos =document.querySelector('#answer1');
      answerPos.append(q.answer1);
    //   console.log('Question is: '. q.question); 
    }


  }

//   function rightOrWrong(){

//   }

// function endQuiz(){

// }

  startBtn.addEventListener("click", questionIterator);

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
    //})