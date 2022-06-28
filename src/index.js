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


(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);


  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const mobileMenu = document.querySelector('.js-menu-container');
  const closeMobileMenu = document.querySelector('.mobile-href');

    closeMobileMenu.addEventListener('click', onMobileHrefClick);

function onMobileHrefClick() {
    mobileMenu.classList.remove('is-open');  
    mobileMenu.classList.add('is-hidden');
  }