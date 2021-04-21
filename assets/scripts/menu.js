let show = true;
let toggleClass = false;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");
const menuItem = document.querySelectorAll(".menu-item");

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});

menuItem.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {

    toggleClass = menuSection.classList.contains("on");

    if(toggleClass){
      document.body.style.overflow = "initial";

      menuSection.classList.remove("on");
      show = true;
    }

  });
});
