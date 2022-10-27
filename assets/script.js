const startButton = document.getElementById("begin");
const questionsEl = document.getElementById("grid");
const questionDisplay = document.getElementById("question");
const answerOne = document.getElementsByClassName("one");
const answerTwo = document.getElementsByClassName("two");
const answerThree = document.getElementsByClassName("three");
const answerFour = document.getElementsByClassName("four");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionsEl.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}
