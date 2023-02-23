import birianiOne from './assets/biriyani1.png'
import birianiTwo from './assets/biriyani2.png'
import birianiThree from './assets/biriyani3.png'

export function menuPage () {
  const contentID = document.querySelector('#content')

  contentID.replaceChildren()

  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu-container')

  const biriyaniOneDiv = document.createElement('div')
  biriyaniOneDiv.classList.add('biriyani')
  const biriyaniOneImage = document.createElement('img')
  biriyaniOneImage.src = birianiOne
  const biriyaniOneName = document.createElement('h2')
  biriyaniOneName.textContent = 'Bengali Bashmoti Biriyani'
  biriyaniOneDiv.appendChild(biriyaniOneImage)
  biriyaniOneDiv.appendChild(biriyaniOneName)

  const biriyaniTwoDiv = document.createElement('div')
  biriyaniTwoDiv.classList.add('biriyani')
  const biriyaniTwoImage = document.createElement('img')
  biriyaniTwoImage.src = birianiTwo
  const biriyaniTwoName = document.createElement('h2')
  biriyaniTwoName.textContent = 'Chickhen Biriyani'
  biriyaniTwoDiv.appendChild(biriyaniTwoImage)
  biriyaniTwoDiv.appendChild(biriyaniTwoName)

  const biriyaniThreeDiv = document.createElement('div')
  biriyaniThreeDiv.classList.add('biriyani')
  const biriyaniThreeImage = document.createElement('img')
  biriyaniThreeImage.src = birianiThree
  const biriyaniThreeName = document.createElement('h2')
  biriyaniThreeName.textContent = 'Premium Chickhen Biriyani'
  biriyaniThreeDiv.appendChild(biriyaniThreeImage)
  biriyaniThreeDiv.appendChild(biriyaniThreeName)

  const biriyaniFourDiv = document.createElement('div')
  biriyaniFourDiv.classList.add('biriyani')
  const biriyaniFourImage = document.createElement('img')
  biriyaniFourImage.src = '/src/assets/kichuri.png'
  const biriyaniFourName = document.createElement('h2')
  biriyaniFourName.textContent = 'Bengali Khicuri'
  biriyaniFourDiv.appendChild(biriyaniFourImage)
  biriyaniFourDiv.appendChild(biriyaniFourName)

  menuContainer.appendChild(biriyaniOneDiv)
  menuContainer.appendChild(biriyaniTwoDiv)
  menuContainer.appendChild(biriyaniThreeDiv)
  menuContainer.appendChild(biriyaniFourDiv)

  contentID.appendChild(menuContainer)
}
