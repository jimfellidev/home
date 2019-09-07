const menuId = document.getElementById("myDropdown");
// const menu = document.querySelector('.nav__dropbtn--content');
const menuToggle = document.querySelector('.hamburger');
const menuItem = document.querySelector('.nav__dropbtn--item');
const hamburger = document.querySelector(".hamburger");
const addDropper = document.querySelector(".navbar");


// HAMBURGALER //
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    if (hamburger.classList.contains('is-active')){
      addDropper.classList.add("nav__active");
    } else {
      addDropper.classList.remove("nav__active");
    } 
  });