const startBtn = document.querySelector(".start-btn");
const backBtn = document.querySelector(".back-btn");

// START EXAM
startBtn.addEventListener("click", () => {
  const confirmStart = confirm(
    "Your timer will start immediately. Do you want to continue?",
  );

  if (confirmStart) {
    // Save exam start time (for timer later)
    localStorage.setItem("examStartTime", Date.now());

    // Redirect to exam page
    window.location.href = "exam.html";
  }
});

// BACK
backBtn.addEventListener("click", () => {
  window.history.back();
});
