const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');

const next = document.querySelector('#next');
const nextImage = document.querySelector('#nextImage');
const textRepit = document.querySelector('#textRepit');

const audioOne = document.querySelector('#audioOne');
const audioTwo = document.querySelector('#audioTwo');
const audioThree = document.querySelector('#audioThree');
const audioFour = document.querySelector('#audioFour');
const audioFive = document.querySelector('#audioFive');
const audioSix = document.querySelector('#audioSix');

const startOne = document.querySelector('#startOne');
const startTwo = document.querySelector('#startTwo');
const startThree = document.querySelector('#startThree');
// новый попап
// let popupBgo = document.querySelector('.popup__bgo');
// let popupo = document.querySelector('.popupo');
// let openPopupButtonso = document.querySelectorAll('.open-popupo'); 
// let closePopupButtono = document.querySelector('.close-popupo'); 
// openPopupButtonso.forEach((button) => { 
//     button.addEventListener('click', (e) => { 
//         e.preventDefault(); 
//         popupBgo.classList.add('active'); 
//         popupo.classList.add('active');
//     });
// });

// document.addEventListener('click', (e) => {
//     if(e.target === popupBgo) { 
//         popupBgo.classList.remove('active'); 
//         popupo.classList.remove('active');
//     }
// });

// setTimeout(function(){ 
//     document.getElementById("modalopen").click();
// }, 10000);

// setTimeout(function(){ 
//     document.getElementById("modalopen").click();
// }, 20000);

// setTimeout(function(){ 
//     document.getElementById("modalopen").click();
// }, 30000);

//первый плей первая дорожка МА

const start = document.querySelector('#start');
start.addEventListener('click', soundMerger);

function soundMerger () {
    audioOne.play();
    gsap.to('#characterOne', {x: 200, duration:1, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    start.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.2, duration:1, repeat:1, yoyo:true, repeatDelay:3});
      }, 1000);

      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 3000);

      setTimeout(function() {
        start.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}

//первый плей вторая дорожка МО

const startSecond = document.querySelector('#startSecond');
startSecond.addEventListener('click', soundMergerSecond);

function soundMergerSecond () {
    audioTwo.play();
    gsap.to('#characterThree', {x: 200, duration:1, repeat:1, yoyo:true, repeatDelay:3});
    characterThree.classList.add('colorSecond');
    startSecond.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterFour.classList.add('colorSecond');
        characterThree.classList.toggle('colorSecond');
        gsap.to('#characterFour', {scale: 1.2, duration:1, repeat:1, yoyo:true, repeatDelay:3});
      }, 1000);

      setTimeout(function() {
        characterFour.classList.toggle('colorSecond');
      }, 3000);

      setTimeout(function() {
        startSecond.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}

//кнопка некст и смена картинок

next.addEventListener('click', nextSound);

function nextSound () {
  start.style.display = 'none';
  startSecond.style.display = 'none';
  startOne.style.display = 'block';
  startOneSecond.style.display = 'block';
  characterTwo.setAttribute ('src', '../image_play/Usquirrel.png');
  characterFour.setAttribute ('src', '../image_play/Isquirrel.png');
  next.addEventListener('click', nextSoundTwo);
}

//третий плей

startOne.addEventListener('click', soundMergerNext);

function soundMergerNext () {
    audioThree.play();
    gsap.to('#characterOne', {x: 200, duration:1, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startOne.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.2, duration:1, repeat:1, yoyo:true, repeatDelay:3});
      }, 1000);

      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 3000);

      setTimeout(function() {
        startOne.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}

//четвертый плей

startOneSecond.addEventListener('click', soundMergerNextSecond);

function soundMergerNextSecond () {
    audioFour.play();
    gsap.to('#characterThree', {x: 200, duration:1, repeat:1, yoyo:true, repeatDelay:3});
    characterThree.classList.add('colorSecond');
    startSecond.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterFour.classList.add('colorSecond');
        characterThree.classList.toggle('colorSecond');
        gsap.to('#characterFour', {scale: 1.2, duration:1, repeat:1, yoyo:true, repeatDelay:3});
      }, 1000);

      setTimeout(function() {
        characterFour.classList.toggle('colorSecond');
      }, 3000);

      setTimeout(function() {
        startSecond.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}

//кнопка некст и смена картинок последняя

function nextSoundTwo () {
    startOne.style.display = 'none';
    startOneSecond.style.display = 'none';
    startTwo.style.display = 'block';
    startTwoSecond.style.display = 'block';
    characterTwo.setAttribute ('src', '../image_play/Ysquirrel.png');
    characterFour.setAttribute ('src', '../image_play/AEsquirrel.png');
    nextImage.setAttribute ('src', '../image_play/repiat.png');
    next.addEventListener('click', nextSoundLast);
    textRepit.textContent = 'Начать заново';
}

//пятый плей

startTwo.addEventListener('click', soundMergerNextLast);

function soundMergerNextLast () {
    audioFive.play();
    gsap.to('#characterOne', {x: 200, duration:1, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startTwo.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.2, duration:1, repeat:1, yoyo:true, repeatDelay:3});
      }, 1000);

      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 3000);

      setTimeout(function() {
        startTwo.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}

//шестой плей

startTwoSecond.addEventListener('click', soundMergerNextSecondLast);

function soundMergerNextSecondLast () {
    audioSix.play();
    gsap.to('#characterThree', {x: 200, duration:1, repeat:1, yoyo:true, repeatDelay:3});
    characterThree.classList.add('colorSecond');
    startTwoSecond.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterFour.classList.add('colorSecond');
        characterThree.classList.toggle('colorSecond');
        gsap.to('#characterFour', {scale: 1.2, duration:1, repeat:1, yoyo:true, repeatDelay:3});
      }, 1000);

      setTimeout(function() {
        characterFour.classList.toggle('colorSecond');
      }, 3000);

      setTimeout(function() {
        startTwoSecond.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}


function nextSoundLast () {
    location.reload()
  }