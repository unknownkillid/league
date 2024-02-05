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


const cardElements = document.querySelectorAll('.champ-card');

function addHoverEffects(triggerElement, videoTransition, blackTransition, comeOutBg) {
  let hoverTimeout;
  let displayTimeout;

  triggerElement.addEventListener('mouseover', () => {
    clearTimeout(hoverTimeout);
    clearTimeout(displayTimeout);

    videoTransition.play();
    blackTransition.classList.add('bgdone');

    hoverTimeout = setTimeout(() => {
      comeOutBg.style.display = 'block';
      displayTimeout = setTimeout(() => {
        comeOutBg.classList.add('aatroxDisplay');
      }, 300);
    }, 600);
  });

  triggerElement.addEventListener('mouseout', () => {
    clearTimeout(hoverTimeout);
    clearTimeout(displayTimeout);

    blackTransition.classList.remove('bgdone');
    videoTransition.currentTime = 0;
    videoTransition.load();
    comeOutBg.style.display = 'none';
    comeOutBg.classList.remove('aatroxDisplay');
  });
}

cardElements.forEach((card) => {
  const triggerElement = card.querySelector('.video-trigger-container');
  const videoTransition = card.querySelector('.champ-hover-bg');
  const blackTransition = card.querySelector('.black-transition');
  const comeOutBg = card.querySelector('.aatroxUp');

  addHoverEffects(triggerElement, videoTransition, blackTransition, comeOutBg);
});
