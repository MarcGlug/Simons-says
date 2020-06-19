
const sq1 = document.getElementById("square1");
const sq2 = document.getElementById("square2");
const sq3 = document.getElementById("square3");
const sq4 = document.getElementById("square4");

//COLOR
const lightgreen = "rgb(52, 233, 52)";
const lightred = "rgb(233, 59, 59)";
const lightyellow = "rgb(250, 247, 53)";
const lightblue = "rgb(54, 229, 252)";



sq1.addEventListener('click', (event) => {
    consoleLog(1);
    sq1.style.backgroundColor = lightgreen;
    sq1.style.boxShadow = "0px 0px 25px 5px rgb(22, 255, 22)";
});

sq2.addEventListener('click', (event) => {
    consoleLog(2);
    sq2.style.backgroundColor = lightred;
    sq2.style.boxShadow = "0px 0px 25px 5px rgb(255, 14, 14)";
});

sq3.addEventListener('click', (event) => {
    consoleLog(3);
    sq3.style.backgroundColor = lightyellow;
    sq3.style.boxShadow = "0px 0px 25px 5px rgb(255, 251, 14)";
});

sq4.addEventListener('click', (event) => {
    consoleLog(4);
    sq4.style.backgroundColor = lightblue;
    sq4.style.boxShadow = "0px 0px 25px 5px rgb(0, 225, 255)";
});




function consoleLog(num){
    console.log(num);
}