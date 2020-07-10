const burgerMenuPage = document.querySelector('.burger-menu');
const buttonOpen = document.querySelector('.buttonOpen');
const buttonClose = document.querySelector('.buttonClose');

buttonOpen.addEventListener("click", function () {
    burgerMenuPage.classList.remove('hiddenBlock');
});

buttonClose.addEventListener("click", function () {
    burgerMenuPage.classList.add('hiddenBlock');
});

const nav = document.querySelectorAll('.burger-menu__list__link');
const navList = [...nav];

for (elem of navList) {
    elem.addEventListener("click", function () {
        burgerMenuPage.classList.add('hiddenBlock');
    });
}