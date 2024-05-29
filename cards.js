// --------- SWIPER ----------
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-hero', {
          // Optional parameters
          slidesPerView: "auto",
          spaceBetween: 30,
          slidesPerGroupAuto: 10,
  
          direction: "horizontal",
          loop: true,
          allowTouchMove: true,
          effect: "cards",
          autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          },
  
          // If we need pagination
          pagination: {
            el: ".swiper-pagination",
            // type: "progressbar"
            clickable: true,
            dynamicBullets: true
          },
  
          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
  
          // And if we need scrollbar
          // scrollbar: {
          //   el: ".swiper-scrollbar",
          //   draggable: true,
          // },
    });    
  });