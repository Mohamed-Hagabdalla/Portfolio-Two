document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit Answer");
            } else {
                let typeOfGame = this.getAttribute("data-type");
                alert(`You clicked ${typeOfGame}`);
            }
        })
    }
})

function startGame() {
    //Both variables below labelled number1 and number2 are random numbers between 1 and 15
    let number1 = Math.floor(Math.random() * 15) + 1;
    let number2 = Math.floor(Math.random() * 15) + 1;
}