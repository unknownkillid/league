const startButton = document.getElementById('startBtn')
const startContainer = document.getElementById('startContainer')
const legendsNeverDie = new Audio();
legendsNeverDie.src = './assets/section1/legends.mp3'

startButton.addEventListener('click', () => {
    startContainer.classList.add('startNone')
    setTimeout(() => {
        startContainer.style.display = 'none'
        // legendsNeverDie.play();
    }, 900);
})

const muteButton = document.getElementById('musicMute');
let musicPlays = true;
muteButton.addEventListener('click', () => {
    if (musicPlays) {
        legendsNeverDie.pause();
        musicPlays = false;
        muteButton.innerHTML = '<i class="fa-solid fa-play"></i>' 
    } else {
        legendsNeverDie.play();
        musicPlays = true;
        muteButton.innerHTML = '<i class="fa-solid fa-pause"></i>' 
    }
})