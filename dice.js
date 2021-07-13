player1 = prompt("Enter Player 1 name: ");
player2 = prompt("Enter Player 2 name: ");

for (var i = 0; i < document.querySelectorAll(".play1").length; i++) {
    document.querySelectorAll(".play1")[i].innerHTML = player1;
    document.querySelectorAll(".play2")[i].innerHTML = player2;
}

p1Win = 0;
p2Win = 0;

document.querySelector('.replay').addEventListener('click', onClickEvent);

function onClickEvent() {
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);
    dice_1 = "images/dice" + dice1 + ".png"
    dice_2 = "images/dice" + dice2 + ".png"
    console.log(dice1, dice2);
    document.querySelector('.img1').src = dice_1;
    document.querySelector('.img2').src = dice_2;

    if (dice1 > dice2) {
        document.querySelector(".status").innerHTML = "🏆 " + player1 + " 1 Won";
        p1Win++;
    } else if (dice1 < dice2) {
        document.querySelector(".status").innerHTML = player2 + " Won 🏆";
        p2Win++;
    } else {
        document.querySelector(".status").innerHTML = "draw";
    }
    
    document.querySelector('.p1Total').innerHTML = p1Win;
    document.querySelector('.p2Total').innerHTML = p2Win;
    console.log(p1Win, p2Win);
}