var css = document.querySelector('h3');
var color1 = document.querySelector('.color-1');
var color2 = document.querySelector('.color-2');
var body = document.getElementById('gradient');
var button = document.querySelector('.generate-btn');
console.log(color1.parentNode)
init();

function init() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
}

function setCSSText() {
    css.textContent = body.style.backgroundImage + ';';
    console.log(body.style);
}

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    setCSSText();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomGradient() {
    var r1 = randomNumber();
    var g1 = randomNumber();
    var b1 = randomNumber();
    var r2 = randomNumber();
    var g2 = randomNumber();
    var b2 = randomNumber();
    convertedRGB1 = rgbToHex(r1, g1, b1);
    convertedRGB2 = rgbToHex(r2, g2, b2);
    body.style.background = 'linear-gradient(to right,' + convertedRGB1 + ',' + convertedRGB2 + ')';
    color1.value = convertedRGB1;
    color2.value = convertedRGB2;
    setCSSText();
};

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', randomGradient);