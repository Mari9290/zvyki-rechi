
const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const next = document.querySelector('#next');
const nextImage = document.querySelector('#nextImage');
const textRepit = document.querySelector('#textRepit');

const audioOne = document.querySelector('#audioOne');
const audioTwo = document.querySelector('#audioTwo');
const audioThree = document.querySelector('#audioThree');
const audioFour = document.querySelector('#audioFour');
const audioFive = document.querySelector('#audioFive');
const audioSix = document.querySelector('#audioSix');
const audioSeven = document.querySelector('#audioSeven');

const startOne = document.querySelector('#startOne');
const startTwo = document.querySelector('#startTwo');
const startThree = document.querySelector('#startThree');
const startFour = document.querySelector('#startFour');
const startFive = document.querySelector('#startFive');
const startSix = document.querySelector('#startSix');

// новый попап
let popupBgo = document.querySelector('.popup__bgo');
let popupo = document.querySelector('.popupo');
let openPopupButtonso = document.querySelectorAll('.open-popupo'); 
let closePopupButtono = document.querySelector('.close-popupo'); 
openPopupButtonso.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBgo.classList.add('active'); 
        popupo.classList.add('active');
    });
});

document.addEventListener('click', (e) => {
    if(e.target === popupBgo) { 
        popupBgo.classList.remove('active'); 
        popupo.classList.remove('active');
    }
});

setTimeout(function(){ 
    document.getElementById("modalopen").click();
}, 10000);
setTimeout(function(){ 
    document.getElementById("modalopen").click();
}, 20000);

setTimeout(function(){ 
    document.getElementById("modalopen").click();
}, 30000);
//первый плей ау

const start = document.querySelector('#start');
start.addEventListener('click', soundMerger);

function soundMerger () {
    audioOne.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    start.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);

      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);

      setTimeout(function() {
        start.style.opacity = '1';
        next.style.opacity = '1';
      }, 9000);
}

//второй плей ао

next.addEventListener('click', nextSound);

function nextSound () {
  start.style.display = 'none'
  startOne.style.display = 'block'
  characterTwo.setAttribute ('src', '../image_play/Osquirrel.png');
  next.addEventListener('click', nextSoundTwo);
}

startOne.addEventListener('click', soundMergerTwo);

function soundMergerTwo () {
    audioTwo.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startOne.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);
      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);
      setTimeout(function() {
        startOne.style.opacity = '1'
        next.style.opacity = '1';
      }, 9000);
}

//третий плей иа

function nextSoundTwo () {
  startOne.style.display = 'none'
  startTwo.style.display = 'block'
  characterOne.setAttribute ('src', '../image_play/Isquirrel.png');
  characterTwo.setAttribute ('src', '../image_play/Asquirrel.png');
  next.addEventListener('click', nextSoundThree);
}

startTwo.addEventListener('click', soundMergerThree);

function soundMergerThree () {
    audioThree.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startTwo.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);
      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);
      setTimeout(function() {
        startTwo.style.opacity = '1'
        next.style.opacity = '1';
      }, 9000);
}


//четвертый плей уо

function nextSoundThree () {
  startTwo.style.display = 'none'
  startThree.style.display = 'block'
  characterOne.setAttribute ('src', '../image_play/Usquirrel.png');
  characterTwo.setAttribute ('src', '../image_play/Osquirrel.png');
  next.addEventListener('click', nextSoundFour);
}

startThree.addEventListener('click', soundMergerFour);

function soundMergerFour () {
    audioFour.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startThree.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);
      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);
      setTimeout(function() {
        startThree.style.opacity = '1'
        next.style.opacity = '1';
      }, 9000);
}

//пятый плей оа

function nextSoundFour () {
  startThree.style.display = 'none'
  startFour.style.display = 'block'
  characterOne.setAttribute ('src', '../image_play/Osquirrel.png');
  characterTwo.setAttribute ('src', '../image_play/Asquirrel.png');
  next.addEventListener('click', nextSoundFive);
}

startFour.addEventListener('click', soundMergerFive);

function soundMergerFive () {
    audioFive.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startFour.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);
      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);
      setTimeout(function() {
        startFour.style.opacity = '1'
        next.style.opacity = '1';
      }, 9000);
}
//шестой плей аы

function nextSoundFive () {
  startFour.style.display = 'none'
  startFive.style.display = 'block'
  characterOne.setAttribute ('src', '../image_play/Asquirrel.png');
  characterTwo.setAttribute ('src', '../image_play/Ysquirrel.png');
  next.addEventListener('click', nextSoundSix);
}

startFive.addEventListener('click', soundMergerSix);

function soundMergerSix () {
    audioSix.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startFive.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);
      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);
      setTimeout(function() {
        startFive.style.opacity = '1'
        next.style.opacity = '1';
      }, 9000);
}

//седьмой плей оэ

function nextSoundSix () {
  startFive.style.display = 'none'
  startSix.style.display = 'block'
  nextImage.setAttribute ('src', '../image_play/repiat.png');
  characterOne.setAttribute ('src', '../image_play/Osquirrel.png');
  characterTwo.setAttribute ('src', '../image_play/AEsquirrel.png');
  next.addEventListener('click', nextSoundSeven);
  textRepit.textContent = 'Начать заново';
}

startSix.addEventListener('click', soundMergerSeven);

function soundMergerSeven () {
    audioSeven.play();
    gsap.to('#characterOne', {x: 200, duration:2, repeat:1, yoyo:true, repeatDelay:3});
    characterOne.classList.add('color');
    startSix.style.opacity = '0';
    next.style.opacity = '0';
    setTimeout(function() {
        characterTwo.classList.add('color');
        characterOne.classList.toggle('color');
        gsap.to('#characterTwo', {scale: 1.3, duration:2, repeat:1, yoyo:true, repeatDelay:3});
      }, 2000);
      setTimeout(function() {
        characterTwo.classList.toggle('color');
      }, 4000);
      setTimeout(function() {
        startSix.style.opacity = '1'
        next.style.opacity = '1';
      }, 9000);
}


function nextSoundSeven () {
  location.reload()
}