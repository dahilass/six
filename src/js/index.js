import mobileNav from './modules/mobile-nav.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// import 'intl-tel-input/build/css/intlTelInput.css';
// import intlTelInput from 'intl-tel-input';

mobileNav();

const swiper = new Swiper('.swiper', {
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
    el: '.swiper-pagination',
    enabled: false,
  },

  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true,
  },

  breakpoints: {
    901: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        enabled: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        enabled: true,
      },
    },
    551: {
      loop: false,
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        enabled: true,
      },
    },
  },
});

// intl-tel-input

const input = document.querySelector('#phone');
window.intlTelInput(input, {
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
  onlyCountries: ['ru', 'ua', 'kz', 'ab', 'az', 'by', 'ge', 'kg', 'lt', 'lv', 'tj','uz', 'tm', 'fi', 'ee', 'os', 'am', 'cn'],
});
