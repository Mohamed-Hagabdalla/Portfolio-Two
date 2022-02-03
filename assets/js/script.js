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

    document.getElementById("answer").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

})

function startGame(typeOfGame) {

    //Empties the answer box every time the user submits their answer, so they do not have to do it after every question.
    document.getElementById("answer").value = "";

    //Both variables below labelled number1 and number2 are random numbers between 1 and 15
    let number1 = Math.floor(Math.random() * 15) + 1;
    let number2 = Math.floor(Math.random() * 15) + 1;

    if (typeOfGame === "Add") {
        additionQuestion(number1, number2);
    } else if (typeOfGame === "Times") {
        multiplicationQuestion(number1, number2);
    } else if (typeOfGame === "Minus") {
        subtractionQuestion(number1, number2);
    } else {
        alert(`Unknown game type: ${typeOfGame}`);
    }
}

function additionQuestion(firstoperand, secondoperand) {

    document.getElementById('first-operand').textContent = firstoperand;
    document.getElementById('operator').textContent = "+";
    document.getElementById('second-operand').textContent = secondoperand;

}

function multiplicationQuestion(firstoperand, secondoperand) {
    
    document.getElementById('first-operand').textContent = firstoperand;
    document.getElementById('operator').textContent = "x";
    document.getElementById('second-operand').textContent = secondoperand;

}

function subtractionQuestion(firstoperand, secondoperand) {
    //Ternary operator "?" checks if the condition is true. There are two returns. One if the condition is true "firstoperand", and one if the condition is false "secondoperand".
    document.getElementById('first-operand').textContent = firstoperand > secondoperand ? firstoperand : secondoperand;
    document.getElementById('operator').textContent = "-";
    //Ternary operator "?" checks if the condition is true. There are two returns. One if the condition is true "secondoperand", and one if the condition is false "firstoperand".
    document.getElementById('second-operand').textContent = firstoperand > secondoperand ? secondoperand : firstoperand;

}

/**
 * This function will store both values as first and second operands
 * and then calculate the answer,
 * depending on the operator in question. 
 */
function calculateCorrectAnswer() {

    let firstoperand = parseInt(document.getElementById('first-operand').innerText);
    let operator = document.getElementById('operator').innerText;
    let secondoperand = parseInt(document.getElementById('second-operand').innerText);

    if (operator === "+") {
    return [firstoperand + secondoperand, "Add"];
    } else if (operator === "x") {
        return [firstoperand * secondoperand, "Times"];
    } else if (operator === "-") {
        return [firstoperand - secondoperand, "Minus"];
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
