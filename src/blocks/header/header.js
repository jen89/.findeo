// import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);
import "fancybox";

(() => {
    $('.header__menu-opened, .header__menu-close').on('click', function (e) {
        e.preventDefault();
        $('.header__menu').toggleClass('active');
    });

    //new Swiper('.swiper-container');
    new SwiperCore('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 1200,
        autoplay: {
            delay: 1500,
        },
        effect: 'fade',
        loop: true,

    });

    // $('.header-slider__btnwatch').fancybox({});
    $('[data-fancybox]').fancybox({});



})();
