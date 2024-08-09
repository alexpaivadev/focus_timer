export default function Controls({ buttonPlay, buttonPause, buttonStop, buttonSet }) {

    function play() {
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
        buttonSet.classList.add('hide');
        buttonStop.classList.remove('hide');
    }

    function pause(timerTimeOut) {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
        clearTimeout(timerTimeOut)
    }

    function reset() {
        buttonStop.classList.toggle('hide')
        buttonSet.classList.toggle('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    return {
        reset,
        play,
        pause
    }
}