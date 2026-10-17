let current = 0;

let answers = new Array(questions.length).fill(null);
let review = new Array(questions.length).fill(false);

let examEnded = false;
let timerInterval;

const EXAM_TIME = 60 * 60;
const TOTAL_QUESTIONS = questions.length;

const TOTAL_MARKS = questions.reduce(
    (sum, q) => sum + q.marks,
    0
);


/* =====================================================
   START EXAM
   ===================================================== */

function startExam() {
    clearInterval(timerInterval);

    current = 0;
    answers = new Array(questions.length).fill(null);
    review = new Array(questions.length).fill(false);
    examEnded = false;

    sessionStorage.setItem(
        "polymerGateExamStartTime",
        Date.now()
    );

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("examArea").style.display = "flex";
    document.getElementById("calculatorButton").disabled = false;

    loadQuestion();
    updatePalette();
    updateTimer();

    timerInterval = setInterval(updateTimer, 1000);
}


/* =====================================================
   LOAD QUESTION
   ===================================================== */

function loadQuestion() {
    const q = questions[current];

    document.getElementById("questionType").innerText =
        q.type + " — " + q.marks + " Mark" +
        (q.marks > 1 ? "s" : "");

    let questionHTML =
        "Q" + (current + 1) +
        ". [" + q.marks +
        (q.marks === 1 ? " Mark" : " Marks") +
        "] " +
        q.question.replace(/\n/g, "<br>");

    if (q.image) {
        questionHTML +=
            '<br><img src="' + q.image +
            '" class="question-image" alt="Question illustration">';
    }

    document.getElementById("question").innerHTML = questionHTML;

    let html = "";

    // NAT
    if (q.type === "NAT") {
        html = `
            <label for="natAnswer">
                Enter your numerical answer:
            </label>

            <input
                type="number"
                id="natAnswer"
                step="any"
                value="${
                    answers[current] !== null
                        ? answers[current]
                        : ""
                }"
                placeholder="Enter answer"
                style="display:block; margin-top:12px; padding:10px; width:100%; max-width:300px; box-sizing:border-box;"
            >
        `;
    }

    // MSQ
    else if (q.type === "MSQ") {
        q.options.forEach(function(opt, i) {
            const checked =
                Array.isArray(answers[current]) &&
                answers[current].includes(i);

            html += `
                <label>
                    <input
                        type="checkbox"
                        name="option"
                        value="${i}"
                        ${checked ? "checked" : ""}
                    >
                    ${opt}
                </label>
            `;
        });
    }

    // MCQ
    else if (q.type === "MCQ") {
        q.options.forEach(function(opt, i) {
            const checked = answers[current] === i;

            html += `
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="${i}"
                        ${checked ? "checked" : ""}
                    >
                    ${opt}
                </label>
            `;
        });
    }

    document.getElementById("options").innerHTML = html;

    updatePalette();
}


/* =====================================================
   SAVE CURRENT ANSWER
   ===================================================== */

function saveCurrentAnswer() {
    const q = questions[current];

    // NAT
    if (q.type === "NAT") {
        const input = document.getElementById("natAnswer");

        if (!input || input.value.trim() === "") {
            answers[current] = null;
            return false;
        }

        const value = Number(input.value);

        if (!Number.isFinite(value)) {
            answers[current] = null;
            return false;
        }

        answers[current] = value;
        return true;
    }

    // MCQ
    if (q.type === "MCQ") {
        const selected = document.querySelector(
            'input[name="option"]:checked'
        );

        if (!selected) {
            answers[current] = null;
            return false;
        }

        answers[current] = parseInt(selected.value, 10);
        return true;
    }

    // MSQ
    if (q.type === "MSQ") {
        const selected = document.querySelectorAll(
            'input[name="option"]:checked'
        );

        const selectedAnswers = [];

        selected.forEach(function(item) {
            selectedAnswers.push(parseInt(item.value, 10));
        });

        if (selectedAnswers.length === 0) {
            answers[current] = null;
            return false;
        }

        answers[current] = selectedAnswers.sort((a, b) => a - b);
        return true;
    }

    return false;
}


