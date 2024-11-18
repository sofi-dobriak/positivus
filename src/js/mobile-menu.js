const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClosed = document.querySelector('.mobile-btn-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-link');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  desableScroll();
};

const desableScroll = () => document.body.classList.toggle('is-scroll-disable');

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  desableScroll();
};

mobileBtnOpen.addEventListener('click', toggleMenu);
mobileBtnClosed.addEventListener('click', closeMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
