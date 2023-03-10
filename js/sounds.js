export function Sound () {
    const treeAudio = new Audio('./assets/Floresta.wav');
    const rainAudio = new Audio('./assets/Chuva.wav');
    const shopAudio = new Audio('./assets/Cafeteria.wav');
    const fireAudio = new Audio('./assets/Lareira.wav');
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");

    treeAudio.loop = true;
    rainAudio.loop = true;
    shopAudio.loop = true;
    fireAudio.loop = true;

    treeAudio.volume = 0;
    rainAudio.volume = 0;
    shopAudio.volume = 0;
    fireAudio.volume = 0;
    
    function pressButton () {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play();
    }

    function controlVolumeAudio(audio, controlVolume) {
        
        switch (audio) {
            case 'treeAudio':
                treeAudio.volume = controlVolume;
                break;
        
            case 'rainAudio':
                rainAudio.volume = controlVolume;
                break;
        
            case 'shopAudio':
                shopAudio.volume = controlVolume;
                break;
        
            case 'fireAudio':
                fireAudio.volume = controlVolume;
                break;
        
            default:
                break;
                
        }
    }

    return {
        treeAudio,
        rainAudio,
        shopAudio,
        fireAudio,
        pressButton,
        timeEnd,
        controlVolumeAudio
    }
}