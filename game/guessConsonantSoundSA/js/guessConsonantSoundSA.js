//инпуты
const oneOption = document.querySelector('#oneOption');
const twoOption = document.querySelector('#twoOption');
const threeOption = document.querySelector('#threeOption');


//картинки
const oneImg = document.querySelector('#oneImg');
const twoImg = document.querySelector('#twoImg');
const threeImg = document.querySelector('#threeImg');


//аудио
const oneAudio = document.querySelector('#oneAudio');
const twoAudio = document.querySelector('#twoAudio');
const threeAudio = document.querySelector('#threeAudio');


//кнопки
const submit = document.querySelector('#submit');
const back = document.querySelector('#back');
const repit = document.querySelector('#repit');
const btnOn = document.querySelector('#btnOn');
const btnplay = document.querySelector('#btnplay');
const btnnext = document.querySelector('#btnnext');
const btn_next = document.querySelector('#btn_next');


//Модальное окно
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let popupBgch = document.querySelector('.popup__bgch'); // Фон попап окна число
let popupch = document.querySelector('.popupch'); // Само окно число
let popupBgyes = document.querySelector('.popup__bgyes'); // Фон попап окна 
let popupyes = document.querySelector('.popupyes'); // Само окно
let popupBgno = document.querySelector('.popup__bgno'); // Фон попап окна
let popupno = document.querySelector('.popupno'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let closePopupButtonch = document.querySelector('.close-popupch'); // Кнопка для скрытия окна
let closePopupButtonyes = document.querySelector('.close-popupyes'); // Кнопка для скрытия окна
let closePopupButtonno = document.querySelector('.close-popupno'); // Кнопка для скрытия окна


btnOn.addEventListener("click", function() {
    oneAudio.play();
    twoAudio.pause();
    threeAudio.pause();
    twoImg.classList.remove('form__check');
    oneImg.classList.add('form__check');
    threeImg.classList.remove('form__check');
    btnOn.disabled = true;
    btnplay.disabled = true;

    setTimeout(function(){
        twoAudio.play();
        oneAudio.pause();
        oneImg.classList.remove('form__check');
        twoImg.classList.add('form__check');
    }, 3000)

    setTimeout(function(){
        threeAudio.play();
        twoAudio.pause();
        twoImg.classList.remove('form__check');
        threeImg.classList.add('form__check');
    }, 6000)

    setTimeout(function(){
        threeAudio.pause();
        threeImg.classList.remove('form__check');
        btnOn.disabled = false;
        btnplay.disabled = false;
    }, 9000)
});

btnplay.addEventListener('click', startGame);

function startGame (){
    btn_next.style.display = 'none';
    btnplay.style.display = 'none';
    btnOn.style.display = 'none';
    submit.style.display = 'block';
    repit.style.display = 'block';
    btnnext.style.display = 'block';
    // back.style.display = 'block';
    const musics = [{id:1, name:oneAudio}, {id:2, name:twoAudio}, {id:3, name:threeAudio}];
    const answer = Math.floor(Math.random()*3)+1;
    let music = musics.find(item => item.id == answer);
    music.name.play();


    repit.style.display = 'block';
    repit.addEventListener('click', () => {
        music.name.play();
    });
    console.log(answer);

submit.addEventListener('click', play);

function play(e) {
    e.preventDefault();
    let points = 0;
    if (document.querySelector('#oneOption').checked) {
        points = 1;
    }
    if (document.querySelector('#twoOption').checked) {
        points = 2;
    }
    if (document.querySelector('#threeOption').checked) {
        points = 3;
    }

    if(points < answer || points > answer){
        popupBgno.classList.add('active'); // Добавляем класс 'active' для фона
        popupno.classList.add('active'); // И для самого окна
        closePopupButtonno.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBgno.classList.remove('active'); // Убираем активный класс с фона
            popupno.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBgno) { // Если цель клика - фот, то:
                popupBgno.classList.remove('active'); // Убираем активный класс с фона
                popupno.classList.remove('active'); // И с окна
            }
    });
    }
    else {
        popupBgyes.classList.add('active'); // Добавляем класс 'active' для фона
        popupyes.classList.add('active'); // И для самого окна
        closePopupButtonyes.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBgyes.classList.remove('active'); // Убираем активный класс с фона
            popupyes.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBgyes) { // Если цель клика - фот, то:
                popupBgyes.classList.remove('active'); // Убираем активный класс с фона
                popupyes.classList.remove('active'); // И с окна
            }
    });

    setTimeout(function(){
        location.reload()
    }, 3000)
    }

}
}

// back.addEventListener('click', () => {
//     location.reload()
// });



