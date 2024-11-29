const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;


//Hamburger button//

const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});







