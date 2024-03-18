const characterFive = document.querySelector('#characterFive');
const characterSix = document.querySelector('#characterSix');
const characterSeven = document.querySelector('#characterSeven');
const characterEight = document.querySelector('#characterEight');
const audioChpok = document.querySelector('#audioChpok');
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

characterFive.addEventListener('click', () => {
    audioChpok.play();
    characterFive.setAttribute ('src', '../image_play/beads.png');
})

characterSix.addEventListener('click', () => {
    audioChpok.play();
    characterSix.setAttribute ('src', '../image_play/foxDonuts.png');
})

characterSeven.addEventListener('click', () => {
    audioChpok.play();
    characterSeven.setAttribute ('src', '../image_play/cat.png');
})

characterEight.addEventListener('click', () => {
    audioChpok.play();
    characterEight.setAttribute ('src', '../image_play/notes.png');
})