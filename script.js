'use strict';
let score = [0 ,0];
let playing = true;
let current_score = 0;
let activeplayer = 0;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerFirst_score = document.querySelector('#score--0');
const playerSecond_score = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const roll_dice = document.querySelector('.btn--roll');
const new_game = document.querySelector('.btn--new');
const hold_value = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const init = function(){
    score = [0 ,0];
    playing = true;
    current_score = 0;
    activeplayer = 0;
    
    playerFirst_score.textContent = 0;
    playerSecond_score.textContent = 0;
    current1El.textContent = 0;
    current0El.textContent = 0;

    dice.classList.add('jidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.toogle('player--winner');
    player1El.classList.remove('player--winner');
}
dice.classList.add('hidden');
playerFirst_score.textContent = 0;
playerSecond_score.textContent = 0;
const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    current_score = 0 ;
    activeplayer = (activeplayer === 0 ? 1:0);
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
console.log(playing);

roll_dice.addEventListener('click', function(){
    if(playing){
    const dice_number = Math.trunc(Math.random()*6)+1;
    // console.log(dice_number);
    dice.classList.remove('hidden');
    dice.src = `dice-${dice_number}.png`;
    if(dice_number != 1){
        current_score += dice_number;
        document.getElementById(`current--${activeplayer}`).textContent = current_score;
    }else{
        switchPlayer();
    };
};
});


hold_value.addEventListener('click' , function(){
    if(playing){
    score[activeplayer] += current_score; 
    document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];

    if(score[activeplayer] >= 100){
        playing = false;
        console.log(playing);
        console.log(activeplayer);
        console.log(score[activeplayer]);
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        dice.classList.toggle('hidden');
    }

    switchPlayer();
}
});

new_game.addEventListener('click' , function(){
   init();
});
