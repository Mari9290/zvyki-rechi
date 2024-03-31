const mercure = document.querySelector('#mercure');
const redMerc = document.querySelector('#redMerc');
const rocket = document.querySelector('#rocket');
const poem = document.querySelector('#poem');

redMerc.addEventListener('click', (e) => {
    rocket.classList.add("move");
    
    setTimeout(function(){ 
        flag.classList.add("show");
        poem.classList.add("show");
    }, 4000);
});

