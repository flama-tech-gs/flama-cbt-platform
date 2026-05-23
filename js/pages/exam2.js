// ============================
// SAMPLE QUESTIONS
// ============================

const questions = [
  {
    question: "Which of the following is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "Organism"],
    answer: "Cell",
  },
  {
    question: "What carries genetic information?",
    options: ["Protein", "DNA", "Fat", "Water"],
    answer: "DNA",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["Heart", "Kidney", "Liver", "Lungs"],
    answer: "Heart",
  },
  {
    question: "What is the boiling point of water?",
    options: ["50°C", "100°C", "120°C", "90°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is H2O commonly called?",
    options: ["Salt", "Water", "Hydrogen", "Oxygen"],
    answer: "Water",
  },
  {
    question: "How many bones are in the adult body?",
    options: ["206", "300", "150", "250"],
    answer: "206",
  },
  {
    question: "Which blood group is universal donor?",
    options: ["A", "B", "O", "AB"],
    answer: "O",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["Heart", "Liver", "Lungs", "Kidney"],
    answer: "Lungs",
  },
];

// ============================
// VARIABLES
// ============================

let currentQuestion = 0;

let answers = JSON.parse(localStorage.getItem("answers")) || {};

// ============================
// ELEMENTS
// ============================

const qText = document.getElementById("questionText");
const qNumber = document.getElementById("questionNumber");
const optionsBox = document.getElementById("options");
const grid = document.getElementById("questionGrid");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const timerEl = document.getElementById("timer");

// ============================
// CREATE QUESTION GRID
// ============================

questions.forEach((_, i) => {
  const btn = document.createElement("button");

  btn.textContent = i + 1;

  btn.addEventListener("click", () => {
    currentQuestion = i;
    loadQuestion();
  });

  grid.appendChild(btn);
});

// ============================
// LOAD QUESTION
// ============================

function loadQuestion() {
  const q = questions[currentQuestion];

  qNumber.textContent = `Question ${currentQuestion + 1}:`;

  qText.textContent = q.question;

  optionsBox.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");

    btn.textContent = opt;

    if (answers[currentQuestion] === opt) {
      btn.classList.add("selected");
    }

    btn.onclick = () => {
      answers[currentQuestion] = opt;

      // AUTO SAVE
      localStorage.setItem("answers", JSON.stringify(answers));

      loadQuestion();
      updateGrid();
    };

    optionsBox.appendChild(btn);
  });

  updateGrid();
}

// ============================
// UPDATE QUESTION GRID
// ============================

function updateGrid() {
  const buttons = grid.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.classList.remove("active");
    btn.classList.remove("answered");

    if (i === currentQuestion) {
      btn.classList.add("active");
    }

    if (answers[i]) {
      btn.classList.add("answered");
    }
  });
}

// ============================
// NAVIGATION
// ============================

nextBtn.onclick = () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

// ============================
// TIMER
// ============================

let duration = 45 * 60;

const timer = setInterval(() => {
  const min = Math.floor(duration / 60);

  const sec = duration % 60;

  timerEl.textContent = `${String(min).padStart(2, "0")} : ${String(
    sec,
  ).padStart(2, "0")}`;

  if (duration <= 0) {
    clearInterval(timer);

    confirmSubmit();
  }

  duration--;
}, 1000);

// ============================
// MODAL FUNCTIONS
// ============================

window.openModal = function () {
  const answered = Object.keys(answers).length;

  const total = questions.length;

  const unanswered = total - answered;

  document.getElementById("answeredCount").textContent =
    `${answered} out of ${total}`;

  document.getElementById("unansweredCount").textContent =
    `${unanswered} Questions`;

  document.getElementById("submitModal").classList.remove("hidden");
};

window.closeModal = function () {
  document.getElementById("submitModal").classList.add("hidden");
};

window.confirmSubmit = function () {
  document.getElementById("submitModal").classList.add("hidden");

  localStorage.removeItem("answers");

  setTimeout(() => {
    document.getElementById("successModal").classList.remove("hidden");
  }, 300);
};

window.goToDashboard = function () {
  window.location.href = "/index.html";
};

// ============================
// INITIAL LOAD
// ============================

loadQuestion();
