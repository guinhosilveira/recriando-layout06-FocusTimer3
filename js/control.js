export function Control({
    form,
    volumeOne,
    volumeTwo,
    volumeThree,
    volumeFour,
    sound
}) {

    form.onsubmit = function onSubmit(event) {
        event.preventDefault();

        volumeOne.oninput   = () => sound.controlVolumeAudio('treeAudio', volumeOne.value);
        volumeTwo.oninput   = () => sound.controlVolumeAudio('rainAudio', volumeTwo.value);
        volumeThree.oninput = () => sound.controlVolumeAudio('shopAudio', volumeThree.value);
        volumeFour.oninput  = () => sound.controlVolumeAudio('fireAudio', volumeFour.value);
    }

    function controlInitialClickInStatusButton(button) {
        switch (button) {
            case 'treeButton':
                volumeOne.value   = 0;   
                volumeTwo.value   = 0;
                volumeThree.value = 0;
                volumeFour.value  = 0;
                volumeOne.stepUp(50);   
                sound.controlVolumeAudio('treeAudio', 0.5);
                break;
        
            case 'rainButton':
                volumeOne.value   = 0;   
                volumeTwo.value   = 0;
                volumeThree.value = 0;
                volumeFour.value  = 0;
                volumeTwo.stepUp(50);   
                sound.controlVolumeAudio('rainAudio', 0.5);
                break;
        
            case 'shopButton':
                volumeOne.value   = 0;   
                volumeTwo.value   = 0;
                volumeThree.value = 0;
                volumeFour.value  = 0;
                volumeThree.stepUp(50);   
                sound.controlVolumeAudio('shopAudio', 0.5);
                break;
        
            case 'fireButton':
                volumeOne.value   = 0;   
                volumeTwo.value   = 0;
                volumeThree.value = 0;
                volumeFour.value  = 0;
                volumeFour.stepUp(50);   
                sound.controlVolumeAudio('fireAudio', 0.5);
                break;
        
            default:
                break;
        }
    }

    return {controlInitialClickInStatusButton}
    
}