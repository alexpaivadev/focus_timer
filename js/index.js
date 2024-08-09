import Controls from "./controls.js";
import Timer from "./timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on'); 
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
}
)

const configTimer = {
    minutesDisplay,
    secondsDisplay,
    pause: controls.pause 
}

const timer = Timer(configTimer)

function tooglePlay() {
    controls.play()
    timer.countDown()
}

function tooglePause() {
    timer.pause()
}


function toogleStopButton() {
    timer.reset()
    controls.reset()
}

function toogleSoundButton() {
    buttonSoundOn.classList.toggle('hide');
    buttonSoundOff.classList.toggle('hide');
}

function setMinutes() {
    let newMinutes = prompt("Quantos minutos?")

    if(!newMinutes) {
        timer.reset()
        controls.reset()
        return
    }
    minutes = newMinutes
    return minutes
}

buttonSet.addEventListener('click', () => {
    setMinutes()
    timer.updateTimerDisplay(minutes, 0)
    console.log(minutesDisplay.textContent)
})

buttonPlay.addEventListener('click', tooglePlay);
buttonPause.addEventListener('click', tooglePause);
buttonStop.addEventListener('click', toogleStopButton);
buttonSoundOn.addEventListener('click', toogleSoundButton);
buttonSoundOff.addEventListener('click', toogleSoundButton);