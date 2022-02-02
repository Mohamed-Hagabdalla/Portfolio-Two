document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit Answer");
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


