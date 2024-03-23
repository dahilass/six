import mobileNav from './modules/mobile-nav.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';

mobileNav();

const paymentSwiper = new Swiper('.payment__swiper', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 1200,
    loop: false,
    // parallax: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: true,
    },

    navigation: {
        el: '.payment__swiper-pagination',
        enabled: false,
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

const topExperienceSwiper = new Swiper('.experience__swiper_top', {
    slidesPerView: 1,
    speed: 1200,
    loop: false,
    // parallax: true,
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
        351: {
            slidesPerView: 1,
        },
    },
});
const botExperienceSwiper = new Swiper('.experience__swiper_bot', {
    slidesPerView: 1,
    speed: 1200,
    loop: false,
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
        351: {
            slidesPerView: 1,
        },
    },
});

topExperienceSwiper.controller.control = botExperienceSwiper;
botExperienceSwiper.controller.control = topExperienceSwiper;

// const testimonialsSwiper = new Swiper('.testimonials__swiper', {
//     slidesPerView: 3,
//     speed: 1200,
//     loop: true,
//     centeredSlides: true,
//     initialSlide: 0,
//     // parallax: true,
//     grabCursor: true,
//     effect: 'coverflow',
//     coverflowEffect: {
//         rotate: 0,
//         slideShadows: false,
//         stretch: 300,
//         depth: 300,
//         modifier: 1,
//     },
//     pagination: {
//         el: '.testimonials__swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.testimonials__swiper-button-next',
//         prevEl: '.testimonials__swiper-button-prev',
//     },
// });

// intl-tel-input

const inputFirst = document.querySelector('#phoneFirst');
window.intlTelInput(inputFirst, {
    utilsScript:
        'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js',
    preferredCountries: ['ru'],
    defaultCountry: 'auto',
    i18n: {
        // Country names
        ru: 'Россия',
        ua: 'Украина',
        kz: 'Казахстан',
        ab: 'Абхазия',
        az: 'Азербайджан',
        by: 'Беларусь',
        ge: 'Грузия',
        kg: 'Киргизстан',
        lt: 'Литва',
        lv: 'Латвия',
        tj: 'Таджикистан',
        uz: 'Узбекистан',
        tm: 'Туркменистан',
        fi: 'Финляндия',
        ee: 'Эстония',
        am: 'Армения',
        cn: 'Китай',

        searchPlaceholder: 'Поиск',
    },
    onlyCountries: [
        'ru',
        'ua',
        'kz',
        'ab',
        'az',
        'by',
        'ge',
        'kg',
        'lt',
        'lv',
        'tj',
        'uz',
        'tm',
        'fi',
        'ee',
        'os',
        'am',
        'cn',
    ],
});

const inputSecond = document.querySelector('#phoneSecond');
window.intlTelInput(inputSecond, {
    utilsScript:
        'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.19/build/js/utils.js',
    preferredCountries: ['ru'],
    defaultCountry: 'auto',
    i18n: {
        // Country names
        ru: 'Россия',
        ua: 'Украина',
        kz: 'Казахстан',
        ab: 'Абхазия',
        az: 'Азербайджан',
        by: 'Беларусь',
        ge: 'Грузия',
        kg: 'Киргизстан',
        lt: 'Литва',
        lv: 'Латвия',
        tj: 'Таджикистан',
        uz: 'Узбекистан',
        tm: 'Туркменистан',
        fi: 'Финляндия',
        ee: 'Эстония',
        am: 'Армения',
        cn: 'Китай',

        searchPlaceholder: 'Поиск',
    },
    onlyCountries: [
        'ru',
        'ua',
        'kz',
        'ab',
        'az',
        'by',
        'ge',
        'kg',
        'lt',
        'lv',
        'tj',
        'uz',
        'tm',
        'fi',
        'ee',
        'os',
        'am',
        'cn',
    ],
});
