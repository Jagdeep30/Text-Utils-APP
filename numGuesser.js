let randnum = Number.parseInt(Math.random()*100);
let guess = Number.parseInt(window.prompt("Enter your guess:"));
let count = 1;

while(guess!=randnum){
    count++;
    if(guess<randnum){
    guess = Number.parseInt(prompt("Enter your guess:\n(Previous number was less than random number)"));
    }
    
    else if(guess>randnum){
    guess = Number.parseInt(prompt("Enter your guess:\n(Previous number was greater than random number)"));
    }
}
window.alert(`You guessed it right \n The number was ${randnum}`);
window.alert(`Your score is ${100-count}`);
