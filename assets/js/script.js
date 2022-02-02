document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let typeOfGame = this.getAttribute("data-type");
                startGame(typeOfGame);
            }
        })
    }
})

function startGame(typeOfGame) {

    //Both variables below labelled number1 and number2 are random numbers between 1 and 15
    let number1 = Math.floor(Math.random() * 15) + 1;
    let number2 = Math.floor(Math.random() * 15) + 1;

    if (typeOfGame === "Add") {
        additionQuestion(number1, number2);
    } else {
        alert(`Unknown game type: ${typeOfGame}`);
    }
}

function additionQuestion(firstoperand, secondoperand) {

    document.getElementById('first-operand').textContent = firstoperand;
    document.getElementById('operator').textContent = "+";
    document.getElementById('second-operand').textContent = secondoperand;

}

/**
 * This function will store both values as first and second operands
 * and then calculate the answer,
 * depending on the operator displayed in the question. 
 */
function calculateCorrectAnswer() {

    let firstoperand = parseInt(document.getElementById('first-operand').innerText);
    let operator = document.getElementById('operator').innerText;
    let secondoperand = parseInt(document.getElementById('second-operand').innerText);

    if (operator === "+") {

        return [firstoperand + secondoperand, "Add"]

    } else {
        alert(`Wrong operator ${operator}`);
    }
}

/**
 * This function will check whether or not
 * the user's answer is correct
 */
function checkAnswer() {

   let userAnswer = parseInt(document.getElementById("answer").value);
   let calculatedAnswer = calculateCorrectAnswer();
   let answerCondition = userAnswer === calculatedAnswer[0];

   if (answerCondition) {
       alert(`You got the answer right!`);
       increaseCorrectScore();
   } else {
       alert(`Your answer was ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`);
       increaseIncorrectScore();
   }

   startGame(calculatedAnswer[1]);

}

/**
 * Increases the "correct answers" score by 1
 */
function increaseCorrectScore() {
    
    let currentScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++currentScore;

}

/**
 * Increases the "incorrect answers" score by 1
 */
function increaseIncorrectScore() {
    
    let currentScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++currentScore;

}
