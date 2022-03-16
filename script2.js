var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.querySelector(".random1");
var random2 = document.querySelector(".random2"); //si duese id se cologa #random2

//color de entrada match con el generador de fondo en la primera pagina de carga

window.onload = init;

function init() {
    color1.value = "#abe000";
    color2.value = "#ffaf00";


    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value  
    + ")";

    css.textContent = body.style.background + ";";
}

function setGradient () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value  
    + ")";

    css.textContent = body.style.background + ";";
}


// colores de manera Random
function setRandomGradient(event) {
    if (event.target === random1){
        random1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
        color1.value = random1.value;
    }   else if (event.target === random2) {
        random2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
        color2.value = random2.value;
}


    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value  
    + ")";

    css.textContent = body.style.background + ";";
}




//callback function and event listeners
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random1.addEventListener("click", setRandomGradient);

random2.addEventListener("click", setRandomGradient);