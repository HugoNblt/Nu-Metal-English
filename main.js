// Mes constantes et variables
const startButton = document.getElementById('start-btn'); // On localise le bouton Commencer
const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
// Mes détecteurs d'événement
startButton.addEventListener('click', startGame); // On surveille le clique

// Mes fonctions
function startGame() {
    console.log('Démarrage')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion();
    resetState();
    showAnwserButtons(questions[0]);
    showQuestion(questions[0]);
}

const questions = [
    // Première question
        {
            enonce: 'Quel est le langage de programmation principalement utilisé pour le développement web côté client ?',
            reponses: [
                { texte: 'Python', correcte: false },
                { texte: 'C++', correcte: false },
                { texte: 'Java', correcte: false },
                { texte: 'JavaScript', correcte: true }
            ]
        },
        {
            enonce: 'La meilleure Université pour faire MMI',
            reponses: [
                { texte: 'IUT de Troyes', correcte: true },
                { texte: 'IUT de Dijon', correcte: false },
                { texte: 'IUT de Nancy', correcte: false },
                { texte: 'IUT de Tours', correcte: false }
            ]
        },
        {
            enonce: 'C\'est quoi css ?',
            reponses: [
                { texte: 'Python', correcte: false },
                { texte: 'C++', correcte: false },
                { texte: 'Java', correcte: false },
                { texte: 'CSS', correcte: true }
            ]
        },
        {
            enonce: 'Quel est le langage de programmation principalement utilisé pour le développement web côté client ?',
            reponses: [
                { texte: 'Python', correcte: false },
                { texte: 'C++', correcte: false },
                { texte: 'Java', correcte: false },
                { texte: 'JavaScript', correcte: true }
            ]
        }
    ]
    

    function showQuestion(questions) {
        questionElement.innerText = questions.enonce; // Je change le texte d'exemple de mon élément HTML par l'énoncé de ma première question
    }
    showQuestion(questions[currentQuestionIndex + 1]);

function showAnwserButtons(question){
    question.reponses.forEach(reponse => {
        let button = document.createElement('button');
        button.innerText = reponse.texte;
        button.classList.add('btn');
        if (reponse.correcte) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button); // Ne pas oublier de déclarer la constante
    });}
    showAnwserButtons(questions[currentQuestionIndex]);

function resetState() {
    answerButtonsElement.classList.add('hide');
    answerButtonsElement.innerHTML = '';    
}
function setStatusClass(element, isCorrect) {
    if (isCorrect) {
        element.classList.remove('correct', 'wrong');
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
function selectAnswer(e) { // e défini l'événement du clique
    const selectedButton = e.target;
    // console.info(selectedButton); // On regarde si c'est bien le bouton cliqué
    const isCorrect = selectedButton.dataset.correct; // Sera soit true soit undefined en fonction de la réponse
    // console.info('la réponse est-elle correcte ? '+isCorrect);
    
    // Appliquer le statut (donc la couleur) de réponse au body (correcte ou incorrecte)
    setStatusClass(document.body, isCorrect);

    // Appliquer le statut aux boutons
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (questions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Recommencer';
        startButton.classList.remove('hide');
    }
}
function setNextQuestion() {
    // console.log(currentQuestionIndex)
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    showAnwserButtons(questions[currentQuestionIndex])
}
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
