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

var questionsHere = document.querySelector('#questions-here');
var startBtn = document.querySelector("#start");

const myQuestions = [
    {
      question: "Question 1",
      answers: {
        a: "one",
        b: "two",
        c: "three"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 2",
      answers: {
        a: "one",
        b: "two",
        c: "three"
      },
      correctAnswer: "c"
    },
    {
      question: "Question 3",
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

    var elem = document.querySelector("#start");
    elem.parentNode.removeChild(elem);

    return;

  }

  startBtn.addEventListener("click", questionIterator);

