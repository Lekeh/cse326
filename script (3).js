// ---------- change pages ----------
function showPage(name) {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove("show");
    }
    document.getElementById(name).classList.add("show");
}

// ---------- change lessons ----------
function showLesson(num) {
    var lessons = document.getElementsByClassName("lesson");
    for (var i = 0; i < lessons.length; i++) {
        lessons[i].classList.remove("show");
    }
    document.getElementById("lesson" + num).classList.add("show");
}

// ---------- password checker ----------
function checkPassword() {
    var pw = document.getElementById("pw").value;
    var fill = document.getElementById("fill");
    var text = document.getElementById("strength");
    var score = 0;

    if (pw.length >= 8) {
        score = score + 1;
    }
    if (pw.match(/[A-Z]/)) {
        score = score + 1;
    }
    if (pw.match(/[0-9]/)) {
        score = score + 1;
    }
    if (pw.match(/[^A-Za-z0-9]/)) {
        score = score + 1;
    }

    fill.style.width = (score * 25) + "%";

    if (pw == "") {
        text.innerHTML = "Strength: -";
    } else if (score <= 1) {
        text.innerHTML = "Strength: Weak";
        fill.style.backgroundColor = "red";
    } else if (score <= 3) {
        text.innerHTML = "Strength: Medium";
        fill.style.backgroundColor = "orange";
    } else {
        text.innerHTML = "Strength: Strong";
        fill.style.backgroundColor = "#1ee07a";
    }
}

// ---------- quiz ----------
var questions = [
    "You get an email: 'Your account is blocked, click here now'. What will you do?",
    "Which password is the strongest?",
    "A caller from the 'bank' asks for your OTP. What should you do?",
    "You find a pendrive in college. What should you do?",
    "Is it safe to do online banking on free public Wi-Fi?"
];

var options = [
    ["Click the link", "Ignore it or check the official website", "Reply with password"],
    ["rahul123", "password", "Tr@in9Eats!Mango"],
    ["Give the OTP", "Cut the call and do not share OTP", "Give half of the OTP"],
    ["Plug it in my laptop", "Give it to the IT department", "Format and use it"],
    ["Yes", "Yes, if it is fast", "No, it is risky"]
];

var answers = [1, 2, 1, 1, 2];

var current = 0;
var score = 0;
var answered = false;

function showQuestion() {
    answered = false;
    var html = "<h3>Question " + (current + 1) + " of " + questions.length + "</h3>";
    html = html + "<p>" + questions[current] + "</p>";

    for (var i = 0; i < options[current].length; i++) {
        html = html + "<button class='option' onclick='checkAnswer(" + i + ")'>" + options[current][i] + "</button>";
    }

    html = html + "<p id='result'></p>";
    html = html + "<div id='next'></div>";
    document.getElementById("quiz-box").innerHTML = html;
}

function checkAnswer(choice) {
    if (answered == true) {
        return;
    }
    answered = true;

    var result = document.getElementById("result");
    if (choice == answers[current]) {
        score = score + 1;
        result.innerHTML = "Correct!";
    } else {
        result.innerHTML = "Wrong! Correct answer: " + options[current][answers[current]];
    }

    document.getElementById("next").innerHTML = "<button onclick='nextQuestion()'>Next</button>";
}

function nextQuestion() {
    current = current + 1;
    if (current < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML =
            "<h3>Quiz Finished</h3><p>Your score: " + score + " / " + questions.length + "</p>" +
            "<button onclick='restartQuiz()'>Try Again</button>";
    }
}

function restartQuiz() {
    current = 0;
    score = 0;
    showQuestion();
}

showQuestion();

// ---------- report form ----------
function submitReport() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var details = document.getElementById("details").value;
    var msg = document.getElementById("msg");

    if (name == "" || email == "" || details == "") {
        msg.innerHTML = "Please fill all the fields.";
    } else {
        msg.innerHTML = "Thank you " + name + ", your report is submitted.";
    }
}
