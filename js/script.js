// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar utk menghilangan navbar-nav

const hamberger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
