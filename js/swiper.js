const swiper = new Swiper(".mySwiper", {
    loop : true,
    spaceBetween: 5,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

const swiper2 = new Swiper(".mySwiper2", {
    loop : true,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    thumbs: {
        swiper: swiper, 
    },
    centeredSlides : true,
});