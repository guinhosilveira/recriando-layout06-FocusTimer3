export function Mode({
    body,
    timerWrapper,
    buttonsWrapper,
    statusWrapper
}) {

    function setMode() {
        body.classList.toggle('dark-mode');
        timerWrapper.classList.toggle('dark-mode');
        buttonsWrapper.classList.toggle('dark-mode');
        statusWrapper.classList.toggle('dark-mode');
    }

    return {setMode};

}