let usreScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.randon()*3);
    return options[randIdx];
}

const playGame= (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice -> modular
    const compChoice= genCompChoice();
    console.log("comp choice =", compChoice);
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

