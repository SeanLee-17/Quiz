var timeEl = document.getElementById("countdown");
var question1 = document.getElementById("question1");
var captionEl = document.getElementById("caption");
var answer1 = document.getElementById("answer1");
var wrong1 = document.getElementById("wrong1");
var wrong2 = document.getElementById("wrong2");

var answerBtn = document.createElement("button");
var wrong1Btn = document.createElement("button");
var wrong2Btn = document.createElement("button");

var verdict = document.getElementById("verdict")
var questionCount = 0;
var answers = ["Confirm","Application Programming Interface","CSS","Charles Babbage","Document Object Model","period"]

answerBtn.setAttribute("style","border: none; background-color: var(--light); width: 100%;");
wrong1Btn.setAttribute("style","border: none; background-color: var(--light); width: 100%;");
wrong2Btn.setAttribute("style","border: none; background-color: var(--light); width: 100%;");
verdict.setAttribute("style","color: var(--dark); text-align: center; font-size: 20px;")

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
    if (count === 0) {
        question1.textContent = "Coding Quiz";
        captionEl.textContent = "Would you like to take this quiz?";

        answerBtn.setAttribute("data-answer","Confirm");
        answerBtn.textContent = "Confirm";
        answer1.appendChild(answerBtn);
    }
    else if (count === 1) {

        question1.textContent = "What does API stand for?";
        captionEl.textContent = " ";

        answerBtn.setAttribute("data-answer","Application Programming Interface");
        wrong1Btn.setAttribute("data-wrong1","Advanced Python Initiative");
        wrong2Btn.setAttribute("data-wrong2","Automatic Processing Identification");

        answerBtn.textContent = "Application Programming Interface";
        wrong1Btn.textContent = "Advanced Python Initiative";
        wrong2Btn.textContent = "Automatic Processing Identification";

        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)

    } else if (count === 2) {

        question1.textContent = "What coding language is used to style a webpage?";
        captionEl.textContent = " ";

        answerBtn.setAttribute("data-answer","JavaScript");
        wrong1Btn.setAttribute("data-wrong1","CSS");
        wrong2Btn.setAttribute("data-wrong2","HTML");

        answerBtn.textContent = "JavaScript";
        wrong1Btn.textContent = "CSS";
        wrong2Btn.textContent = "HTML";
        
        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)

    } else if (count === 3) {

        question1.textContent = "Who created the first computer?";
        captionEl.textContent = " ";

        answerBtn.setAttribute("data-answer","Charles Babbage");
        wrong1Btn.setAttribute("data-wrong1","Alan Turing");
        wrong2Btn.setAttribute("data-wrong2","Per Mertesacker");

        answerBtn.textContent = "Charles Babbage";
        wrong1Btn.textContent = "Alan Turing";
        wrong2Btn.textContent = "Per Mertesacker";
            
        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)

    } else if (count === 4) {
        
        question1.textContent = "What does DOM stand for?";
        captionEl.textContent = " ";

        answerBtn.setAttribute("data-answer","Designated Orientation Marker");
        wrong1Btn.setAttribute("data-wrong1","Display Original Manager");
        wrong2Btn.setAttribute("data-wrong2","Document Object Model");

        answerBtn.textContent = "Designated Orientation Marker";
        wrong1Btn.textContent = "Display Original Manager";
        wrong2Btn.textContent = "Document Object Model";

        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)

    } else if (count === 5) {
        
        question1.textContent = "What symbol denotes a class in CSS?";
        captionEl.textContent = " ";

        answerBtn.setAttribute("data-answer","hyphen");
        wrong1Btn.setAttribute("data-wrong1","period");
        wrong2Btn.setAttribute("data-wrong2","hashtag");

        answerBtn.textContent = "hyphen";
        wrong1Btn.textContent = "period";
        wrong2Btn.textContent = "hashtag";

        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)
    } else {
        question1.textContent = "Congrats on finishing!"
        captionEl.textContent = " ";

        answerBtn.textContent = " ";
        wrong1Btn.textContent = " ";
        wrong2Btn.textContent = " ";

        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)
    }
}

displayQuestion(questionCount)

answer1.addEventListener("click",function(event){
    if (event.target.matches("button")) {
        var userGuess = event.target.getAttribute("data-answer");
        console.log(userGuess);
        function correct() {
            if (questionCount === 1) {
                if (userGuess === answers[1]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                    //put time editor
                }
            } else if (questionCount === 2) {
                if (userGuess === answers[2]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 3) {
                if (userGuess === answers[3]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 4) {
                if (userGuess === answers[4]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 5) {
                if (userGuess === answers[5]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            }
        };
        correct();
        questionCount++;
        displayQuestion(questionCount)
    } 
})

wrong1.addEventListener("click",function(event){
    if (event.target.matches("button")) {
        var userGuess = event.target.getAttribute("data-wrong1");
        console.log(userGuess);
        function correct() {
            if (questionCount === 1) {
                if (userGuess === answers[1]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                    //put time editor
                }
            } else if (questionCount === 2) {
                if (userGuess === answers[2]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 3) {
                if (userGuess === answers[3]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 4) {
                if (userGuess === answers[4]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 5) {
                if (userGuess === answers[5]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            }
        };
        correct();
        questionCount++;
        displayQuestion(questionCount)
    } 
})

wrong2.addEventListener("click",function(event){
    if (event.target.matches("button")) {
        var userGuess = event.target.getAttribute("data-wrong2");
        console.log(userGuess);
        function correct() {
            if (questionCount === 1) {
                if (userGuess === answers[1]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                    //put time editor
                }
            } else if (questionCount === 2) {
                if (userGuess === answers[2]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 3) {
                if (userGuess === answers[3]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 4) {
                if (userGuess === answers[4]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            } else if (questionCount === 5) {
                if (userGuess === answers[5]) {
                    verdict.textContent= "Correct!"
                } else {
                    verdict.textContent= "Wrong!"
                }
            }
        };
        correct();
        questionCount++;
        displayQuestion(questionCount)
    } 
})
