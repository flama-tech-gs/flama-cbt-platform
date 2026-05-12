const questions = [
  { q: "Basic unit of life?", o: ["Tissue", "Organ", "Cell", "System"], a: 2 },
  {
    q: "Control center of cell?",
    o: ["Membrane", "Nucleus", "Cytoplasm", "Ribosome"],
    a: 1,
  },
  { q: "Blood pump organ?", o: ["Brain", "Heart", "Kidney", "Liver"], a: 1 },
  {
    q: "Photosynthesis occurs in?",
    o: ["Root", "Stem", "Leaf", "Flower"],
    a: 2,
  },
  {
    q: "Gas for respiration?",
    o: ["CO2", "Oxygen", "Nitrogen", "Hydrogen"],
    a: 1,
  },
  { q: "Boiling point of water?", o: ["50", "100", "150", "200"], a: 1 },
  { q: "Red planet?", o: ["Earth", "Mars", "Venus", "Jupiter"], a: 1 },
  { q: "Vitamin from sunlight?", o: ["A", "B", "C", "D"], a: 3 },
  { q: "Largest organ?", o: ["Heart", "Liver", "Skin", "Brain"], a: 2 },
  {
    q: "Nervous system controls?",
    o: ["Digestion", "Movement", "Coordination", "Breathing"],
    a: 2,
  },
];

let current = 0;
let answers = JSON.parse(localStorage.getItem("answers")) || {};

/* LOAD QUESTION */
function loadQuestion() {
  const q = questions[current];

  document.getElementById("qTitle").textContent = `Question ${current + 1}`;
  document.getElementById("qText").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.o.forEach((opt, i) => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="radio" name="option" value="${i}"
      ${answers[current] == i ? "checked" : ""}/>
      ${opt}
    `;

    label.onclick = () => {
      answers[current] = i;
      localStorage.setItem("answers", JSON.stringify(answers));
      updateGrid();
    };

    optionsDiv.appendChild(label);
  });

  updateGrid();
}

/* GRID */
function renderGrid() {
  const grid = document.getElementById("questionGrid");
  grid.innerHTML = "";

  questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.className = "q-number";

    btn.onclick = () => {
      current = i;
      loadQuestion();
    };

    grid.appendChild(btn);
  });
}

function updateGrid() {
  const btns = document.querySelectorAll(".q-number");

  btns.forEach((btn, i) => {
    btn.classList.remove("active", "answered");

    if (i === current) btn.classList.add("active");
    if (answers[i] !== undefined) btn.classList.add("answered");
  });
}

/* NAVIGATION */
function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

/* TIMER */
let time = 600;

function startTimer() {
  setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").textContent =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    time--;

    if (time < 0) submitExam();
  }, 1000);
}

/* SUBMIT */
function submitExam() {
  alert("Exam Submitted!");
  localStorage.removeItem("answers");
}

/* INIT */
renderGrid();
loadQuestion();
startTimer();
