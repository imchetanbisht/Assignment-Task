
const sideNav = document.getElementById("sideNav");

function toggleNav() {
  sideNav.classList.toggle("open");
}

function closeNav() {
  sideNav.classList.remove("open");
}

window.addEventListener("load", closeNav);


document.querySelectorAll(".slider").forEach(slider => {
  const images = slider.dataset.images
    .split(",")
    .map(img => img.trim());

  let index = 0;

  // initial image
  slider.style.backgroundImage = `url('${images[index]}')`;
  slider.style.transition = "background-image 1s ease-in-out";

  setInterval(() => {
    index = (index + 1) % images.length;
    slider.style.backgroundImage = `url('${images[index]}')`;
  }, 4000);
});
