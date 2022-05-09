let trafficImg = document.querySelectorAll(".traffic-img");
var car = document.querySelector(".car");
let score = document.querySelector(".score");

function toggleFloat() {
    car.classList.toggle("carLeft");
}

(function() {
    let counter = 0;
    let scoreChangingTime = 1000;
    setInterval(() => {
        score.innerHTML = counter++;
        localStorage.setItem("score", (counter + +localStorage.getItem("score")));
    }, scoreChangingTime);
})();