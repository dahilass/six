import mobileNav from './modules/mobile-nav.js';
import modalWindow from './modules/modal-window.js';
import swiperBundle from './modules/swiper-bundle.js';
import intTelInputBundle from './modules/int-tel-input-bundle.js';
import mixItUpBundle from './modules/mixitup-bundle.js';

// mobileNav();

// WHY section

const whyListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target.children.length);
            for (let i = 0; i < entry.target.children.length; i++) {
                entry.target.children[i].style.marginTop = `${5.5 * i}rem`;
                entry.target.children[i].classList.add('animated');
            }
        }
    });
});

whyListObserver.observe(document.querySelector('.why__list'));

modalWindow({
    modal: '.modal',
    btnOpen: '.open-modal-btn',
    btnClose: '.close-modal-btn',
});
swiperBundle();
intTelInputBundle();
mixItUpBundle();
