import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperBundle() {
    // SWIPERS

    //PAYMENT SWIPER (vacancies exapmles)
    const paymentSwiper = new Swiper('.payment__swiper', {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 5,
        speed: 1200,
        loop: false,
        grabCursor: true,
        // parallax: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
        },

        pagination: {
            el: '.payment__swiper-pagination',
            enabled: true,
            clickable: true,
        },

        breakpoints: {
            901: {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 10,
                pagination: {
                    el: '.payment__swiper-pagination',
                    enabled: false,
                },
                navigation: {
                    nextEl: '.payment__swiper-button-next',
                    prevEl: '.payment__swiper-button-prev',
                    enabled: true,
                },
            },
            551: {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 20,
                pagination: {
                    el: '.payment__swiper-pagination',
                    enabled: true,
                },
            },
        },
    });

    // EXPERIENCE SWIPER (bottom and top)
    const topExperienceSwiper = new Swiper('.experience__swiper_top', {
        slidesPerView: 1,
        speed: 6000,
        loop: false,
        grabCursor: true,
        // parallax: true,
        autoplay: {
            delay: 1,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
        },
        breakpoints: {
            1201: {
                slidesPerView: 5,
            },
            901: {
                slidesPerView: 4,
            },
            601: {
                slidesPerView: 3,
            },
            451: {
                slidesPerView: 2,
            },
        },
    });
    const botExperienceSwiper = new Swiper('.experience__swiper_bot', {
        slidesPerView: 1,
        loop: false,
        grabCursor: true,
        // parallax: true,
        // freeMode: {
        //     enabled: true,
        // },
        breakpoints: {
            1201: {
                slidesPerView: 5,
            },
            901: {
                slidesPerView: 4,
            },
            601: {
                slidesPerView: 3,
            },
            451: {
                slidesPerView: 2,
            },
        },
    });

    topExperienceSwiper.controller.control = botExperienceSwiper;
    botExperienceSwiper.controller.control = topExperienceSwiper;

    // POTRFOLIO NAV SWIPER
    const portfolioSwiper = new Swiper('.portfolio__swiper', {
        slidesPerView: 'auto',
        spaceBetween: '12px',
        loop: false,
        navigation: {
            nextEl: '.portfolio__swiper-button-next',
            prevEl: '.portfolio__swiper-button-prev',
        },
    });

    // TESTIMONIALS SWIPER
    const testimonialsSwiper = new Swiper('.testimonials__swiper', {
        slidesPerView: 'auto',
        speed: 1200,
        loop: true,
        centeredSlides: true,
        // parallax: true,
        initialSlide: '0',
        grabCursor: true,
        effect: 'coverflow',
        slideShadows: false,
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            stretch: 300,
            depth: 500,
            modifier: 1.15,
            scale: 1,
        },
        pagination: {
            el: '.testimonials__swiper-pagination',
            enabled: true,
            clickable: true,
            spaceBetween: 0,
            // dynamicBullets: true,
            // dynamicMainBullets: 4,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials__swiper-button-next',
            prevEl: '.testimonials__swiper-button-prev',
        },
    });
}

export default swiperBundle;
