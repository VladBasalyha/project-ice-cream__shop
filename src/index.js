const modal = document.querySelector('.backdrop'); //modal form
const openBtn = document.querySelector('.open-btn'); //open button
const closeBtn = document.querySelector('.close-btn'); // close btn

openBtn.addEventListener('click', onOpenBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);

function onOpenBtnClick () {
    modal.classList.remove('is-hidden');
}

function onCloseBtnClick () {
    modal.classList.add('is-hidden');
}