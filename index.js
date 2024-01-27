const startButton = document.getElementById('startBtn')
const startContainer = document.getElementById('startContainer')
const legendsNeverDie = new Audio();
legendsNeverDie.src = './assets/section1/legends.mp3'

startButton.addEventListener('click', () => {
    startContainer.classList.add('startNone')
    setTimeout(() => {
        startContainer.style.display = 'none'
        legendsNeverDie.play();
        legendsNeverDie.loop = true;
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

const video = document.getElementById("scrollingVideo");
let seeking = false;

video.addEventListener("seeking", function () {
  seeking = true;
});

video.addEventListener("seeked", function () {
  seeking = false;
});

function animate() {
  const lim =
    Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight;
  if (!seeking && video.duration) {
    console.log(window.scrollY, lim, video.duration);
    video.currentTime = video.duration * (window.scrollY / lim);
  }
  requestAnimationFrame(animate);
}
animate();