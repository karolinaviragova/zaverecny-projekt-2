const hamburgerMenu = document.querySelector("#menu-tlacitko");
const icon = document.querySelector("i");

hamburgerMenu.addEventListener("click", () => {
  const menuPolozky = document.querySelector("#menu-polozky");
  menuPolozky.classList.toggle("show");
  icon.classList.toggle("fa-xmark");
});

