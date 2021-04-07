//DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var optionsEl = document.getElementById("options");
var startBtnEL = document.getElementById("start");
var promptEl = document.getElementById("prompt");
var prompt1El = document.getElementById("prompt1");
var quizOverAlert = document.getElementById("quiz-over");

//Array Objects holds questions and answers
const questions = [
    {
      inquiry: 'Commonly used data types DO NOT include:',
      options: [
          '1.strings', 
          '2.booleans', 
          '3.alerts', 
          '4.numbers'],
      answer: '3.alerts'
    },
    {
      inquiry: 'The condition in an if / else statement is enclosed within___.',
      options: [
          '1.quotes', 
          '2.curly brackets', 
          '3.parentheses', 
          '4.square brackets'],
      answer: '3.parentheses'
    },
    {
      inquiry: 'Arrays in Javascript can be used to store _____.',
      options: [
        '1.numbers and strings',
        '2.other arrays',
        '3.booleans',
        '4.all of the above'
      ],
      answer: '4.all of the above'
    },
    {
        inquiry: 'String values must be enclosed within ___ when being assigned to variables.',
        options: [
          '1.commas',
          '2.curly brackets',
          '3.quotes',
          '4.parenthesis'
        ],
        answer: '3.quotes',
      },
      {
        inquiry: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        options: [
          '1.javaScript',
          '2.terminal/bash',
          '3.for loops',
          '4.console.log'
        ],
        answer: '4.console.log',
      }
  ]

var questionIndex = 0;
var time = questions.length * 10;
var timerId;

  function defineTime(){
      time--
      timerEl.textContent = time
        if( time <= 0 ){
            quizOverAlert.removeAttribute('class','hide');
         }
  }

 //Runs after click event
    function quizBegin(){
        var startScreen = document.getElementById('title-page');
        startScreen.setAttribute('class','hide');
        questionsEl.removeAttribute('class');
        timerId = setInterval(defineTime, 1000);
        timerEl.textContent = time;
        grabQuestion()
    }

    function grabQuestion(){
        var currentQuestion=questions[questionIndex];
        var inquiry = document.getElementById('question-title');
        inquiry.textContent=currentQuestion.inquiry
        optionsEl.innerHTML = ""
        currentQuestion.options.forEach(function (choice, index){
            var choiceButton=document.createElement('button');
            choiceButton.setAttribute('class', 'choice')
            choiceButton.setAttribute('value', choice)
            choiceButton.textContent = choice;
            choiceButton.onclick = questionCheck
            optionsEl.appendChild(choiceButton)
        })

    }

    function questionCheck(){
        if (this.value !== questions[questionIndex].answer){
            time = time-10;
            timerEl.textContent=time;   
            promptEl.removeAttribute('class','hide');
        } else {
            prompt1El.removeAttribute('class','hide');
        }
        questionIndex++
        if (questionIndex===questions.length){
            quizOverAlert.removeAttribute('class','hide');
        } else{
            grabQuestion()
        }
    }
//Event listener for click to run quizBegin function
startBtnEL.addEventListener('click', quizBegin)