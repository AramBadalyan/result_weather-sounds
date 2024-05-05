import './index.scss'

let activeButton: HTMLButtonElement | null = null
let currentVolume: number = 0
let audio: HTMLAudioElement | null = null

window.onload = function () {
  const weatherButtons = document.querySelectorAll<HTMLButtonElement>('.button__weather')
  const volumeControl = document.getElementById('volume-control') as HTMLInputElement

  weatherButtons.forEach((weatherButton) => {
    weatherButton.addEventListener('click', setWeather)
  })

  currentVolume = Number(volumeControl.value)
  volumeControl.addEventListener('change', (event) => {
    if (!audio) {
      return
    }

    currentVolume = Number((event.target as HTMLInputElement).value)
    audio.volume = currentVolume / 100
  })
}

function setWeather (event: MouseEvent) {
  if (activeButton === event.target) {
    if (audio) {
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
    }
    
    activeButton!.classList.toggle('paused')
    return
  }

  activeButton?.classList.remove('paused')
  activeButton = event.target as HTMLButtonElement

  const weather: string = (event.target as HTMLButtonElement).dataset.weather!
  setAudio(weather)
  setBodyBackgroundImage(weather)
}

function setBodyBackgroundImage (weather: string) {
  document.body.style.backgroundImage = `url(./assets/images/${weather}-bg.jpg)`
}

function setAudio (weather: string) {
  if (audio) {
    audio.pause()
    audio = null
  }
  // eslint-disable-next-line no-undef
  audio = new Audio(`./assets/sounds/${weather}.mp3`)
  audio.volume = currentVolume / 100
  audio.loop = true
  audio.play()
}
