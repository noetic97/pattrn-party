const menu = document.querySelector('.header-menu');
const dropNav = document.querySelector('.dropdown-container')

const toggleNav = () => {
  dropNav.classList.toggle('hidden-nav')
}

menu.addEventListener('click', () => toggleNav());
