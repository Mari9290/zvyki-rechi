const ballBall = document.querySelector('#ballBall');
const ballClock = document.querySelector('#ballClock');
const ballNeedle = document.querySelector('#ballNeedle');
const ballSail = document.querySelector('#ballSail');
const ballSmile = document.querySelector('#ballSmile');
const ballSpatula = document.querySelector('#ballSpatula');
const ballSwing = document.querySelector('#ballSwing');
const ballWindow = document.querySelector('#ballWindow');

const text = document.querySelector('#text');
const spatula = document.querySelector('#spatula');
const swing = document.querySelector('#swing');
const needle = document.querySelector('#needle');
const ball = document.querySelector('#ball');
const watch = document.querySelector('#watch');
const smile = document.querySelector('#smile');
const sail = document.querySelector('#sail');

const btn = document.querySelector('#btn');
const header = document.querySelector('#header');
const main = document.querySelector('#main');

btn.addEventListener('click', () => {
    header.classList.add("hidden");
    main.classList.remove("hidden");
})

ballBall.addEventListener('click', () => {
    ballBall.classList.add("shine-ball");
    ball.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        ball.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballClock.addEventListener('click', () => {
    ballClock.classList.add("shine-clock");
    watch.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        watch.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballNeedle.addEventListener('click', () => {
    ballNeedle.classList.add("shine-needle");
    needle.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        needle.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballSail.addEventListener('click', () => {
    ballSail.classList.add("shine-sail");
    sail.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        sail.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballSmile.addEventListener('click', () => {
    ballSmile.classList.add("shine-smile");
    smile.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        smile.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballSpatula.addEventListener('click', () => {
    ballSpatula.classList.add("shine-spatula");
    spatula.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        spatula.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballSwing.addEventListener('click', () => {
    ballSwing.classList.add("shine-swing");
    swing.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        swing.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

ballWindow.addEventListener('click', () => {
    ballWindow.classList.add("shine-window");
    text.classList.add("text-see");
    ballBall.classList.add('disabled');
    ballClock.classList.add('disabled');
    ballNeedle.classList.add('disabled');
    ballSail.classList.add('disabled');
    ballSmile.classList.add('disabled');
    ballSpatula.classList.add('disabled');
    ballSwing.classList.add('disabled');
    ballWindow.classList.add('disabled');
    setTimeout(function(){ 
        text.classList.remove("text-see");
        ballBall.classList.remove("disabled");
        ballClock.classList.remove("disabled");
        ballNeedle.classList.remove("disabled");
        ballSail.classList.remove("disabled");
        ballSmile.classList.remove("disabled");
        ballSpatula.classList.remove("disabled");
        ballSwing.classList.remove("disabled");
        ballWindow.classList.remove("disabled");
    }, 13000);
});

