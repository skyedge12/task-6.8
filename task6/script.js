const trafficLight1 = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLight1.style.background = ('green');
    trafficLight2.style.background = ('black');
    trafficLight3.style.background = ('black');
    trafficLight1.removeEventListener('click', makeGreen);
    trafficLight2.removeEventListener('click', makeGreen);
    trafficLight3.removeEventListener('click', makeGreen);
    trafficLight1.addEventListener('click', makeYellow);
    trafficLight2.addEventListener('click', makeYellow);
    trafficLight3.addEventListener('click', makeYellow);
}

trafficLight1.addEventListener('click', makeGreen);
trafficLight2.addEventListener('click', makeYellow);
trafficLight3.addEventListener('click', makeRed);


function makeYellow() {
    trafficLight2.style.background = ('yellow');
    trafficLight1.style.background = ('black');
    trafficLight3.style.background = ('black');
    trafficLight1.removeEventListener('click', makeYellow);
    trafficLight2.removeEventListener('click', makeYellow);
    trafficLight3.removeEventListener('click', makeYellow);
    trafficLight1.addEventListener('click', makeRed);
    trafficLight2.addEventListener('click', makeRed);
    trafficLight3.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLight1.style.background = ('black');
    trafficLight2.style.background = ('black');
    trafficLight3.style.background = ('red');
    trafficLight1.removeEventListener('click', makeRed);
    trafficLight2.removeEventListener('click', makeRed);
    trafficLight3.removeEventListener('click', makeRed);
    trafficLight1.addEventListener('click', makeGreen);
    trafficLight2.addEventListener('click', makeGreen);
    trafficLight3.addEventListener('click', makeGreen);
}