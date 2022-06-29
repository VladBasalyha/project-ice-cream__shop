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

//відкриття та закриття мобільного вікна
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    background: document.querySelector('[data-menu]'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    refs.background.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
  }
})();

// відкриття та закриття мобільного вікна при натисненні на якірні посилання

const mobileBox = document.querySelector('.mobile-menu');
const mobileBoxBacground = document.querySelector('[data-menu]');
const closeAnchor1 = document.querySelector('[data-menu-about]');
const closeAnchor2 = document.querySelector('[data-menu-howismade]');
const closeAnchor3 = document.querySelector('[data-menu-products]');
const closeAnchor4 = document.querySelector('[data-menu-contacts]');

closeAnchor1.addEventListener('click', onAnchorClick);
closeAnchor2.addEventListener('click', onAnchorClick);
closeAnchor3.addEventListener('click', onAnchorClick);
closeAnchor4.addEventListener('click', onAnchorClick);

function onAnchorClick() {
  mobileBoxBacground.classList.remove('is-open');
  mobileBox.classList.remove('is-open');
}