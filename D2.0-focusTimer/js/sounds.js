export function Sound() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const nature = new Audio('./audio/Floresta.wav')
    const rain = new Audio('./audio/Chuva.wav')
    const urban = new Audio('./audio/Cafeteria.wav')
    const fire = new Audio('./audio/Lareira.wav')

    nature.loop = true
    rain.loop = true
    urban.loop = true
    fire.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }
    
    function playAudio(audio) {
        audio.play()
    }

    function pauseAudio(audio) {
        audio.pause()
    }

    function setVolume(audio, input) {
        //audio.VOLUME(propiedade que funciona somente entre [0,1]) = input.value
        //sound.nature.volume = volumeNature.value /10
        audio.volume = input.value
    }

    return{
        pressButton,
        timeEnd,
        playAudio,
        pauseAudio,
        setVolume,
        nature,
        rain,
        urban,
        fire
    }
}

    