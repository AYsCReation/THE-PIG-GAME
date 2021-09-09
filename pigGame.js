'use strict';
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const score2EL = document.getElementById('score--2');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const current2EL = document.getElementById('current--2');
const btnrollEL = document.querySelector('.btn--roll');
const btnnewEL = document.querySelector('.btn--new');
const btnholdEL = document.querySelector('.btn--hold');
const diceEL = document.querySelector('.dice');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const player2EL = document.querySelector('.player--2');

score0EL.textContent = 0;
score1EL.textContent = 0;
score2EL.textContent = 0;

diceEL.classList.add('hidden');
let currentScore = 0;
let playing = true;
let activeplayer = 0;
const shift = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;

 switch(activeplayer){
   case 0 : activeplayer = 1;
   break;
   case 1 : activeplayer = 2;
   break;
   case 2 : activeplayer = 0;
   break;
 }
  currentScore = 0;
  if (activeplayer === 0){
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    player2EL.classList.remove('player--active');
  }
  else if (activeplayer === 1){
  player1EL.classList.add('player--active');
  player0EL.classList.remove('player--active');
  player2EL.classList.remove('player--active');
 }else if(activeplayer ===2){
  player2EL.classList.add('player--active');
  player0EL.classList.remove('player--active');
  player1EL.classList.remove('player--active');
 }
};
btnrollEL.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    if (dice !== 1) {
      // OPTIONAL -> document.querySelector(`.player--${activeplayer}`).style.backgroundColor = "#DDAEB9";
      currentScore = currentScore + dice;
      document.getElementById(`current--${activeplayer}`).textContent = currentScore;
      console.log(activeplayer);
    }
    else {
      // document.querySelector('body').textContent = "you have lost the game!!!"
      //  document.querySelector('body').style.fontSize="100px";
      // OPTIONAL ->  document.querySelector(`.player--${activeplayer}`).style.backgroundColor = "black";

      //for two player shift-->
      // document.getElementById(`current--${activeplayer}`).textContent = 0;
      // activeplayer = activeplayer === 0 ? 1 : 0;
      // currentScore = 0;
      // player0EL.classList.toggle('player--active');
      // player1EL.classList.toggle('player--active');
      shift();
      

    }
  }
});

let score = [0, 0, 0];
btnholdEL.addEventListener('click', function () {
  if (playing) {
    //OPTIONAL:-
    //  if(activeplayer=== 0){
    //   scoree0 = scoree0 + currentScore;
    //   document.getElementById('score--0').textContent = scoree0 ;
    // }
    // else{
    //   scoree1 = scoree1 + currentScore;
    //   document.getElementById('score--1').textContent = scoree1 ;
    // }
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];



    // if(scoree0 >= 20){
    //   playing = false;
    //   document.querySelector('#name--0').textContent = 'Player 1 has win the game🥳🥳';
    //   document.querySelector('#name--0').style.backgroundColor = "white";
    //   document.querySelector('#name--0').style.Color = "white";
    //   document.querySelector(`.player--1`).style.backgroundColor = "#C6788B";


    //   diceEL.classList.add('hidden');

    // }
    // else{
    //   playing = false;
    //   document.querySelector('#name--1').textContent = 'Player 2 has win the game🥳🥳';
    //   document.querySelector('#name--1').style.backgroundColor = "white";
    //   document.querySelector('#name--1').style.Color = "white";
    //   document.querySelector(`.player--0`).style.backgroundColor = "#C6788B";


    //   diceEL.classList.add('hidden');
    // }
    if (score[activeplayer] >= 50) {
      playing = false;
      document.querySelector(`#name--${activeplayer}`).textContent = `Player ${activeplayer + 1} has won the game🥳🥳`;
      //  document.querySelector(`#name--${activeplayer}`).style.backgroundColor = "white";
      // document.querySelector(`#name--${activeplayer}`).style.Color = "black";
      // document.querySelector(`.player`).style.backgroundColor = "#C6788B";
      diceEL.classList.add('hidden');
      player0EL.classList.remove('player--active');
      player1EL.classList.remove('player--active');
      player2EL.classList.remove('player--active');
    }
    else {
      
      // OPTIONAL ->  document.querySelector(`.player--${activeplayer}`).style.backgroundColor = "black";
      //for two player shift-->
      // document.getElementById(`current--${activeplayer}`).textContent = 0;
      // activeplayer = activeplayer === 0 ? 1 : 0;
      // currentScore = 0;
      // player0EL.classList.toggle('player--active');
      // player1EL.classList.toggle('player--active');
      shift();
console.log(activeplayer);
    }
  }

});
btnnewEL.addEventListener('click', function () {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  score2EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  current2EL.textContent = 0;
  playing = true;
  player0EL.classList.add('player--active');
  currentScore = 0;
  activeplayer = 0;
  score = [0, 0, 0];
  document.querySelector(`#name--0`).textContent = 'Player 1';
  document.querySelector(`#name--1`).textContent = 'Player 2';
  document.querySelector(`#name--2`).textContent = 'Player 3';
  // document.querySelector(`#name--0`).style.backgroundColor = "none";
  // document.querySelector(`#name--1`).style.backgroundColor = "none";


})
