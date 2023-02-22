import './initial-page-loader.css'
export function initialPageLoader () {
  const contentID = document.querySelector('#content')

  contentID.replaceChildren()

  const mainContent = document.createElement('main')
  mainContent.classList.add('main-text')
  const mainContentDiv = document.createElement('div')
  const headerTitle = document.createElement('h1')
  headerTitle.textContent = 'The Bengali Hub'
  const headerSubtitle = document.createElement('h3')
  headerSubtitle.textContent = 'A Vhalo Experience'

  const exploreButton = document.createElement('button')
  exploreButton.textContent = 'Explore'

  mainContentDiv.appendChild(headerTitle)
  mainContentDiv.appendChild(headerSubtitle)
  mainContentDiv.appendChild(exploreButton)
  mainContent.appendChild(mainContentDiv)
  contentID.appendChild(mainContent)
}
