let timer;
let timeLeft = 25 * 60; // 25 minutes
let isRunning = false;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("Pomodoro complete!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateDisplay();
}

function setCustomDuration() {
  const inputMinutes = parseInt(document.getElementById("customMinutes").value);
  if (!isNaN(inputMinutes) && inputMinutes > 0) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = inputMinutes * 60;
    updateDisplay();
  }
}

updateDisplay(); // initialize on load
