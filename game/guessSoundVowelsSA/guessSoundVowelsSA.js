let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let popupBgch = document.querySelector('.popup__bgch'); 
let popupch = document.querySelector('.popupch'); 
let popupBgyes = document.querySelector('.popup__bgyes'); 
let popupyes = document.querySelector('.popupyes'); 
let popupBgno = document.querySelector('.popup__bgno'); 
let popupno = document.querySelector('.popupno'); 
let closePopupButton = document.querySelector('.close-popup'); 
let closePopupButtonch = document.querySelector('.close-popupch'); 
let closePopupButtonyes = document.querySelector('.close-popupyes'); 
let closePopupButtonno = document.querySelector('.close-popupno');
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

const audioOne = document.querySelector('#audioOne');
const audioTwo = document.querySelector('#audioTwo');
const audioThree = document.querySelector('#audioThree');

const buttonElementOne = document.querySelector('#elementOne');
const buttonElementTwo = document.querySelector('#elementTwo');
const buttonElementThree = document.querySelector('#elementThree');

const input = document.querySelector('#guess');
const btn = document.querySelector('#btn');
const sound = document.querySelector('#sound');
const repit = document.querySelector('#repit');

//Музыка на картинках


buttonElementOne.addEventListener("click", function() {
    audioOne.play();
    audioTwo.pause();
    audioThree.pause();
})


buttonElementTwo.addEventListener("click", function() {
    audioTwo.play();
    audioOne.pause();
    audioThree.pause();
})


buttonElementThree.addEventListener("click", function() {
    audioThree.play();
    audioOne.pause();
    audioTwo.pause();
})




//2. Кнопка с рандомным звуком



sound.addEventListener('click', soundBird);

function soundBird (){
//останавливается музыка
  audioOne.pause();
  audioTwo.pause();
  audioThree.pause();

//блокируется кнопки
    sound.disabled = true;
    sound.style.display = 'none';
    repit.style.display = 'block';

//рандом
    const musics = [{id:1, name:audioOne}, {id:2, name:audioTwo}, {id:3, name:audioThree}];
    const answer = Math.floor(Math.random()*3)+1;
    let music = musics.find(item => item.id == answer);

//играет музыка и запуск по кнопке повтор
    music.name.play();
    repit.addEventListener('click', () => {
        music.name.play();
    });

//кнопка ок и интер

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

        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
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
    }
    else if (isNaN(userNumber)){
        popupBgch.classList.add('active'); 
        popupch.classList.add('active'); 
        closePopupButtonch.addEventListener('click',() => { 
            popupBgch.classList.remove('active'); 
            popupch.classList.remove('active');
        });
        document.addEventListener('click', (e) => { 
            if(e.target === popupBgch) { 
                popupBgch.classList.remove('active'); 
                popupch.classList.remove('active'); 
            }
        });
    }

    else {
        if(userNumber < answer || userNumber > answer){
            popupBgno.classList.add('active');
            popupno.classList.add('active'); 
            closePopupButtonno.addEventListener('click',() => { 
                popupBgno.classList.remove('active'); 
                popupno.classList.remove('active');
            });
            document.addEventListener('click', (e) => {
                if(e.target === popupBgno) {
                    popupBgno.classList.remove('active');
                    popupno.classList.remove('active');
                }
        });
        }
        else {
            popupBgyes.classList.add('active'); 
            popupyes.classList.add('active');
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
        }
    }
    
}

}


//3. Перезагрузка

const reloadPlay = document.querySelector('#reload');
reloadPlay.addEventListener('click', () => {
    location.reload()
})
