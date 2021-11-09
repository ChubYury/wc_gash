const burger = document.getElementById('js-menu-trigger')
const nav = document.getElementsByClassName('navbar')[0]

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active')
  nav.classList.toggle('is-active')
})
