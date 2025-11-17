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
      "Where did emo originally develop?",
    reponses: [
      { texte: "Los Angeles", correcte: !1 },
      { texte: "Washington D.C.", correcte: !0 },
      { texte: "London", correcte: !1 },
      { texte: "Seattle", correcte: !1 },
    ],
  },
  {
    enonce: "Which band is strongly associated with the nu-metal genre?",
    reponses: [
      { texte: "My Chemical Romance", correcte: !1 },
      { texte: "Blink-182", correcte: !1 },
      { texte: "Korn", correcte: !0 },
      { texte: "Arctic Monkeys", correcte: !1 },
    ],
  },
  {
    enonce: "Which of the following is a typical theme in emo lyrics?",
    reponses: [
      { texte: "Party lifestyle", correcte: !1 },
      { texte: "Emotional struggle and heartbreak", correcte: !0 },
      { texte: "Space exploration", correcte: !1 },
      { texte: "Political satire", correcte: !1 },
    ],
  },
  {
    enonce: "Which musical elements are commonly found in nu-metal?",
    reponses: [
      { texte: "Opera vocals", correcte: !1 },
      { texte: "Acoustic folk instruments", correcte: !1 },
      { texte: "Jazz improvisation", correcte: !1 },
      { texte: "Electronic beats mixed with heavy guitar riffs", correcte: !0 },
    ],
  },
  {
    enonce: "Which fashion item is often linked to emo culture?",
    reponses: [
      { texte: "Cowboy boots", correcte: !1 },
      { texte: "Studded belts and skinny jeans", correcte: !0 },
      { texte: "Hawaiian shirts", correcte: !1 },
      { texte: "Berets", correcte: !1 },
    ],
  },
  {
    enonce: "Which band is known for combining rap vocals with metal elements?",
    reponses: [
      { texte: "Linkin Park", correcte: !0 },
      { texte: "Paramore", correcte: !1 },
      { texte: "Sum 41", correcte: !1 },
      { texte: "The Killers", correcte: !1 },
    ],
  },
  {
    enonce: "Which emotion is commonly associated with the emo subculture?",
    reponses: [
      { texte: "Indifference", correcte: !1 },
      { texte: "Excitement", correcte: !1 },
      { texte: "Angst and sensitivity", correcte: !0 },
      { texte: "Pride", correcte: !1 },
    ],
  },
  {
    enonce: "During which decade did nu-metal reach mainstream popularity?",
    reponses: [
      { texte: "1960s", correcte: !1 },
      { texte: "1980s", correcte: !1 },
      { texte: "1990s–2000s", correcte: !0 },
      { texte: "1910s", correcte: !1 },
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
