
const menuIcon = document.querySelector(".menu-bars-container");

menuIcon.addEventListener('click', ({target}) => {
  target.classList.toggle("change");
})
