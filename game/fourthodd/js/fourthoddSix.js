const result = document.querySelector('#result');
const wrong1 = document.querySelector('#wrong1');
const wrong2 = document.querySelector('#wrong2');
const wrong4 = document.querySelector('#wrong4');
const right = document.querySelector('#right');
const show = document.querySelector('#show');

result.addEventListener('click', (e) => {
    e.preventDefault();
    right.classList.add("right-answer");
    wrong1.classList.add("wrong-answer");
    wrong2.classList.add("wrong-answer");
    wrong4.classList.add("wrong-answer");
    result.classList.add('hidden');
    show.textContent = 'Щипцы лишние, потому что они не музыкальные инструменты.'
});