$(document).ready(function() {

    var wins = 0;
    var lost = 0;
    var randomNum = Math.floor(Math.random() * 19) + 101;
    var currentNum = 0;

    //Jquery for html
    $('#randomNum').html('Random Number: ' + randomNum);
    $('#currentNum').text('Current Number: ');
    $('#winsNum').text('Wins: ');
    $('#lossNum').text('Losses ');
    
    
    //Randomizing Crystal Numbers
    var blueGem= Math.floor(Math.random() * 12) + 1;
    var purpleGem= Math.floor(Math.random() * 12) + 1;
    var whiteGem= Math.floor(Math.random() * 12) + 1;
    var redGem= Math.floor(Math.random() * 12) + 1;
    
    //Game Functions
    //most everything works better when I comment the reset function out - obviously doing something wrong
    //function reset () {
    //function win(){
        //  wins++; 
       //   $('#winsNum').text(wins);
       //   reset();
       // }
       // function lost(){
       //   lost++;
       //   $('#lossNum').text(losses);
        //  reset()
       // }
   
    //Crystal Functions
    $('#blueGem').click(() => {
        currentNum = currentNum + blueGem
        $('#currentNum').text(currentNum);
        if (currentNum === randomNum) {
            win();
            reset();
        } else if (currentNum > randomNum) {
            lose();
            reset();
        }
    });

    $('#purpleGem').click(() => {
        currentNum = currentNum + purpleGem;
        $('#currentNum').text(currentNum);
        if (currentNum === randomNum) {
            win();
            reset();
            resetCrystals();
        } else if (currentNum > randomNum) {
            lose();
            reset();
        }
    });

    $('#whiteGem').click(() => {
        currentNum = currentNum + whiteGem;
        $('#currentNumber').text(currentNum);
        if (currentNum === randomNum) {
            win();
            reset();
            resetCrystals();
        } else if (currentNum > randomNum) {
            lose();
            reset();
            resetCrystals();
        }
    });

    $('#redGem').click(() => {
        currentNum = currentNum + redGem;
        $('#currentNum').text(currentNum);
        if (currentNum === randomNum) {
            win();
            reset();
            resetCrystals();
        } else if (currentNum > randomNum) {
            lose();
            reset();
        }
    
    });
});