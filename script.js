const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function loadFile(event) {
	var image = document.getElementById('img');
	image.src = URL.createObjectURL(event.target.files[0]);
}


const options = {
    sepia: 0,
    grayscale: 0,
    brightness: 1,
    contrast: 1,
    opacity: 1,
    hue: 0,
    rotation: 0,
    scale: 1,
    invertVal: 0
};

function setSepia(e){
    options.sepia = e.value;
    document.getElementById('Amount').innerHTML= e.value;
    redraw();
}

function setGs(e){
    options.grayscale = e.value;
    document.getElementById('Amount2').innerHTML= e.value;
    redraw();
}

function setBright(e){
    options.brightness = e.value;
    document.getElementById('Amount3').innerHTML= e.value;
    redraw();
}

function setContrast(e){
    options.contrast = e.value;
    document.getElementById('Amount4').innerHTML= e.value ;
    redraw();
}

function setOpacity(e){
    options.opacity = e.value;
    document.getElementById('Amount5').innerHTML= e.value;
    redraw();
}

var value = document.getElementById('Amount6');
document.getElementById('hue').oninput = function() {
    value.textContent = 'hue-rotate(xdeg)'.replace('hue-rotate(xdeg)', this.value);
    options.hue = this.value;
    redraw();
}

let rotation = 0;
function RotateImg(){
    rotation += 90;
    if (rotation == 360) {
        rotation = 0;
    }
    options.rotation = rotation;
    redraw();
}

let scale = 1
function flipping() {
    scale -= 2
    if (scale <= -2) {
        scale = 1;
    }
    options.scale = scale;
    redraw();
}

let invertVal = 0
function invert() {
    invertVal += 100
    if (invertVal > 100) {
        invertVal = 0
    }
    options.invertVal = invertVal;
    redraw();
}

function original() {
    document.getElementById("img").style["webkitFilter"] ="sepia(0) grayscale(0) brightness(1) contrast(1) opacity(1) invert(0) hue-rotate(0deg)";
    document.querySelector("img").style.transform = "rotate(0deg) scaleX(1)";
}

function redraw() {
    document.getElementById("img").style["webkitFilter"] ="sepia(" + options.sepia + ") grayscale(" + options.grayscale + ") brightness(" + options.brightness + ") contrast(" + options.contrast + ") opacity(" + options.opacity + ") invert(" + options.invertVal + ") hue-rotate(huexdeg)".replace('huex', options.hue);
    document.querySelector("img").style.transform = `rotate(${options.rotation}deg) scaleX(${options.scale})`;
}
