export default function Timer({
    minutesDisplay,
    secondsDisplay,
    pause,
}) {
let timerTimeOut;
let isRunning = false;
let minutes = Number(minutesDisplay.textContent);

function reset() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    isRunning = false
} 

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function pause() {
    clearTimeout(timerTimeOut);
    isRunning = false;
}

const countDown = () => {
    isRunning = true

    timerTimeOut = setTimeout(() => {
         let seconds = Number(secondsDisplay.textContent)
         let minutes = Number(minutesDisplay.textContent)
 
         updateTimerDisplay(minutes, 0)
 
         if(minutes <= 0) {
             Controls.reset()
             return
         }
 
         if(seconds <= 0) {
             seconds = 60
             --minutes
         }
         
         updateTimerDisplay(minutes, String(seconds - 1))
         countDown()
     }, 1000)
 }

return {
    countDown,
    updateTimerDisplay,
    reset,
    isRunning: () => isRunning, 
    pause,
}

}