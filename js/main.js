
const menuIcon = document.querySelector("#menu-icon");

menuIcon.addEventListener('click', ({target}) => {
  const overlay = document.querySelector(".overlay-container");
  const overlayItems = document.querySelector(".overlay-content");
  const bars = document.querySelector(".menu-bars");

  overlay.classList.toggle("active");
  overlayItems.style.opacity = "1";
  target.style.zIndex = "2";
  bars.classList.toggle("change");
})
