// ============================
// SAMPLE QUESTIONS
// ============================

const questions = [
  {
    question: "Which of the following is the basic unit of life?",
    options: ["(a) Tissue", "(b) Organ", "(c) Cell", "(d) Organism"],
    answer: "Cell",
  },
  {
    question: "What carries genetic information?",
    options: ["(a) Protein", "(b) DNA", "(c) Fat", "(d) Water"],
    answer: "DNA",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["(a) Heart", "(b) Kidney", "(c) Liver", "(d) Lungs"],
    answer: "Heart",
  },
  {
    question: "What is the boiling point of water?",
    options: ["(a) 50°C", "(b) 100°C", "(c) 120°C", "(d) 90°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["(a) Earth", "(b) Venus", "(c) Mars", "(d) Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which gas do plants absorb?",
    options: [
      "(a) Oxygen",
      "(b) Hydrogen",
      "(c) Carbon Dioxide",
      "(d) Nitrogen",
    ],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is H2O commonly called?",
    options: ["(a) Salt", "(b) Water", "(c) Hydrogen", "(d) Oxygen"],
    answer: "Water",
  },
  {
    question: "How many bones are in the adult body?",
    options: ["(a) 206", "(b) 300", "(c) 150", "(d) 250"],
    answer: "206",
  },
  {
    question: "Which blood group is universal donor?",
    options: ["(a) A", "(b) B", "(c) O", "(d) AB"],
    answer: "O",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["(a) Heart", "(b) Liver", "(c) Lungs", "(d) Kidney"],
    answer: "Lungs",
  },

  {
    question: "Which of the following is the basic unit of life?",
    options: ["(a) Tissue", "(b) Organ", "(c) Cell", "(d) Organism"],
    answer: "Cell",
  },
  {
    question: "What carries genetic information?",
    options: ["(a) Protein", "(b) DNA", "(c) Fat", "(d) Water"],
    answer: "DNA",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["(a) Heart", "(b) Kidney", "(c) Liver", "(d) Lungs"],
    answer: "Heart",
  },
  {
    question: "What is the boiling point of water?",
    options: ["(a) 50°C", "(b) 100°C", "(c) 120°C", "(d) 90°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["(a) Earth", "(b) Venus", "(c) Mars", "(d) Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which gas do plants absorb?",
    options: [
      "(a) Oxygen",
      "(b) Hydrogen",
      "(c) Carbon Dioxide",
      "(d) Nitrogen",
    ],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is H2O commonly called?",
    options: ["(a) Salt", "(b) Water", "(c) Hydrogen", "(d) Oxygen"],
    answer: "Water",
  },
  {
    question: "How many bones are in the adult body?",
    options: ["(a) 206", "(b) 300", "(c) 150", "(d) 250"],
    answer: "206",
  },
  {
    question: "Which blood group is universal donor?",
    options: ["(a) A", "(b) B", "(c) O", "(d) AB"],
    answer: "O",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["(a) Heart", "(b) Liver", "(c) Lungs", "(d) Kidney"],
    answer: "Lungs",
  },

  {
    question: "Which of the following is the basic unit of life?",
    options: ["(a) Tissue", "(b) Organ", "(c) Cell", "(d) Organism"],
    answer: "Cell",
  },
  {
    question: "What carries genetic information?",
    options: ["(a) Protein", "(b) DNA", "(c) Fat", "(d) Water"],
    answer: "DNA",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["(a) Heart", "(b) Kidney", "(c) Liver", "(d) Lungs"],
    answer: "Heart",
  },
  {
    question: "What is the boiling point of water?",
    options: ["(a) 50°C", "(b) 100°C", "(c) 120°C", "(d) 90°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["(a) Earth", "(b) Venus", "(c) Mars", "(d) Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which gas do plants absorb?",
    options: [
      "(a) Oxygen",
      "(b) Hydrogen",
      "(c) Carbon Dioxide",
      "(d) Nitrogen",
    ],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is H2O commonly called?",
    options: ["(a) Salt", "(b) Water", "(c) Hydrogen", "(d) Oxygen"],
    answer: "Water",
  },
  {
    question: "How many bones are in the adult body?",
    options: ["(a) 206", "(b) 300", "(c) 150", "(d) 250"],
    answer: "206",
  },
  {
    question: "Which blood group is universal donor?",
    options: ["(a) A", "(b) B", "(c) O", "(d) AB"],
    answer: "O",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["(a) Heart", "(b) Liver", "(c) Lungs", "(d) Kidney"],
    answer: "Lungs",
  },

  {
    question: "Which of the following is the basic unit of life?",
    options: ["(a) Tissue", "(b) Organ", "(c) Cell", "(d) Organism"],
    answer: "Cell",
  },
  {
    question: "What carries genetic information?",
    options: ["(a) Protein", "(b) DNA", "(c) Fat", "(d) Water"],
    answer: "DNA",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["(a) Heart", "(b) Kidney", "(c) Liver", "(d) Lungs"],
    answer: "Heart",
  },
  {
    question: "What is the boiling point of water?",
    options: ["(a) 50°C", "(b) 100°C", "(c) 120°C", "(d) 90°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["(a) Earth", "(b) Venus", "(c) Mars", "(d) Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which gas do plants absorb?",
    options: [
      "(a) Oxygen",
      "(b) Hydrogen",
      "(c) Carbon Dioxide",
      "(d) Nitrogen",
    ],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is H2O commonly called?",
    options: ["(a) Salt", "(b) Water", "(c) Hydrogen", "(d) Oxygen"],
    answer: "Water",
  },
  {
    question: "How many bones are in the adult body?",
    options: ["(a) 206", "(b) 300", "(c) 150", "(d) 250"],
    answer: "206",
  },
  {
    question: "Which blood group is universal donor?",
    options: ["(a) A", "(b) B", "(c) O", "(d) AB"],
    answer: "O",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["(a) Heart", "(b) Liver", "(c) Lungs", "(d) Kidney"],
    answer: "Lungs",
  },

  {
    question: "Which of the following is the basic unit of life?",
    options: ["(a) Tissue", "(b) Organ", "(c) Cell", "(d) Organism"],
    answer: "Cell",
  },
  {
    question: "What carries genetic information?",
    options: ["(a) Protein", "(b) DNA", "(c) Fat", "(d) Water"],
    answer: "DNA",
  },
  {
    question: "Which organ pumps blood around the body?",
    options: ["(a) Heart", "(b) Kidney", "(c) Liver", "(d) Lungs"],
    answer: "Heart",
  },
  {
    question: "What is the boiling point of water?",
    options: ["(a) 50°C", "(b) 100°C", "(c) 120°C", "(d) 90°C"],
    answer: "100°C",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["(a) Earth", "(b) Venus", "(c) Mars", "(d) Jupiter"],
    answer: "Mars",
  },
  {
    question: "Which gas do plants absorb?",
    options: [
      "(a) Oxygen",
      "(b) Hydrogen",
      "(c) Carbon Dioxide",
      "(d) Nitrogen",
    ],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is H2O commonly called?",
    options: ["(a) Salt", "(b) Water", "(c) Hydrogen", "(d) Oxygen"],
    answer: "Water",
  },
  {
    question: "How many bones are in the adult body?",
    options: ["(a) 206", "(b) 300", "(c) 150", "(d) 250"],
    answer: "206",
  },
  {
    question: "Which blood group is universal donor?",
    options: ["(a) A", "(b) B", "(c) O", "(d) AB"],
    answer: "O",
  },
  {
    question: "Which organ helps humans breathe?",
    options: ["(a) Heart", "(b) Liver", "(c) Lungs", "(d) Kidney"],
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
