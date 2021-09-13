// Swiper
const indexSwiper = new Swiper('.bottom-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 1,

    // Navigation arrows
    /*navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/

    // autoplay
    autoplay: {
        delay: 5000,
    },

    // pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
