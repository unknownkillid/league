
const bgMusic = new Audio();
bgMusic.src = '../assets/section1/legends.mp3'

const muteButton = document.getElementById('musicMute');
let musicPlays = true;
muteButton.addEventListener('click', () => {
  if (musicPlays) {
    bgMusic.pause();
    musicPlays = false;
    muteButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  } else {
    bgMusic.play();
    musicPlays = true;
    muteButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  }
})