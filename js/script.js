
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

//SHADOWS 

const shadowColor1 = "rgb(22, 255, 22)";
const shadowColor2 = "rgb(255, 14, 14)";
const shadowColor3 = "rgb(255, 251, 14)";
const shadowColor4 = "rgb(0, 225, 255)";

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
    codes = [];
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
            alert("GAME OVER! Ton score est de " + codes.length + " tours.");
            startBtn.style.visibility = "visible";
            canGuess = false;
        };
    }else{
        return;
    }
}

//FUNCTIONS

/**
 * Check which square to light
 * @param {integer} square Square's number to light up
 */
function lightUp(square){
    if(square == 1){
        lightASquare(sq1, lightgreen, green, shadowColor1, sound1);
    }
    if(square == 2){
        lightASquare(sq2, lightred, red, shadowColor2, sound2);
    }
    if(square == 3){
        lightASquare(sq3, lightyellow, yellow, shadowColor3, sound3);
    }
    if(square == 4){
        lightASquare(sq4, lightblue, blue, shadowColor4, sound4);
    }
}

/**
 * Light a specific square
 * @param {number} square The number of the square to light up
 * @param {Text} lightColor The color code when lighten 
 * @param {text} formerColor The former color of the square
 * @param {text} shadowColor The color of the shadow when the square is lighten
 * @param {} sound The DOM element audio to play 
 */
const lightASquare = (square, lightColor, formerColor, shadowColor, sound) => {
    square.style.backgroundColor = lightColor;
    square.style.boxShadow = " 0px 0px 25px 5px " + shadowColor;
    sound.play();
    setTimeout(lightDown,1500, square, formerColor);
}

/**
 * A function that gives a square his former state
 * @param {} square The DOM element 
 * @param {Text} color The former color of the square
 */
function lightDown(square, color){
    square.style.backgroundColor = color;
    square.style.boxShadow = "none";
}

/**
 * Function that show the input code to the user
 * @param {Array} codes Array of value from 1 to 4
 */
function showInputs(codes){
    codes.forEach((code, index) => {
        setTimeout(() => {
            lightUp(code);
        },index*1900+500)
    });
    setTimeout(()=> {canGuess = true}, codes.length*1500+1500);
}
