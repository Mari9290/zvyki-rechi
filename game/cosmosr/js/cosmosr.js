const mercure = document.querySelector('#mercure');
const redMerc = document.querySelector('#redMerc');
const rocket = document.querySelector('#rocket');
const poem = document.querySelector('#poem');
const audioBtn = document.querySelector('#audioBtn');
const audioRocket = document.querySelector('#audioRocket');

redMerc.addEventListener('click', (e) => {
    rocket.classList.add("move");
    audioBtn.play();
    setTimeout(function(){ 
        audioRocket.play();
    }, 500);
    setTimeout(function(){ 
        flag.classList.add("show");
        poem.classList.add("show");
    }, 4000);
});