/* =====================================================
   SAVE & NEXT
   ===================================================== */

function saveNext() {
    const answered = saveCurrentAnswer();

    if (answered) {
        review[current] = false;
    }

    updatePalette();

    if (current < questions.length - 1) {
        current++;
        loadQuestion();
    }
}


/* =====================================================
   PREVIOUS
   ===================================================== */

function prevQuestion() {
    saveCurrentAnswer();
    updatePalette();

    if (current > 0) {
        current--;
        loadQuestion();
    }
}


/* =====================================================
   CLEAR RESPONSE
   ===================================================== */

function clearResponse() {
    answers[current] = null;
    review[current] = false;
    loadQuestion();
}


/* =====================================================
   MARK FOR REVIEW
   ===================================================== */

function markReview() {
    saveCurrentAnswer();
    review[current] = true;
    updatePalette();
}


/* =====================================================
   QUESTION PALETTE
   ===================================================== */

function updatePalette() {
    const palette = document.getElementById("palette");

    palette.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {
        let colorClass = "not-answered";

        if (review[i]) {
            colorClass = "review";
        } else if (answers[i] !== null) {
            colorClass = "answered";
        }

        palette.innerHTML += `
            <button
                class="${colorClass}"
                onclick="jump(${i})"
            >
                ${i + 1}
            </button>
        `;
    }
}


/* =====================================================
   JUMP TO QUESTION
   ===================================================== */

function jump(i) {
    saveCurrentAnswer();
    current = i;
    loadQuestion();
}


/* =====================================================
   TIMER
   ===================================================== */

function updateTimer() {
    if (examEnded) {
        return;
    }

    const startTime = Number(
        sessionStorage.getItem("polymerGateExamStartTime")
    );

    if (!startTime) {
        return;
    }

    const elapsed = Math.floor(
        (Date.now() - startTime) / 1000
    );

    const remaining = EXAM_TIME - elapsed;

    if (remaining <= 0) {
        document.getElementById("timer").innerText = "00:00";

        clearInterval(timerInterval);
        examEnded = true;

        openNameModal(true);
        return;
    }

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    document.getElementById("timer").innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    if (remaining <= 300) {
        document.querySelector(".timer-box")
            .classList.add("timer-warning");
    }
}


/* =====================================================
   SUBMIT EXAM
   ===================================================== */

function submitExam() {
    saveCurrentAnswer();
    updatePalette();

    document.getElementById("submitModal").style.display = "flex";
}


/* =====================================================
   CLOSE SUBMIT MODAL
   ===================================================== */

function closeSubmitModal() {
    document.getElementById("submitModal").style.display = "none";
}


/* =====================================================
   CONFIRM SUBMIT
   ===================================================== */

function confirmSubmit() {
    closeSubmitModal();
    openNameModal(false);
}


/* =====================================================
   NAME MODAL
   ===================================================== */

function openNameModal(autoSubmit) {
    saveCurrentAnswer();
    updatePalette();

    document.getElementById("candidateName").value = "";
    document.getElementById("candidateMobile").value = "";

    document.getElementById("nameModal").style.display = "flex";

    setTimeout(function() {
        document.getElementById("candidateName").focus();
    }, 100);
}


/* =====================================================
   CLOSE NAME MODAL
   ===================================================== */

function closeNameModal() {
    if (examEnded) {
        return;
    }

    document.getElementById("nameModal").style.display = "none";
}


/* =====================================================
   SCORE CALCULATION

   MCQ: correct +marks, wrong -marks/3
   MSQ: exact match earns full marks
   NAT: compare answers rounded to 2 decimal places
   ===================================================== */

