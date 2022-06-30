//мобільне меню By now
const mobile = document.querySelector('.backdrop-mobile'); //modal form
const openBtnMob = document.querySelector('.open-btn-mobile'); //open button
const closeBtnMob = document.querySelector('.close-btn-mobile'); // close btn
const openWithMobBtn = document.querySelector('[data-menu-btn]');

openBtnMob.addEventListener('click', onOpenBtnClickMob);
closeBtnMob.addEventListener('click', onCloseBtnClickMob);
openWithMobBtn.addEventListener('click', onOpenBtnClickMob);

function onOpenBtnClickMob () {
    mobile.classList.remove('is-hidden');
}

function onCloseBtnClickMob () {
    mobile.classList.add('is-hidden');
}