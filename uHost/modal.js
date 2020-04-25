const btn = document.querySelectorAll(".btn");
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modal_no = document.querySelector('.modal__action--negative');
const modal_yes = document.querySelector('.modal__action');
const mobile_nav = document.querySelector('.mobile-nav');
const toggle_button = document.querySelector('.toggle-button');

function closeModal() {
    backdrop.classList.remove('open');
    if (modal)
        modal.classList.remove('open');
}

btn.forEach(element => {
    element.addEventListener('click', () => {
        backdrop.classList.add('open');
        modal.classList.add('open');
    })
});
if (modal_no) modal_no.addEventListener('click', closeModal);

toggle_button.addEventListener('click', () => {
    mobile_nav.classList.add('open');
    backdrop.classList.add('open');
})

backdrop.addEventListener('click', () => {
    mobile_nav.classList.remove('open');
    backdrop.classList.remove('open');
    if (modal)
        modal.classList.remove('open');
})