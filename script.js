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

function set(e){
    document.getElementById('img').style["webkitFilter"] = "sepia("+e.value+")";
    document.getElementById('Amount').innerHTML="("+e.value+")";
}