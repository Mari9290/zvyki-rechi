const start = document.querySelector('#start');
const play = document.querySelector('#play');
const textStart = document.querySelector('#text-start');
const character = document.querySelector('#character');
const hard = document.querySelector('#hard');
const right = document.querySelector('#right');
const next = document.querySelector('#next');
const element = document.querySelector('#element');
const textRepit = document.querySelector('#textRepit');
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
/*Кнопка старт и клик на персонажа*/

character.addEventListener('click', startRoad);
start.addEventListener('click', startRoad);

function startRoad () {
    character.disabled = true;
    gsap.to('.character', {x: 600, duration:5, repeat:1, yoyo:true, repeatDelay:3});
    start.disabled = true;
    start.style.opacity = 0;
    setTimeout(function() {
        start.disabled = false;
        character.disabled = false;
        start.style.opacity = 1;
    }, 15000);
}



/*Кнопка доп задание*/


//Модальное окно 
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 
openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active');
    })
});
closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});
document.addEventListener('click', (e) => {
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active');
    }
});
/*Кнопка доп поощерение и попробовать ещё*/

let popupBgyes = document.querySelector('.popup__bgyes');
let popupyes = document.querySelector('.popupyes');
let openPopupButtonsyes = document.querySelectorAll('.open-popupyes'); 
let closePopupButtonyes = document.querySelector('.close-popupyes'); 
openPopupButtonsyes.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBgyes.classList.add('active'); 
        popupyes.classList.add('active');
    })
});
closePopupButtonyes.addEventListener('click',() => {
    popupBgyes.classList.remove('active'); 
    popupyes.classList.remove('active'); 
});
document.addEventListener('click', (e) => {
    if(e.target === popupBgyes) { 
        popupBgyes.classList.remove('active'); 
        popupyes.classList.remove('active');
    }
});


next.addEventListener('click', goToNext);
function goToNext () {
    element.setAttribute ('src', '../image_play/sea.png');
    next.addEventListener('click', goToNextTwo);
}

function goToNextTwo () {
    element.setAttribute ('src', '../image_play/northPole.png');
    next.addEventListener('click', goToNextThree);
}

function goToNextThree () {
    element.setAttribute ('src', '../image_play/wigwam.png');
    next.addEventListener('click', goToNextFour);
}

function goToNextFour () {
    element.setAttribute ('src', '../image_play/temple.png');
    next.setAttribute ('src', '../image_play/repiat.png');
    textRepit.textContent = 'Начать заново';
    next.addEventListener('click', backCharacter);
}

function backCharacter () {
    location.reload();
}