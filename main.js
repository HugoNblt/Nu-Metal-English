const startButton = document.getElementById("start-btn"),
  nextButton = document.getElementById("next-btn"),
  questionContainer = document.getElementById("question-container"),
  questionElement = document.getElementById("question"),
  answerButtonsElement = document.getElementById("answer-buttons");
let currentQuestionIndex = 0,
  score = 0;
startButton.addEventListener("click", startGame),
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++, setNextQuestion();
  });
const questions = [
  {
    enonce:
      "Quel est le langage de programmation principalement utilis\xe9 pour le d\xe9veloppement web c\xf4t\xe9 client ?",
    reponses: [
      { texte: "Python", correcte: !1 },
      { texte: "C++", correcte: !1 },
      { texte: "Java", correcte: !1 },
      { texte: "JavaScript", correcte: !0 },
    ],
  },
  {
    enonce: "Quel langage s’utilise pour styliser une page web ?",
    reponses: [
      { texte: "HTML", correcte: !1 },
      { texte: "CSS", correcte: !0 },
      { texte: "PHP", correcte: !1 },
      { texte: "SQL", correcte: !1 },
    ],
  },
  {
    enonce: "Que signifie HTML ?",
    reponses: [
      { texte: "Hyper Text Markup Language", correcte: !0 },
      { texte: "Home Tool Markup Language", correcte: !1 },
      { texte: "Hyperlinks Text Mark Language", correcte: !1 },
      { texte: "Hyper Tool Multi Language", correcte: !1 },
    ],
  },
];
function startGame() {
  startButton.classList.add("hide"),
    questionContainer.classList.remove("hide"),
    (currentQuestionIndex = 0),
    (score = 0),
    setNextQuestion();
}
function setNextQuestion() {
  resetState(),
    currentQuestionIndex < questions.length
      ? showQuestion(questions[currentQuestionIndex])
      : showEndMessage();
}
function showQuestion(e) {
  (questionElement.innerText = e.enonce),
    e.reponses.forEach((e) => {
      let t = document.createElement("button");
      (t.innerText = e.texte),
        t.classList.add("btn"),
        e.correcte && (t.dataset.correct = "true"),
        t.addEventListener("click", selectAnswer),
        answerButtonsElement.appendChild(t);
    });
}
function resetState() {
  clearStatusClass(document.body),
    nextButton.classList.add("hide"),
    (answerButtonsElement.innerHTML = "");
}
function selectAnswer(e) {
  let t = e.target,
    n = "true" === t.dataset.correct;
  n && score++,
    setStatusClass(document.body, n),
    Array.from(answerButtonsElement.children).forEach((e) => {
      setStatusClass(e, "true" === e.dataset.correct);
    }),
    currentQuestionIndex < questions.length - 1
      ? ((nextButton.innerText = "Suivante"),
        nextButton.classList.remove("hide"))
      : ((nextButton.innerText = "Voir le score"),
        nextButton.classList.remove("hide"));
}
function showEndMessage() {
  (questionElement.innerText = `Fin du quiz ! Votre score : ${score} / ${questions.length}`),
    (answerButtonsElement.innerHTML = ""),
    (startButton.innerText = "Recommencer"),
    startButton.classList.remove("hide"),
    questionContainer.classList.remove("hide");
}
function setStatusClass(e, t) {
  clearStatusClass(e),
    t ? e.classList.add("correct") : e.classList.add("wrong");
}
function clearStatusClass(e) {
  e.classList.remove("correct"), e.classList.remove("wrong");
}
questionContainer.classList.add("hide"), nextButton.classList.add("hide");
