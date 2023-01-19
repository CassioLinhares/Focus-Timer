import { Sound } from "./sounds.js";
export default function Timer({ minutesDisplay, secondsDisplay }) {
    const sound = Sound()
    let minutes = Number(minutesDisplay.textContent)
    let timerTimeOut // setTimeOut() = gera um id e apartir desse valor a function - clearTimeOut() faz parar

    function resetTimer() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function stoped() {
        clearTimeout(timerTimeOut)
    }

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

    function countDown() {
        timerTimeOut = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            if (seconds == 0 && minutes == 0) {
                sound.timeEnd()
                resetTimer()
                return
            }

            if (seconds == 0) {
                seconds = 60
                --minutes
                updateDisplay(minutes, seconds)
            }
            --seconds
            updateDisplay(minutes, seconds)
            countDown()
        }, 1000)
    }

    //se usar minutes dentro dos IF() a soma ou a remoção pegara o valor de minute não atualizado
    //por isso é necessário usar o valor que esta no display
    function add5minutes() {
        if (minutesDisplay.textContent <= 55) {
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
            return
        }
        minutesDisplay.textContent = '60'
        secondsDisplay.textContent = '00'
    }

    function remove5minutes() {
        if (minutesDisplay.textContent > 5) {
            minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
            return
        }
        if (minutesDisplay.textContent <= 1) {
            updateDisplay(0, secondsDisplay.textContent)
            return
        }

        minutesDisplay.textContent = '01'
        secondsDisplay.textContent = '00'
    }

    return {
        updateDisplay,
        resetTimer,
        stoped,
        countDown,
        add5minutes,
        remove5minutes
    }
}