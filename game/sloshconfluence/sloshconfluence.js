const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');
const next = document.querySelector('#next');
const nextImage = document.querySelector('#nextImage');
const textRepit = document.querySelector('#textRepit');
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.close-popup'); 

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

//первый плей первая дорожка МА

const start = document.querySelector('#start');
start.addEventListener('click', soundMerger);

function soundMerger () {
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
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBg) { // Если цель клика - фот, то:
                popupBg.classList.remove('active'); // Убираем активный класс с фона
                popup.classList.remove('active'); // И с окна
            }
        });
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
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBg) { // Если цель клика - фот, то:
                popupBg.classList.remove('active'); // Убираем активный класс с фона
                popup.classList.remove('active'); // И с окна
            }
        });
      }, 3000);
      setTimeout(function() {
        startSecond.style.opacity = '1';
        next.style.opacity = '1';
      }, 6000);
}

//кнопка некст и смена картинок

next.addEventListener('click', nextSound);

function nextSound () {
  characterThree.setAttribute ('src', '../image_play/Ggoose.png');
  characterTwo.setAttribute ('src', '../image_play/go.png');
  characterFour.setAttribute ('src', '../image_play/lo.png');
  next.addEventListener('click', nextSoundTwo);
}

function nextSoundTwo () {
  characterThree.setAttribute ('src', '../image_play/Nelephant.png');
  characterTwo.setAttribute ('src', '../image_play/nu.png');
  characterFour.setAttribute ('src', '../image_play/lu.png');
  next.addEventListener('click', nextSoundThree);
}


function nextSoundThree () {
  characterThree.setAttribute ('src', '../image_play/Vplane.png');
  characterTwo.setAttribute ('src', '../image_play/byi.png');
  characterFour.setAttribute ('src', '../image_play/lyi.png');
  next.addEventListener('click', nextSoundFour);
}
//кнопка некст и смена картинок последняя

function nextSoundFour () {
  characterThree.setAttribute ('src', '../image_play/Mcow.png');
    characterTwo.setAttribute ('src', '../image_play/me.png');
    characterFour.setAttribute ('src', '../image_play/le.png');
    nextImage.setAttribute ('src', '../image_play/repiat.png');
    next.addEventListener('click', nextSoundLast);
    textRepit.textContent = 'Начать заново';
}

function nextSoundLast () {
    location.reload()
  }