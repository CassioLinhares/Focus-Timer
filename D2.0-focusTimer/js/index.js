import Timer from "./timer.js";
import { Sound } from "./sounds.js";
import {
    buttonPlay,
    buttonStop,
    buttonAdd,
    buttonRemove,
    buttonSoundNature,
    buttonSoundRain,
    buttonSoundUrban,
    buttonSoundFire,
    minutesDisplay,
    secondsDisplay,
    buttonDarkTheme,
    buttonLightTheme,
    volumeNature,
    volumeRain,
    volumeUrban,
    volumeFire,
    colorVolume
} from "./elements.js";

const sound = Sound()

const timer = Timer(
    {
        minutesDisplay,
        secondsDisplay
    }
)

buttonPlay.addEventListener('click', () => {
    timer.countDown()
    sound.pressButton()
})
buttonStop.addEventListener('click', () => {
    sound.pressButton()
    timer.stoped()
})
buttonAdd.addEventListener('click', () => {
    sound.pressButton()
    timer.add5minutes()
})
buttonRemove.addEventListener('click', () => {
    sound.pressButton()
    timer.remove5minutes()
})

buttonSoundNature.addEventListener('click', () => {
    sound.pressButton()
    checkButtonFixedVolume(buttonSoundNature, sound.nature, volumeNature)
    buttonSoundSelect(buttonSoundNature)
})

buttonSoundRain.addEventListener('click', () => {
    sound.pressButton()
    checkButtonFixedVolume(buttonSoundRain, sound.rain, volumeRain)
    buttonSoundSelect(buttonSoundRain)
})

buttonSoundUrban.addEventListener('click', () => {
    sound.pressButton()
    checkButtonFixedVolume(buttonSoundUrban, sound.urban, volumeUrban)
    buttonSoundSelect(buttonSoundUrban)
    buttonSoundSelect(colorVolume)
})

buttonSoundFire.addEventListener('click', () => {
    sound.pressButton()
    checkButtonFixedVolume(buttonSoundFire, sound.fire, volumeFire)
    buttonSoundSelect(buttonSoundFire)
})

buttonDarkTheme.addEventListener('click', () => {
    sound.pressButton()
    checkTheme()
    document.body.classList.toggle('dark')
})

buttonLightTheme.addEventListener('click', () => {
    sound.pressButton()
    checkTheme()
    document.body.classList.toggle('dark')
})

volumeNature.addEventListener('change', () => {
    sound.setVolume(sound.nature, volumeNature)
})

volumeRain.addEventListener('change', () => {
    sound.setVolume(sound.rain, volumeRain)
})

volumeUrban.addEventListener('change', () => {
    sound.setVolume(sound.urban, volumeUrban)
})

volumeFire.addEventListener('change', () => {
    sound.setVolume(sound.fire, volumeFire)
})


function buttonSoundSelect(button) {
    button.classList.toggle('on')
    button.classList.toggle('off')
}

function checkButtonFixedVolume(btnSound, audio, input) {
    //pra conseguir mudar volume do som tem que mudar index.html
    // btnSound.classList.contains('off') ? sound.playAudio(audio) : sound.pauseAudio(audio)
    if (btnSound.classList.contains('off')) {
        sound.playAudio(audio)
        input.value = 0.5
    } else{
        sound.pauseAudio(audio)
        input.value = 0
    }
}

function checkTheme() {
    buttonDarkTheme.classList.toggle('hide')
    buttonLightTheme.classList.toggle('hide')
}

