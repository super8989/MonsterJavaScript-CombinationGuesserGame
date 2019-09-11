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