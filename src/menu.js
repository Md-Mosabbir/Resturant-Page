import './menu.css'
export function menuPage () {
  const contentID = document.querySelector('#content')

  contentID.replaceChildren()

  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu-container')

  const biriyaniOneDiv = document.createElement('div')
  biriyaniOneDiv.classList.add('biriyani')
  const biriyaniOneImage = document.createElement('img')
  biriyaniOneImage.src = '/src/assets/DALL·E 2023-02-17 14.52.47 - An image of a bengali biriyani with a dark background for the homepage of a resturent website. .png'
  const biriyaniOneName = document.createElement('h2')
  biriyaniOneName.textContent = 'Bengali Bashmoti Biriyani'
  biriyaniOneDiv.appendChild(biriyaniOneImage)
  biriyaniOneDiv.appendChild(biriyaniOneName)

  const biriyaniTwoDiv = document.createElement('div')
  biriyaniTwoDiv.classList.add('biriyani')
  const biriyaniTwoImage = document.createElement('img')
  biriyaniTwoImage.src = '/src/assets/DALL·E 2023-02-17 14.53.24 - An image of a bengali biriyani with a dark background for the homepage of a resturent website. .png'
  const biriyaniTwoName = document.createElement('h2')
  biriyaniTwoName.textContent = 'Chickhen Biriyani'
  biriyaniTwoDiv.appendChild(biriyaniTwoImage)
  biriyaniTwoDiv.appendChild(biriyaniTwoName)

  const biriyaniThreeDiv = document.createElement('div')
  biriyaniThreeDiv.classList.add('biriyani')
  const biriyaniThreeImage = document.createElement('img')
  biriyaniThreeImage.src = '/src/assets/DALL·E 2023-02-17 14.54.00 - An image of a bengali biriyani with a dark background for the homepage of a resturent website 4K.  .png'
  const biriyaniThreeName = document.createElement('h2')
  biriyaniThreeName.textContent = 'Premium Chickhen Biriyani'
  biriyaniThreeDiv.appendChild(biriyaniThreeImage)
  biriyaniThreeDiv.appendChild(biriyaniThreeName)

  const biriyaniFourDiv = document.createElement('div')
  biriyaniFourDiv.classList.add('biriyani')
  const biriyaniFourImage = document.createElement('img')
  biriyaniFourImage.src = '/src/assets/DALL·E 2023-02-17 14.57.43 - different styles of biriyani with bengali essence for resturant menu page presentation that will attract anyone.png'
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
