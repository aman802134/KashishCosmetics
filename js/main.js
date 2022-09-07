// %%%%%%%%% navigation bar code start %%%%%%%%%
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
// %%%%%%%%% navigation bar code ends %%%%%%%%%

// %%%%%% swiper js code start %%%%%%%%
const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    Clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// %%%%%% swiper js code end %%%%%%%%%%
