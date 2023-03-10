export function Timer({
    timerMinutes,
    timerSeconds,
    sound
}) {
    let minutes = timerMinutes.textContent;
    let timerTimeOut;

    function moreOrLessMinutes(operation) {
        let result;
        let minutesEqual0 = timerMinutes.textContent > 0;

        switch (operation) {
            case '+':
                result = Number(timerMinutes.textContent) + 5;
                timerMinutes.textContent = String(result).padStart(2, '0');
                break;
            case '-':
                if (minutesEqual0) {
                    result = Number(timerMinutes.textContent) - 5;
                    timerMinutes.textContent = String(result).padStart(2, '0');
                } else {
                    alert('Não é possível diminuir mais minutos!');
                }
                break;
            default:
                break;
        }
    }

    function updateTimerDisplay(minutes, seconds) {
        timerMinutes.textContent = String(minutes).padStart(2, '0');
        timerSeconds.textContent = String(seconds).padStart(2, '0');
    }

    function updateTime(minutes, seconds) {
        let secondsEqual0 = seconds == 0;
        let minutesEqual0 = minutes == 0;
        
        if (secondsEqual0) {

            if (minutesEqual0) {
                sound.timeEnd();
                timerTimeOut = null;
                return;
            }
            seconds = 60;
            minutes--;
        
        }

        --seconds;
        updateTimerDisplay(minutes, seconds);
    }

    function countDown() {
        timerTimeOut = setTimeout(function () {
            let minutes = timerMinutes.textContent;
            let seconds = timerSeconds.textContent;

            updateTime(minutes, seconds);

            countDown();
        }, 1000)
    }

    function stopTimer() {
        clearTimeout(timerTimeOut);
        if (!timerTimeOut) {
            resetTime();
        } 
        timerTimeOut = null;
    }

    function resetTime() {
        timerMinutes.textContent = minutes;
        timerSeconds.textContent = '00';
    }

    return {
        moreOrLessMinutes,
        updateTimerDisplay,
        updateTime,
        countDown,
        stopTimer,
        resetTime 
    };

}