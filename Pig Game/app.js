/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, currentScore, activePlayer;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    // Ran dom Number
    var dice = Math.floor((Math.random() * 6) + 1);

    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';

    //update the score if the dice was NOT one
    if (dice !== 1){
        //add score
        currentScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
    }
    else{
        //next player
        nextPlayer();
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += currentScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if( scores[activePlayer]>=100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-')
    }
    else{
        nextPlayer();
    }

})

function nextPlayer(){
    currentScore = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        if (activePlayer === 0){
            activePlayer = 1;
            currentScore=0
        }
        else {
            activePlayer = 0;
        }
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', function(){
    init();
})
function init(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}