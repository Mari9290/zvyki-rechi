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
//1. Проигрывание картинок

const buttonCrow = document.querySelector('#crow');
const audioCrow = document.querySelector('#audioCrow');
const audioRooster = document.querySelector('#audioRooster');
const audioGull = document.querySelector('#audioGull');
const audioGoose = document.querySelector('#audioGoose');
const repit = document.querySelector('#repit');

buttonCrow.addEventListener("click", function() {
    audioCrow.play();
    audioRooster.pause();
    audioGull.pause();
    audioGoose.pause();
});

const buttonRooster = document.querySelector('#rooster');
buttonRooster.addEventListener("click", function() {
    audioRooster.play();
    audioCrow.pause();
    audioGull.pause();
    audioGoose.pause();
});

const buttonGull = document.querySelector('#gull');
buttonGull.addEventListener("click", function() {
    audioGull.play();
    audioCrow.pause();
    audioRooster.pause();
    audioGoose.pause();
});

const buttonGoose = document.querySelector('#goose');
buttonGoose.addEventListener("click", function() {
    audioGoose.play();
    audioCrow.pause();
    audioRooster.pause();
    audioGull.pause();
});

//2. Кнопка с рандомным звуком

const input = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const sound = document.querySelector('#sound');

sound.addEventListener('click', soundBird);

function soundBird (){
  audioGoose.pause();
    audioCrow.pause();
    audioRooster.pause();
    audioGull.pause();
    sound.disabled = true;
    //sound.style.backgroundColor = 'pink';
    sound.style.display = 'none';
    const musics = [{id:1, name:audioCrow}, {id:2, name:audioRooster}, {id:3, name:audioGull}, {id:4, name:audioGoose}];
    const answer = Math.floor(Math.random()*4)+1;
    let music = musics.find(item => item.id == answer);
    music.name.play();

    repit.style.display = 'block';
    repit.addEventListener('click', () => {
        music.name.play();
    });

btn.addEventListener('click', play);
input.addEventListener('keypress', function(e){
    if (e.keyCode === 13)
        play();
});

//ввод ответа и обратная связь

    function play() {
    const userNumber = document.querySelector('#guess').value;
    input.value = "";
    if (userNumber < 1 || userNumber > 4){
        // alert('');
        //preventDefault(); // Предотвращаем дефолтное поведение браузера
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
    }
    else if (isNaN(userNumber)){
        // alert('Нужно ввести число!')
        popupBgch.classList.add('active'); // Добавляем класс 'active' для фона
        popupch.classList.add('active'); // И для самого окна
        closePopupButtonch.addEventListener('click',() => { // Вешаем обработчик на крестик
            popupBgch.classList.remove('active'); // Убираем активный класс с фона
            popupch.classList.remove('active'); // И с окна
        });
        document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
            if(e.target === popupBgch) { // Если цель клика - фот, то:
                popupBgch.classList.remove('active'); // Убираем активный класс с фона
                popupch.classList.remove('active'); // И с окна
            }
        });
    }

    else {
        if(userNumber < answer || userNumber > answer){
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
        }
    }
    
}

}

//3. Перезагрузка

const reloadPlay = document.querySelector('#reload');
reloadPlay.addEventListener('click', () => {
    location.reload()
})
