
                //CONSTANTES

const sq1 = document.getElementById("square1");
const sq2 = document.getElementById("square2");
const sq3 = document.getElementById("square3");
const sq4 = document.getElementById("square4");
const startBtn = document.getElementById("startBtn");

//COLORS

const green = "rgb(74, 177, 74)";
const red = "rgb(177, 74, 74)";
const yellow = "rgb(221, 219, 82)";
const blue = "rgb(74, 165, 177)";

const lightgreen = "rgb(52, 233, 52)";
const lightred = "rgb(233, 59, 59)";
const lightyellow = "rgb(250, 247, 53)";
const lightblue = "rgb(54, 229, 252)";


//SOUNDS

const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const sound4 = document.getElementById("sound4");


var canGuess;
var codes = [];
var codesToGuess = [];
const sounds = [0,sound1,sound2,sound3,sound4];

                    //SERIOUS STUFF!


const start = () => {
    codes = [4,4];
    startBtn.style.visibility = "hidden";
    newRound();
}

const newRound = () => {
    canGuess = false;
    codes.push(Math.ceil(Math.random()*4));
    codesToGuess = [...codes];
    showInputs(codes);
}

const clickASquare = (squareNum) => {

    if(canGuess == true){
        let check = codesToGuess.shift();
        if(squareNum == check){
            lightUp(squareNum); 
            if(codesToGuess.length == 0){
                setTimeout(newRound,1500);
            }
        }else{
            alert("GAME OVER");
            startBtn.style.visibility = "visible";
        };
    }else{
        return;
    }
}

//FUNCTIONS

/**
 * Light a square 
 * @param {integer} square Square's number to light up
 */
function lightUp(square){
    if(square == 1){
        sq1.style.backgroundColor = lightgreen;
        sq1.style.boxShadow = "0px 0px 25px 5px rgb(22, 255, 22)";
        sound1.play();
        setTimeout(lightDown,1500, sq1, green);
    }
    if(square == 2){
        sq2.style.backgroundColor = lightred;
        sq2.style.boxShadow = "0px 0px 25px 5px rgb(255, 14, 14)";
        sound2.play();
        setTimeout(lightDown,1500, sq2, red);
    }
    if(square == 3){
        sq3.style.backgroundColor = lightyellow;
        sq3.style.boxShadow = "0px 0px 25px 5px rgb(255, 251, 14)";
        sound3.play();
        setTimeout(lightDown,1500, sq3, yellow);
    }
    if(square == 4){
        sq4.style.backgroundColor = lightblue;
        sq4.style.boxShadow = "0px 0px 25px 5px rgb(0, 225, 255)";
        sound4.play();
        setTimeout(lightDown,1500, sq4, blue);
    }
}


/**
 * A function that gives a square his former state
 * @param {The target in DOM} square 
 * @param {Color value} color 
 */
function lightDown(square, color){
    square.style.backgroundColor = color;
    square.style.boxShadow = "0px 0px 0px 0px";
}


function showInputs(codes){
    codes.forEach((code, index) => {
        setTimeout(() => {
            lightUp(code);
        },index*1900+500)
    });
    setTimeout(()=> {canGuess = true}, codes.length*1500+1500);
}

