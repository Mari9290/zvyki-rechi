const next = document.querySelector('#next');
const containerCharacter = document.querySelector('#containerCharacter');
const containerInstruction = document.querySelector('#containerInstruction');
const header = document.querySelector('#header');
const final = document.querySelector('#final');
const reloadGame = document.querySelector('#reloadGame');
const audioChpok = document.querySelector('#audioChpok');
const audioSalut = document.querySelector('#audioSalut');
const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');
const characterFive = document.querySelector('#characterFive');
const characterSix = document.querySelector('#characterSix');
const characterSeven = document.querySelector('#characterSeven');
const characterEight = document.querySelector('#characterEight');
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

next.addEventListener('click', manulAlbum);

function manulAlbum () {
    audioSalut.play();
    containerCharacter.style.display = 'none';
    containerInstruction.style.display = 'none';
    header.style.display = 'none';
    final.style.display = 'block';
    reloadGame.style.display = 'block';
    next.style.display = 'none';
}

characterOne.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterOne", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterOne.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );

characterTwo.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterTwo", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterTwo.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );

characterThree.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterThree", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterThree.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );

characterFour.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterFour", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterFour.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );

characterFive.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterFive", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterFive.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );
characterSix.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterSix", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterSix.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );
characterSeven.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterSeven", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterSeven.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );
characterEight.addEventListener('click', () =>{
    audioChpok.play();
    gsap.to("#characterEight", {rotation:360, duration: .6, scale: 1.5})
    setTimeout(function() {
        characterEight.setAttribute('src', '../src/image_play/album.png')
    }, 600);
} );


