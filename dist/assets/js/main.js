const contactBtns = document.querySelectorAll('.js-contact-btn');
const modal = document.querySelector('.js-modal');
const modalBg = document.querySelector('.js-modal-bg');
const modalClose = document.querySelector('.js-modal-close-btn');

function toggleModal() {
    modal.classList.toggle('flex');
    modal.classList.toggle('hidden');
}

contactBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
})

modalBg.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);
