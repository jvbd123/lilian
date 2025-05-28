const questions = [
    {
        question: "Onde que nos falamos pela primeira vez?",
        answers: [
            { text: "No Ônibus", correct: false },
            { text: "Em um parque", correct: false },
            { text: "Na van", correct: true },
            { text: "Na escola", correct: false }
        ]
    },
    {
        question: "Qual é a minha comida favorita?",
        answers: [
            { text: "Pizza", correct: false },
            { text: "Sushi", correct: false },
            { text: "Lasanha", correct: false },
            { text: "Macarrão com massa", correct: true } 
        ]
    },
    {
        question: "Quando foi que a gente começou a namorar?",
        answers: [
            { text: "Janeiro de 2025", correct: false },
            { text: "Abril de 2025", correct: true }, 
            { text: "Dezembro de 2024", correct: false },
            { text: "Março de 2023", correct: false }
        ]
    },
    {
        question: "Quem disse 'eu te amo' primeiro?",
        answers: [
            { text: "Eu", correct: true }, 
            { text: "Você", correct: false },
            { text: "Os dois ao mesmo tempo", correct: false },
            { text: "Nenhum dos dois ainda", correct: false }
        ]
    },
    {
        question: "Qual é o apelido mais carinhoso que sempre uso com você?",
        answers: [
            { text: "Minha princesa", correct: true }, 
            { text: "Amor", correct: false },
            { text: "Fiota", correct: false },
            { text: "Nega", correct: false }
        ]
    },
    {
        question: "Qual o nome que escolhemos para o nosso Foguinho?",
        answers: [
            { text: "Ezequiel", correct: true }, 
            { text: "Pedro", correct: false },
            { text: "Arthur", correct: false },
            { text: "Ítalo", correct: false }
        ]
    },
    {
        question: "O que você mais gosta em mim? 😍",
        answers: [
            { text: "Meu sorriso", correct: true }, 
            { text: "Meu cabelo", correct: true },
            { text: "Meu jeito engraçado", correct: true },
            { text: "Minha altura", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `Você finalizou 💕 Acertou ${score} de ${questions.length} perguntas 😍`;
    nextButton.innerText = "Recomeçar";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function showScore() {
    resetState();
    questionElement.innerText = `Você finalizou 💕 Acertou ${score} de ${questions.length} perguntas 😍`;
    nextButton.innerText = "Ver Resultado";
    nextButton.style.display = "block";


    nextButton.onclick = () => {
        if (score >= 4) {

            window.location.href = "/videos/surpresa.mp4";
        } else {

            window.location.href = "https://youtu.be/15k8oOXynJs?si=b82xY-eo-gGJRvbk";
        }
    };
}


startQuiz();
