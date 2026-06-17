let answer;
let score = 0;
let hits = 0;
let errors = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const hitsElement = document.getElementById("hits");
const errorsElement = document.getElementById("errors");
const answerInput = document.getElementById("answer");

function generateQuestion() {

    const operation = document.getElementById("operation").value;
    const difficulty = document.getElementById("difficulty").value;

    let max;

    if (difficulty === "easy") {
        max = 10;
    } else if (difficulty === "medium") {
        max = 50;
    } else {
        max = 100;
    }

    let n1 = Math.floor(Math.random() * max) + 1;
    let n2 = Math.floor(Math.random() * max) + 1;

    switch (operation) {

        case "add":
            answer = n1 + n2;
            questionElement.textContent = `Quanto é ${n1} + ${n2}?`;
            break;

        case "sub":
            if (n1 < n2) {
                [n1, n2] = [n2, n1];
            }

            answer = n1 - n2;
            questionElement.textContent = `Quanto é ${n1} - ${n2}?`;
            break;

        case "mul":
            answer = n1 * n2;
            questionElement.textContent = `Quanto é ${n1} × ${n2}?`;
            break;

        case "div":
            answer = n1;
            const resultado = n1 * n2;
            questionElement.textContent = `Quanto é ${resultado} ÷ ${n2}?`;
            break;
    }
}

function checkAnswer() {

    const userAnswer = Number(answerInput.value);

    if (userAnswer === answer) {
        alert("Resposta correta!");
        score += 10;
        hits++;
    } else {
        alert(`Resposta incorreta! A resposta correta era ${answer}.`);
        errors++;
    }

    scoreElement.textContent = score;
    hitsElement.textContent = hits;
    errorsElement.textContent = errors;

    answerInput.value = "";
    answerInput.focus();

    generateQuestion();
}

document.getElementById("operation").addEventListener("change", generateQuestion);
document.getElementById("difficulty").addEventListener("change", generateQuestion);

answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

generateQuestion();