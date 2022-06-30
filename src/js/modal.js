//модальне вікно Francise
const modal = document.querySelector('.backdrop'); //modal form
const openBtn = document.querySelector('.open-btn-modal'); //open button
const closeBtn = document.querySelector('.close-btn-modal'); // close btn

openBtn.addEventListener('click', onOpenBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick () {
    modal.classList.remove('is-hidden');
}

function onCloseBtnClick () {
    modal.classList.add('is-hidden');
}