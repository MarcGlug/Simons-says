
                //CONSTANTES

const sq1 = document.getElementById("square1");
const sq2 = document.getElementById("square2");
const sq3 = document.getElementById("square3");
const sq4 = document.getElementById("square4");
const test = document.getElementById("test");

                //VARIABLES

var code = [];

//COLOR

const green = "rgb(74, 177, 74)";
const red = "rgb(177, 74, 74)";
const yellow = "rgb(221, 219, 82)";
const blue = "rgb(74, 165, 177)";

const lightgreen = "rgb(52, 233, 52)";
const lightred = "rgb(233, 59, 59)";
const lightyellow = "rgb(250, 247, 53)";
const lightblue = "rgb(54, 229, 252)";


                    //SERIOUS STUFF!

//PLAYER'S INPUT

sq1.addEventListener('click', (event) => {
    console.log(1);
    lightUp(1);
});

sq2.addEventListener('click', (event) => {
    console.log(2);
    lightUp(2); 
});

sq3.addEventListener('click', (event) => {
    console.log(3);
    lightUp(3);
});

sq4.addEventListener('click', (event) => {
    console.log(4);
    lightUp(4); 
});

//SIMON'S INPUT

test.addEventListener('click', (event) =>{
    newEntry();
    throughArray(code);
    console.log(code);
})


//FUNCTIONS

/**
 * Light a square 
 * @param {integer} square Square's number to light up
 */
function lightUp(square){
    if(square == 1){
        sq1.style.backgroundColor = lightgreen;
        sq1.style.boxShadow = "0px 0px 25px 5px rgb(22, 255, 22)";
        setTimeout(lightDown,300, sq1, green);
    }
    if(square == 2){
        sq2.style.backgroundColor = lightred;
        sq2.style.boxShadow = "0px 0px 25px 5px rgb(255, 14, 14)";
        setTimeout(lightDown,300, sq2, red);
    }
    if(square == 3){
        sq3.style.backgroundColor = lightyellow;
        sq3.style.boxShadow = "0px 0px 25px 5px rgb(255, 251, 14)";
        setTimeout(lightDown,300, sq3, yellow);
    }
    if(square == 4){
        sq4.style.backgroundColor = lightblue;
        sq4.style.boxShadow = "0px 0px 25px 5px rgb(0, 225, 255)";
        setTimeout(lightDown,300, sq4, blue);
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

/**
 * Add a random number between 1 and 4 in the code array;
 */
function newEntry(){
    var square_number = Math.floor(Math.random()*4)+1;
    code.push(square_number);
    return code;
}

function throughArray(array){
    var index = 0;
    setInterval(function() {
        if (index < array.length) {
            lightUp(array[index])
            index++;
        }else {
            return;
        }
    }, 1000); return
}