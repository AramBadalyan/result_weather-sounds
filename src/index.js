import './index.scss'

let activeButton = null
let currentVolume = null
let audio = null

window.onload = function () {
  const weatherButtons = document.querySelectorAll('.button__weather')
  const volumeControl = document.getElementById('volume-control')

  weatherButtons.forEach((weatherButton) => {
    weatherButton.addEventListener('click', setWeather)
  })

  currentVolume = volumeControl.value
  volumeControl.onchange = (event) => {
    if (!audio) {
      return
    }

    currentVolume = event.target.value
    audio.volume = currentVolume / 100
  }
}

function setWeather (event) {
  if (activeButton === event.target) {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
    activeButton.classList.toggle('paused')
    return
  }

  activeButton?.classList.remove('paused')
  activeButton = event.target

  const weather = event.target.dataset.weather
  setAudio(weather)
  setBodyBackgroundImage(weather)
}

function setBodyBackgroundImage (weather) {
  document.body.style.backgroundImage = `url(./assets/images/${weather}-bg.jpg)`
}

function setAudio (weather) {
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
