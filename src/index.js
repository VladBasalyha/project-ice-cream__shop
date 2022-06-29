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

//мобільне меню By now
const mobile = document.querySelector('.backdrop-mobile'); //modal form
const openBtnMob = document.querySelector('.open-btn-mobile'); //open button
const closeBtnMob = document.querySelector('.close-btn-mobile'); // close btn

openBtnMob.addEventListener('click', onOpenBtnClickMob);
closeBtnMob.addEventListener('click', onCloseBtnClickMob);

function onOpenBtnClickMob () {
    mobile.classList.remove('is-hidden');
}

function onCloseBtnClickMob () {
    mobile.classList.add('is-hidden');
}

//скрипт лічильника
// let counterValue = 0;
// let counterValue1 = 0;
// let counterValue2 = 0;
// let counterValue3 = 0;

// const iceCreamCount = 5;
// const iceCoffeCount = 7;
// const milkchakesCount = 10;

// let totalCount = (counterValue * iceCreamCount) + (counterValue1 * iceCoffeCount)+(counterValue2 * milkchakesCount);

// if (totalCount < 5) {
//     btnDecrementElement1.ariaDisabled;
//     btnDecrementElement2.ariaDisabled;
// }

// const valueOfCounter = document.querySelector('#value');
// const valueOfCounter1 = document.querySelector('#value1');
// const valueOfCounter2 = document.querySelector('#value2');

// const btnDecrementElement = document.querySelector('button[data-action="decrement"]');
// const btnIncrementElement = document.querySelector('button[data-action="increment"]');
// const btnDecrementElement1 = document.querySelector('button[data-action="decrement1"]');
// const btnIncrementElement1 = document.querySelector('button[data-action="increment1"]');
// const btnDecrementElement2 = document.querySelector('button[data-action="decrement2"]');
// const btnIncrementElement2 = document.querySelector('button[data-action="increment2"]');


// const valueOfCounter3 = document.querySelector('#value3');

//counter Ice Cream
// const onClickDecrement = () => {
//     counterValue -= 1;
//     valueOfCounter.textContent = counterValue;
//     valueOfCounter3.textContent = counterValue3 - (counterValue * iceCreamCount);
// };
// const onClickIncrement = () => {
//     counterValue += 1;
//     valueOfCounter.textContent = counterValue;
//     valueOfCounter3.textContent = counterValue3 + (counterValue * iceCreamCount);

// };

// btnDecrementElement.addEventListener('click', onClickDecrement);
// btnIncrementElement.addEventListener('click', onClickIncrement);


//counter Ice Coffe
// const onClickDecrement1 = () => {
//     counterValue1 -= 1;
//     valueOfCounter1.textContent = counterValue1;
//     valueOfCounter3.textContent = counterValue3 - (counterValue1 * iceCoffeCount);

// };
// const onClickIncrement1 = () => {
//     counterValue1 += 1;
//     valueOfCounter1.textContent = counterValue1;
//     valueOfCounter3.textContent = counterValue3 + (counterValue * iceCoffeCount);

// };
// btnDecrementElement1.addEventListener('click', onClickDecrement1);
// btnIncrementElement1.addEventListener('click', onClickIncrement1);



//counter Milkchakes
// const onClickDecrement2 = () => {
//     counterValue2 -= 1;
//     valueOfCounter2.textContent = counterValue2;
//     valueOfCounter3.textContent = counterValue3 - (counterValue2 * milkchakesCount);
// };
// const onClickIncrement2 = () => {
//     counterValue2 += 1;
//     valueOfCounter2.textContent = counterValue2;
//     valueOfCounter3.textContent = counterValue3 + (counterValue2 * milkchakesCount);
// };
// btnDecrementElement2.addEventListener('click', onClickDecrement2);
// btnIncrementElement2.addEventListener('click', onClickIncrement2);


//відкриття та закриття мобільного вікна бургер
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