var dice1 = Math.floor((Math.random()*6) +1);
var dice2 = Math.floor((Math.random()*6) +1);
dice_1 = "images/dice"+dice1+".png"
dice_2 = "images/dice"+dice2+".png"
console.log(dice1, dice2);
document.querySelector('.img1').src = dice_1;
document.querySelector('.img2').src = dice_2;

if(dice1>dice2){
    document.querySelector(".status").innerHTML = "🏆 Player 1 Won";
}

else if(dice1<dice2){
    document.querySelector(".status").innerHTML = "Player 2 Won 🏆";
}

else {
    document.querySelector(".status").innerHTML = "draw";
}