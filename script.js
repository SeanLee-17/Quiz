var timeEl = document.getElementById("countdown")
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timeEl.textContent = "Time: " + timeLeft
        } else {
            timeEl.textContent = " "
        }
    }, 1000);
}

function displayQuestion(count) {
    if (count === 1) {
        var question1 = document.getElementById("question1");
        var answer1 = document.getElementById("answer1");
        question1.textContent = "What does API stand for?"
        var answerBtn = document.createElement("button")
        answerBtn.setAttribute("data-answer","Application Programming Interface")
        answerBtn.textContent = "Application Programming Interface"
        answer1.appendChild(answerBtn)
        console.log(answerBtn)

    } else if (count === 2) {
        var question1 = document.getElementById("question1");
        var answer1 = document.getElementById("answer1");
        answer1.textContent = " ";
        question1.textContent = "What does API stand?";
        var answerBtn = document.createElement("button")
        answerBtn.setAttribute("data-answer","Application Programming Interface")
        answerBtn.textContent = "Application Programming Interface"
        answer1.appendChild(answerBtn)
        console.log(answerBtn)

    } 
}
var questionCount = 1;

displayQuestion(questionCount)

var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("quesiton4");
var quesiton5 = document.getElementById("question5");

var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var answer5 = document.getElementById("answer5")
var wrong1 = document.getElementById("wrong1")
var wrong11 = document.getElementById("wrong11")
var wrong2 = document.getElementById("wrong2")
var wrong22 = document.getElementById("wrong22")
var wrong3 = document.getElementById("wrong3")
var wrong33 = document.getElementById("wrong33")
var wrong4 = document.getElementById("wrong4")
var wrong44 = document.getElementById("wrong44")
var wrong5 = document.getElementById("wrong5")
var wrong55 = document.getElementById("wrong55")



answer1.addEventListener("click",function(event){
    if (event.target.matches("button")) {
        var userGuess = event.target.getAttribute("data-answer");
        console.log(userGuess);
        //add logic for correct answer
        questionCount++;
        displayQuestion(questionCount)
    }
})