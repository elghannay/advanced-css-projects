const btn = document.querySelectorAll(".btn");
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modal_no = document.querySelector('.modal__action--negative');
const modal_yes = document.querySelector('.modal__action');

btn.forEach(element => {
    element.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    })
});

modal_no.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})