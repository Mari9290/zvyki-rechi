const characterOne = document.querySelector('#characterOne');
const characterTwo = document.querySelector('#characterTwo');
const characterThree = document.querySelector('#characterThree');
const characterFour = document.querySelector('#characterFour');
const audioChpok = document.querySelector('#audioChpok');
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

characterOne.addEventListener('click', () => {
    audioChpok.play();
    characterOne.setAttribute ('src', '../src/image_play/fly.png');
})

characterTwo.addEventListener('click', () => {
    audioChpok.play();
    characterTwo.setAttribute ('src', '../src/image_play/owl.png');
})

characterThree.addEventListener('click', () => {
    audioChpok.play();
    characterThree.setAttribute ('src', '../src/image_play/perfume.png');
})

characterFour.addEventListener('click', () => {
    audioChpok.play();
    characterFour.setAttribute ('src', '../src/image_play/sled.png');
})

