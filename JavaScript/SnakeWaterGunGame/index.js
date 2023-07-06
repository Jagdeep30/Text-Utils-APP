function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let compScore = 0;
let userScore = 0;
let choice = ["SNAKE","WATER","GUN"];
let i = 0;
while(i<5){

    let choose = randomNumber(0,2);
    let user = prompt("Which you want to choose Snake, Water or Gun: ");
    user = user.toUpperCase();

    if(user!="WATER" && user!="SNAKE" && user!="GUN"){
        alert("Please enter a valid choice from (SNAKE, WATER OR GUN)");
        continue;
    }

    if(user==choice[choose]){
        alert("DRAW");
        alert(`Your choice: ${user} \n Computer's choice: ${choice[choose]}`);
        i++;
        continue;
    }
    else if(user=="SNAKE" && choice[choose]=="WATER" || user=="WATER" && choice[choose]=="GUN" || user=="GUN" && choice[choose]=="SNAKE" ){
        alert("You won this round!");
        userScore++;
    }
    else{
        alert("You lost this round!");
        compScore++;
    }
    alert(`Your choice: ${user} \n Computer's choice: ${choice[choose]}`);
    i++;

}

if(compScore>userScore){
    alert("Sorry, you lost the game＞﹏＜");
}
else if(compScore<userScore){
    alert("Congrats, you won the game (❁´◡`❁)");
}
else{
    alert("DRAW!!!");
}

alert(`Your score: ${userScore} \nComputer's score: ${compScore}`);