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