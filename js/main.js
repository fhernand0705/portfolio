
const menuIcon = document.querySelector(".menu-bars-container");

menuIcon.addEventListener('click', () => {
  const bars = document.querySelector(".menu-bars");
  bars.classList.toggle("change");
})