function calculateScore() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const studentAnswer = answers[i];

        if (
            studentAnswer === null ||
            studentAnswer === undefined
        ) {
            continue;
        }

        // NAT — correct to 2 decimal places
        if (q.type === "NAT") {
            const studentValue = Number(studentAnswer);
            const correctValue = Number(q.answer);

            if (
                Number.isFinite(studentValue) &&
                Number.isFinite(correctValue) &&
                studentValue.toFixed(2) === correctValue.toFixed(2)
            ) {
                score += q.marks;
            }

            continue;
        }

        // MSQ — exact set match
        if (q.type === "MSQ") {
            if (!Array.isArray(studentAnswer)) {
                continue;
            }

            const student = studentAnswer
                .slice()
                .sort((a, b) => a - b);

            const correct = q.correctAnswers
                .slice()
                .sort((a, b) => a - b);

            const isCorrect =
                student.length === correct.length &&
                student.every(
                    (value, index) => value === correct[index]
                );

            if (isCorrect) {
                score += q.marks;
            }

            continue;
        }

        // MCQ — correct answer or negative marking
        if (q.type === "MCQ") {
            if (studentAnswer === q.answer) {
                score += q.marks;
            } else {
                score -= q.marks / 3;
            }
        }
    }

    return Number(score.toFixed(2));
}


/* =====================================================
   FINAL SUBMIT
   ===================================================== */

function finalSubmit() {
    const name = document.getElementById("candidateName").value.trim();
    const mobile = document.getElementById("candidateMobile").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    saveCurrentAnswer();

    const score = calculateScore();

    // Existing Google Apps Script Web App URL
    let url =
        "https://script.google.com/macros/s/AKfycbyk4OeIi0XYHji-mmTw93RljtqaYz1ktE76dIlpRrsGqxaKFCaRahyTRDSnzfLD1p1u0Q/exec";

    url += "?name=" + encodeURIComponent(name);
    url += "&mobile=" + encodeURIComponent(mobile);
    url += "&score=" + encodeURIComponent(score);

    // Send all answers to Google Sheets
    for (let i = 0; i < questions.length; i++) {
        let answer = "";
        const q = questions[i];

        if (
            answers[i] !== null &&
            answers[i] !== undefined
        ) {
            if (q.type === "MSQ" && Array.isArray(answers[i])) {
                answer = answers[i]
                    .map(index => String.fromCharCode(65 + index))
                    .join(",");
            } else if (q.type === "MCQ") {
                answer = String.fromCharCode(65 + answers[i]);
            } else if (q.type === "NAT") {
                answer = String(answers[i]);
            }
        }

        url +=
            "&q" +
            (i + 1) +
            "=" +
            encodeURIComponent(answer);
    }

    // Submit without leaving the exam page
    const iframe = document.createElement("iframe");

    iframe.style.display = "none";
    iframe.src = url;

    document.body.appendChild(iframe);

    // Finish exam
    examEnded = true;
    clearInterval(timerInterval);

    document.getElementById("nameModal").style.display = "none";

    document.getElementById("resultName").innerText =
        "Candidate: " + name + " | Mobile: " + mobile;

    document.getElementById("resultScore").innerText =
        score.toFixed(2) + " / " + TOTAL_MARKS;

    document.getElementById("resultModal").style.display = "flex";

    sessionStorage.removeItem("polymerGateExamStartTime");
}


/* =====================================================
   RESULT
   ===================================================== */

function closeResultAndReload() {
    location.reload();
}


/* =====================================================
   CALCULATOR
   ===================================================== */

function openCalculator() {
    document.getElementById("calculator").style.display = "block";
}


function closeCalculator() {
    document.getElementById("calculator").style.display = "none";
}


function calcInput(value) {
    document.getElementById("calc-display").value += value;
}


function calcClear() {
    document.getElementById("calc-display").value = "";
}


function calcBackspace() {
    const display = document.getElementById("calc-display");

    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    const display = document.getElementById("calc-display");

    let expression = display.value;

    try {
        expression = expression.replace(/\^/g, "**");
        expression = expression.replace(/sqrt\(/g, "Math.sqrt(");

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
