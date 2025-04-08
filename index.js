
let speed = 60;
let max = 750;

let speedscreen  = document.querySelector(".speed .km");
let maxscreen  = document.querySelector(".zapas .km");
let speedup  = document.querySelectorAll(".btns button")[0];
let speeddown  = document.querySelectorAll(".btns button")[1];

function newdisplay() {
    speedscreen.textContent = `${speed} км/ч`;
    maxscreen.textContent = `${max}км`;
}

speedup.addEventListener('click', () => {
    if (speed < 280) {
        speed += 20;
        max -= 20;
    }
    if (max < 0) {
        max = 0;
    }
    newdisplay();
});

speeddown.addEventListener('click', () => {
    if (speed > 0) {
        speed -= 20;
        max = max + 20;
        if (max > 750) {
            max = 750;
        }
    }
    newdisplay();
});

newdisplay();
