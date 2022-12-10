var mario = document.querySelector('.mario');
var pipe = document.querySelector('.pipe');
var jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


var loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginleft = '50px'

        clearInterval(loop);
    }

}, 10);
    

window.document.addEventListener('keydown', jump)