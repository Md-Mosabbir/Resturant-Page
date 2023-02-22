import { initialPageLoader } from './initial-page-loader'
import { contact } from './contact'
import { menuPage } from './menu'
import './main.css'

initialPageLoader()
// eslint-disable-next-line no-unused-vars
const tabSwitchingModule = (function () {
  const logo = document.querySelector('.logo')
  const homeButton = document.getElementById('home')
  const menuButton = document.getElementById('menu')
  const contactButton = document.getElementById('contact')

  homeButton.addEventListener('click', initialPageLoader)
  logo.addEventListener('click', initialPageLoader)
  menuButton.addEventListener('click', menuPage)
  contactButton.addEventListener('click', contact)
})()
