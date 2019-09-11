const gameArea = document.querySelector(".game");
const button = document.querySelector("button");

let gamePlay = false;

button.addEventListener("click", function() {
    if (!gamePlay) {
        gamePlay = true;
        maker();
        button.innerHTML = 'Check combo';
    } else {
        console.log('checker');
        const numbers = document.querySelectorAll(".numb");
        console.log(numbers);

        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i].value);
            console.log(numbers[i].correct);

            if (numbers[i].value == numbers[i].correct) {
                console.log("Match");    
            } else {
                console.log("No Match");
            }
        }
    }
})


function maker() {
    for (let x = 0; x < 4; x++) {
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.order = x;
        el.size = 1;
        el.style.width = "50px";
        el.classList.add("numb");
        
        el.correct = Math.floor(Math.random() * 10);
        el.value = el.correct;
        console.log(el);
        gameArea.appendChild(el);
    }
}