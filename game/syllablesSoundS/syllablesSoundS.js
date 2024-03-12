const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const audioChpok = document.querySelector('#audioChpok');
const hard = document.querySelector('#hard');
const next = document.querySelector('#next');


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
    });
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


/* Исчезание по клику */

one.addEventListener('click', startOne);
function startOne () {
    audioChpok.play();
    one.style.opacity = '0';
}

two.addEventListener('click', startTwo);
function startTwo () {
    audioChpok.play();
    two.style.opacity = '0';
}

three.addEventListener('click', startThree);
function startThree () {
    audioChpok.play();
    three.style.opacity = '0';
}

four.addEventListener('click', startFour);
function startFour() {
    audioChpok.play();
    four.style.opacity = '0';
}

next.addEventListener('click', newElement);


const oneSyllable = document.querySelector('#oneSyllable');
const twoSyllable = document.querySelector('#twoSyllable');
const threeSyllable = document.querySelector('#threeSyllable');
const fourSyllable = document.querySelector('#fourSyllable');

/*Смена картинок*/

function newElement () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/2.png');
twoSyllable.setAttribute ('src', '../image_play/4.png');
threeSyllable.setAttribute ('src', '../image_play/1.png');
fourSyllable.setAttribute ('src', '../image_play/3.png');
next.addEventListener('click', nextElement);
}


function nextElement () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/3.png');
twoSyllable.setAttribute ('src', '../image_play/1.png');
threeSyllable.setAttribute ('src', '../image_play/4.png');
fourSyllable.setAttribute ('src', '../image_play/2.png');
next.addEventListener('click', next1Element);
}

function next1Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/4.png');
twoSyllable.setAttribute ('src', '../image_play/3.png');
threeSyllable.setAttribute ('src', '../image_play/2.png');
fourSyllable.setAttribute ('src', '../image_play/1.png');
next.addEventListener('click', next2Element);
}

function next2Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/3.png');
twoSyllable.setAttribute ('src', '../image_play/4.png');
threeSyllable.setAttribute ('src', '../image_play/1.png');
fourSyllable.setAttribute ('src', '../image_play/2.png');
next.addEventListener('click', next3Element);
}

function next3Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/4.png');
twoSyllable.setAttribute ('src', '../image_play/2.png');
threeSyllable.setAttribute ('src', '../image_play/3.png');
fourSyllable.setAttribute ('src', '../image_play/1.png');
next.addEventListener('click', next4Element);
}

function next4Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/2.png');
twoSyllable.setAttribute ('src', '../image_play/1.png');
threeSyllable.setAttribute ('src', '../image_play/4.png');
fourSyllable.setAttribute ('src', '../image_play/3.png');
next.addEventListener('click', next5Element);
}

function next5Element () {
    one.style.opacity = '1';
    two.style.opacity = '1';
    three.style.opacity = '1';
    four.style.opacity = '1';
oneSyllable.setAttribute ('src', '../image_play/1.png');
twoSyllable.setAttribute ('src', '../image_play/4.png');
threeSyllable.setAttribute ('src', '../image_play/3.png');
fourSyllable.setAttribute ('src', '../image_play/2.png');
next.addEventListener('click', next6Element);
}

function next6Element () {
    location.reload();
}






