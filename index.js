const startButton = document.getElementById('startBtn')
const startContainer = document.getElementById('startContainer')
const legendsNeverDie = new Audio();
legendsNeverDie.src = './assets/section1/legends.mp3'

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
    video.currentTime = video.duration * (window.scrollY / lim);

  }
  requestAnimationFrame(animate);
}
animate();

const videoButtonBackGround = document.getElementById('videoBGButton')
videoButtonBackGround.addEventListener('timeupdate', function () {
  videoButtonBackGround.currentTime = 0.2
});

const videoBGButton = document.getElementById('interact')
videoBGButton.addEventListener('mouseover', () => {
  document.getElementById('videoButtonHover').style.opacity = 1

})
videoBGButton.addEventListener('mouseout', () => {
  document.getElementById('videoButtonHover').style.opacity = 0
})

const cardInteraction = document.getElementById('cardInteraction')
let cardClicked = false;
const cardOutro = document.getElementById('cardOutro')
const cardIntro = document.getElementById('cardIntro')
const transCardBg = document.getElementById('transCardBg')

cardInteraction.addEventListener('click', () => {

  if (!cardClicked) {
    cardIntro.play();
    setTimeout(() => {
      cardIntro.style.display = 'none'
      cardIntro.play();
      cardOutro.style.display = 'block'
      cardOutro.play()
      transCardBg.classList.add('cardBlock')
    }, 2300);
  }
  cardClicked = true;
})


const triggerContainer = document.getElementById('triggerContainer')
const champVideoTransition = document.getElementById('champCardVideo')
const blackTransition = document.getElementById('blackTransition')
const comeOutBg = document.getElementById('comeOutBg')

triggerContainer.addEventListener('mouseover', () => {
  champVideoTransition.play();
  blackTransition.classList.add('bgdone')
  setTimeout(() => {
    comeOutBg.style.display = 'block'
    setTimeout(() => {
      comeOutBg.classList.add('aatroxDisplay')
    }, 300);
  }, 600);
})

triggerContainer.addEventListener('mouseout', () => {
  blackTransition.classList.remove('bgdone')
  champVideoTransition.currentTime = 0
  champVideoTransition.load()
  comeOutBg.style.display = 'none'
  comeOutBg.classList.remove('aatroxDisplay')
})

