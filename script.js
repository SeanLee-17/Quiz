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
        var wrong1 = document.getElementById("wrong1");
        var wrong2 = document.getElementById("wrong2");
        
        var answerBtn = document.createElement("button");
        var wrong1Btn = document.createElement("button");
        var wrong2Btn = document.createElement("button");

        question1.textContent = "What does API stand for?";
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
        var question1 = document.getElementById("question1");
        var answer1 = document.getElementById("answer1");
        var wrong1 = document.getElementById("wrong1");
        var wrong2 = document.getElementById("wrong2");
    
        var answerBtn = document.createElement("button");
        var wrong1Btn = document.createElement("button");
        var wrong2Btn = document.createElement("button");

        question1.textContent = "What coding language is used to style a webpage?";
        answerBtn.setAttribute("data-answer","JavaScript");
        wrong1Btn.setAttribute("data-wrong1","CSS");
        wrong2Btn.setAttribute("data-wrong2","HTML");
        answerBtn.textContent = "JavaScript";
        wrong1Btn.textContent = "CSS";
        wrong2Btn.textContent = "HTML";

        console.log(wrong1.children[0].wrong1)

        

        wrong1.children[0].removeChild(wrong1)
       

        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)

    } else if (count === 3) {
        var question1 = document.getElementById("question1");
        var answer1 = document.getElementById("answer1");
        var wrong1 = document.getElementById("wrong1");
        var wrong2 = document.getElementById("wrong2");
    
        var answerBtn = document.createElement("button");
        var wrong1Btn = document.createElement("button");
        var wrong2Btn = document.createElement("button");

        answer1.removeChild(answerBtn)
        wrong1.removeChild(wrong1Btn)
        wrong2.removeChild(wrong2Btn)

        question1.textContent = "Who created the first computer?";
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
        var question1 = document.getElementById("question1");
        var answer1 = document.getElementById("answer1");
        var wrong1 = document.getElementById("wrong1");
        var wrong2 = document.getElementById("wrong2");
    
        var answerBtn = document.createElement("button");
        var wrong1Btn = document.createElement("button");
        var wrong2Btn = document.createElement("button");

        answer1.removeChild(answerBtn)
        wrong1.removeChild(wrong1Btn)
        wrong2.removeChild(wrong2Btn)
        
        question1.textContent = "What does DOM stand for?";
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
        var question1 = document.getElementById("question1");
        var answer1 = document.getElementById("answer1");
        var wrong1 = document.getElementById("wrong1");
        var wrong2 = document.getElementById("wrong2");
    
        var answerBtn = document.createElement("button");
        var wrong1Btn = document.createElement("button");
        var wrong2Btn = document.createElement("button");
        
        question1.textContent = "What symbol denotes a class in CSS?";
        answerBtn.setAttribute("data-answer","hyphen");
        wrong1Btn.setAttribute("data-wrong1","period");
        wrong2Btn.setAttribute("data-wrong2","hashtag");
        answerBtn.textContent = "hyphen";
        wrong1Btn.textContent = "period";
        wrong2Btn.textContent = "hashtag";

        answer1.appendChild(answerBtn)
        wrong1.appendChild(wrong1Btn)
        wrong2.appendChild(wrong2Btn)
    } 
}
var questionCount = 1;
var answers = ["Application Program Interface","CSS","Charles Babbage","Document Object Model","period"]
displayQuestion(questionCount)

answer1.addEventListener("click",function(event){
    if (event.target.matches("button")) {
        var userGuess = event.target.getAttribute("data-answer");
        console.log(userGuess);
        function correct() {

        }
        questionCount++;
        displayQuestion(questionCount)
    } 
})

