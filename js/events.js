export function Events({
    playButton,
    stopButton,
    moreButton,
    lessButton,
    treeButton,
    rainButton,
    shopButton,
    fireButton,
    lightMode,
    darkMode,
    timer,
    sound,
    mode,
    control
}) {

    playButton.addEventListener('click', function () {
        playButton.setAttribute("disabled", "disabled");
        timer.countDown(); 
        sound.pressButton();
    });
     
    stopButton.addEventListener('click', function () {
        playButton.removeAttribute("disabled");
        timer.stopTimer();
        sound.pressButton();
    });
     
    moreButton.addEventListener('click', function () {
        timer.moreOrLessMinutes('+');
        sound.pressButton();
    });
     
    lessButton.addEventListener('click', function () {
        timer.moreOrLessMinutes('-');
        sound.pressButton();
    });
     
    treeButton.addEventListener('click', function () {
        if (!treeButton.classList.contains('selected')) {
            control.controlInitialClickInStatusButton('treeButton');
        }
        treeButton.classList.add('selected');
        rainButton.classList.remove('selected');
        shopButton.classList.remove('selected');
        fireButton.classList.remove('selected');
        sound.pressButton();
        sound.treeAudio.play();
        sound.rainAudio.pause();
        sound.shopAudio.pause();
        sound.fireAudio.pause();
    });
     
    rainButton.addEventListener('click', function () {
        if (!rainButton.classList.contains('selected')) {
            control.controlInitialClickInStatusButton('rainButton');
        }
        treeButton.classList.remove('selected');
        rainButton.classList.add('selected');    
        shopButton.classList.remove('selected');
        fireButton.classList.remove('selected');
        sound.pressButton();
        sound.treeAudio.pause();
        sound.rainAudio.play();
        sound.shopAudio.pause();
        sound.fireAudio.pause();
    });
     
    shopButton.addEventListener('click', function () {
        if (!shopButton.classList.contains('selected')) {
            control.controlInitialClickInStatusButton('shopButton');
        }
        treeButton.classList.remove('selected');
        rainButton.classList.remove('selected');
        shopButton.classList.add('selected');
        fireButton.classList.remove('selected');
        sound.pressButton();
        sound.treeAudio.pause();
        sound.rainAudio.pause();
        sound.shopAudio.play();
        sound.fireAudio.pause();
    });
     
    fireButton.addEventListener('click', function () {
        if (!fireButton.classList.contains('selected')) {
            control.controlInitialClickInStatusButton('fireButton');
        }
        treeButton.classList.remove('selected');
        rainButton.classList.remove('selected');
        shopButton.classList.remove('selected');
        fireButton.classList.add('selected');
        sound.pressButton();
        sound.treeAudio.pause();
        sound.rainAudio.pause();
        sound.shopAudio.pause();
        sound.fireAudio.play();
    });

    lightMode.addEventListener('click', function () {
        lightMode.classList.add('hide');
        darkMode.classList.remove('hide');
        mode.setMode();
    });

    darkMode.addEventListener('click', function () {
        lightMode.classList.remove('hide');
        darkMode.classList.add('hide');
        mode.setMode();
    });

}