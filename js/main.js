// %%%%%%%%% navigation bar code start %%%%%%%%%
const navbar = document.querySelector(".mobile-menu");
const menu = document.querySelector(".mobile-menu-btn");
menu.addEventListener("click", ()=>{
  navbar.classList.toggle("hidden");
})
// %%%%%%%%% navigation bar code ends %%%%%%%%%

// %%%%%%%% shopping filter button code start %%%%%%%%%%%%%%%%
const ShopBtn = document.querySelectorAll(".shop-menu-btn");
const ShopMenu = document.querySelector(".shop-menu-list");
for(let i = 0 ; i < ShopBtn.length ; i++){
  ShopBtn[i].addEventListener("click",(e)=>{
    let shopBtnParrent = e.target.parentElement.parentElement;
    console.log(shopBtnParrent);
    shopBtnParrent.classList.toggle("show")
    // shopBtnParrent.classList.toggle("hidden");
  })
}
// %%%%%%%% shopping filter button code  ends %%%%%%%%%%%%%%%%

// %%%%%% swiper js code start %%%%%%%%
// const swiper = new Swiper(".swiper", {
  // Optional parameters
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   Clickable: true,
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
// });
// %%%%%% swiper js code end %%%%%%%%%%
