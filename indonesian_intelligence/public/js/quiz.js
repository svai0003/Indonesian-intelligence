const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Is Harum a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Revanno a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Tumiran a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Edy a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Jufianto a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Aan a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Abdur a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Lia a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Rahmat a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Yana a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Fauzar a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Rahmi a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Feny a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Tessa a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Firdaus a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Rudi a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Rizqi a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Inda a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 2
  },
  {
    question: "Is Supriadi a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
  {
    question: "Is Heru a boy or a girl?",
    choice1: "Boy",
    choice2: "Girl",
    answer: 1
  },
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    alert("You have go through all the names!");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
