export function initialPageLoader () {
  const contentID = document.getElementById('content')
  // Making the navigation bar
  const navigationContainer = document.createElement('div')
  navigationContainer.classList.add('nav')
  // Nav elements gonna be flexed upon
  const navigationLogo = document.createElement('div')
  navigationLogo.classList.add('logo')
  const img = document.createElement('img')

  navigationLogo.appendChild(img)
  const navigationLinks = document.createElement('div')
  navigationLinks.classList.add('navigation-options')
  const navigationList = document.createElement('ul')

  const navigationLineHome = document.createElement('li')
  const navigationLinksHome = document.createElement('a')
  navigationLinksHome.href = '#'
  navigationLinksHome.textContent = 'Home'
  navigationLineHome.appendChild(navigationLinksHome)

  const navigationLineMenu = document.createElement('li')
  const navigationLinksMenu = document.createElement('a')
  navigationLinksMenu.href = '#'
  navigationLinksMenu.textContent = 'Menu'
  navigationLineMenu.appendChild(navigationLinksMenu)

  const navigationLineContact = document.createElement('li')
  const navigationLinksContact = document.createElement('a')
  navigationLinksContact.href = '#'
  navigationLinksContact.textContent = 'Contact'
  navigationLineContact.appendChild(navigationLinksContact)

  navigationList.appendChild(navigationLineHome)
  navigationList.appendChild(navigationLineMenu)
  navigationList.appendChild(navigationLineContact)

  navigationLinks.appendChild(navigationList)

  navigationContainer.appendChild(navigationLogo)
  navigationContainer.appendChild(navigationLinks)
  contentID.appendChild(navigationContainer)
  // ----------------------------------------------------

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
