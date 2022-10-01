const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('.nav-mobile-links')
const menuNavLink = document.querySelectorAll('.link')
const navbarLink = document.querySelectorAll('.links')

const toogleNav = () => {
  menuNav.style.display === 'flex'
    ? (menuNav.style.display = 'none')
    : (menuNav.style.display = 'flex')
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
