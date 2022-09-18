const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('.nav-mobile-links')
const menuNavLink = document.querySelectorAll('.link')
const navbarLink = document.querySelectorAll('.link')

const toogleNav = () => {
  menuNav.style.display === 'none'
    ? (menuNav.style.display = 'flex')
    : (menuNav.style.display = 'none')
}

menuBtn.addEventListener('click', toogleNav)

navbarLink.forEach((link) => {
  link.addEventListener('click', () => {
    navbarLink.forEach((l) => (l.style.color = '#555454'))
    link.style.color = '#000'
  })
})

menuNavLink.forEach((link) => {
  link.addEventListener('click', () => {
    menuNavLink.forEach((l) => (l.style.color = '#555454'))
    link.style.color = '#000'
    toogleNav()
  })
})
