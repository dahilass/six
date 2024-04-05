function modalWindow({ modal, btnOpen, btnClose }) {
    
    const modalElem = document.querySelector(modal);
    const btnOpenModal = document.querySelectorAll(btnOpen);
    const btnCloseModal = document.querySelectorAll(btnClose);

    for (let openBtn of btnOpenModal) {
        openBtn.addEventListener('click', () => {
            show(modalElem);
            document.body.classList.add('overlay');
        });
    }

    for (let closeBtn of btnCloseModal) {
        closeBtn.addEventListener('click', () => {
            close(modalElem);
            document.body.classList.remove('overlay');
        });
    }

    function show(el) {
        el.style.cssText = `
        visibility: visible;
        opacity: 1;
        `;
    }
    
    function close(el) {
        el.style.cssText = `
        visibility: hidden;
        opacity: 0;
        `;
    }
}

export default modalWindow;
