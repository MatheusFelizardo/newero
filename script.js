const wrapper = document.querySelector(".wrapper");
const icon = document.querySelector(".menuicon");
const menuContent = document.querySelector(".menuContent");
icon.addEventListener("click", () => {
  menuContent.classList.toggle("active");
  wrapper.classList.toggle("active");
  icon.classList.toggle("active");
});
