import { initialPageLoader } from './initial-page-loader'
import { contact } from './contact'
import { menuPage } from './menu'

initialPageLoader()

// eslint-disable-next-line no-unused-vars
const tabSwitchingModule = (function () {
  const homeButton = document.getElementById('home')
  const menuButton = document.getElementById('menu')
  const contactButton = document.getElementById('contact')

  homeButton.addEventListener('click', initialPageLoader)
  menuButton.addEventListener('click', menuPage)
  contactButton.addEventListener('click', contact)
})()
