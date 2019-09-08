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
      hamburger.classList.add("nav__plus--active");
    } else {
      addDropper.classList.remove("nav__active");
      hamburger.classList.remove("nav__plus--active");
    } 
  });

//   function isDescendant(parent, child) {
//     var node = child.parentNode;
//     while (node != null) {
//       if (node == parent) {
//         return true;
//       }
//       node = node.parentNode;
//     }
//     return false;
//   }
  
// // re-write 


//   document.addEventListener("click", function(event){
//     console.log('event.target', event.target);    
//     const nav = document.querySelector(".nav-wrapper");
//     var isInNav = isDescendant(nav, event.target);
//     console.log('isInNav', isInNav);
//     if (hamburger.classList.contains('is-active') && isInNav) {
//       console.log('true')      
//     } else {
//       console.log('false')
//       menuId.classList.remove("show");
//       hamburger.classList.remove("is-active");
//     }
//   })    