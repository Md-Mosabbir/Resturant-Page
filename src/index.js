import { initialPageLoader } from './initial-page-loader'
import { contact } from './contact'
import { menuPage } from './menu'
import './main.css'
// pictures
import './assets/DALL·E 2023-02-17 14.52.47 - An image of a bengali biriyani with a dark background for the homepage of a resturent website. .png'
import './assets/DALL·E 2023-02-17 14.53.24 - An image of a bengali biriyani with a dark background for the homepage of a resturent website. .png'
import './assets/DALL·E 2023-02-17 14.54.00 - An image of a bengali biriyani with a dark background for the homepage of a resturent website 4K.  .png'

import './assets/DALL·E 2023-02-17 14.57.43 - different styles of biriyani with bengali essence for resturant menu page presentation that will attract anyone.png'

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
