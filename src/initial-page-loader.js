export function initialPageLoader () {
  const contentID = document.querySelector('#content')

  contentID.replaceChildren()

  const mainContent = document.createElement('main')
  mainContent.classList.add('main-text')
  const mainContentDiv = document.createElement('div')
  const headerTitle = document.createElement('h1')
  headerTitle.textContent = 'Title'
  const headerSubtitle = document.createElement('h3')
  headerSubtitle.textContent = 'Subtitle'

  mainContentDiv.appendChild(headerTitle)
  mainContentDiv.appendChild(headerSubtitle)
  mainContent.appendChild(mainContentDiv)
  contentID.appendChild(mainContent)
}
