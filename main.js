const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Rome", "Madrid", "Berlin"],
        correctAnswer: "a"
    },
    
];

let currentQuestion = 0;
let score = 0;
let timer;

function displayQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById("question-number").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    document.getElementById("question").textContent = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(97 + index)}"> ${String.fromCharCode(97 + index)}. ${option}`;
        optionsContainer.appendChild(label);
    });
}

function startTimer() {
    let seconds = 0;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = `Timer: ${seconds}s`;
        seconds++;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = quizData[currentQuestion].correctAnswer;

        if (userAnswer === correctAnswer) {
            score++;
        }

        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }
}

function endQuiz() {
    stopTimer();
    alert(`Quiz completed!\nYour score: ${score}`);
}


displayQuestion();
startTimer();
