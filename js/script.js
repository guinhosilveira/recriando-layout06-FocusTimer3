import { Sound } from "./sounds.js";
import { Elements } from "./elements.js";
import { Timer } from "./timer.js";
import { Mode } from "./controlMode.js";
import { Events } from "./events.js";
import { Control } from "./control.js";

const {
    timerMinutes,
    timerSeconds,
    treeButton,
    rainButton,
    shopButton,
    fireButton,
    playButton,
    stopButton,
    moreButton,
    lessButton,
    lightMode,
    darkMode,
    body,
    timerWrapper,
    buttonsWrapper,
    statusWrapper,
    form,
    volumeOne,
    volumeTwo,
    volumeThree,
    volumeFour
} = Elements;

const sound = Sound();

const configTimer = {
    timerMinutes,
    timerSeconds,
    Sound
};
const timer = Timer(configTimer);

const configMode = {
    body,
    timerWrapper, 
    buttonsWrapper,
    statusWrapper
};
const mode = Mode(configMode);

const configControl = {
    form,
    volumeOne,
    volumeTwo,
    volumeThree,
    volumeFour,
    sound
};
const control = Control(configControl);

const configEvents = {
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
};
const events = Events(configEvents);
