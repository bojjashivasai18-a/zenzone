function startBreathing() {
    document
        .getElementById("breathing-circle")
        .classList.toggle("breathe");
}

let time = 120;
let interval;

function updateDisplay() {
    let min = String(Math.floor(time / 60)).padStart(2, "0");
    let sec = String(time % 60).padStart(2, "0");

    document.getElementById("timer").innerText =
        `${min}:${sec}`;
}

function startTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    time = 120;
    updateDisplay();
}

function saveNotes() {
    const notes = document.getElementById("notes").value;

    localStorage.setItem("zenNotes", notes);

    alert("Saved successfully!");
}

function clearNotes() {
    document.getElementById("notes").value = "";
    localStorage.removeItem("zenNotes");
}

window.onload = () => {
    document.getElementById("notes").value =
        localStorage.getItem("zenNotes") || "";
};

const quotes = [
    "You don't have to figure everything out today.",
    "Take one breath at a time.",
    "Small steps count too.",
    "Rest is productive.",
    "You are doing better than you think."
];

function newQuote() {
    const random =
        quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quoteText").innerText =
        random;
}