// var swiper = new Swiper(".mySwiper", {
//     scrollbar: {
//       el: ".swiper-scrollbar",
//       hide: true,
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//   });

var loader = document.querySelector("#loader")
window.addEventListener("load", function () {
  loader.style.display = "none"
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    spaceBetween: 25,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      // Makes the Scrollbar Draggable
      draggable: true,
      // Snaps slider position to slides when you release Scrollbar
      snapOnRelease: true,
      // Size (Length) of Scrollbar Draggable Element in px
      dragSize: '300px',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  gsap.to("#nav", {
    top: 0,
    position: "fixed",
    boxShadow: "18px 18px 18px 11px 0000008d",
    scrollTrigger:{
        trigger: "#nav",
        scroll: "body",
        start: "top 4%",
        end: "top 0%",
        scrub: true,
    },
  })