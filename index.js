var randomNumber1 = Math.floor(Math.random()*6)
console.log(randomNumber1)
var randomNumber2 = Math.floor(Math.random()*6)
console.log(randomNumber2)


for(var i = 1; i<7;i++){

    if(randomNumber1 == i){
        diceImage1 = "dice" + i + ".png"
        document.getElementById('Image1').src=diceImage1
    }
}

for(var i = 1; i<7;i++){

    if(randomNumber2 == i){
        diceImage2 = "dice" + i + ".png"
        document.getElementById('Image2').src=diceImage2
    }
}


if(randomNumber1 == randomNumber2){

    document.getElementById('Main').innerHTML="Draw!";
}
else if(randomNumber1 > randomNumber2){

    document.getElementById('Main').innerHTML=" 🚩  Player 1 wins!";
}
 else if(randomNumber1 < randomNumber2){

    document.getElementById('Main').innerHTML="Player 2 wins! 🚩 ";
}