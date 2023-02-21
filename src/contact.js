export function contact () {
  const contentID = document.querySelector('#content')

  contentID.replaceChildren()

  const contactFormContainer = document.createElement('div')
  const phoneNumber = document.createElement('h1')
  phoneNumber.textContent = 'Phone-Number: +880123456789'

  const adressNumber = document.createElement('h2')
  adressNumber.textContent = 'Hollywood Boulevard 42, Los Angeles, USA'

  const locationImage = document.createElement('img')
  locationImage.src = '/src/assets/restaurant-location.png'

  contactFormContainer.appendChild(phoneNumber)
  contactFormContainer.appendChild(adressNumber)
  contactFormContainer.appendChild(locationImage)

  contentID.appendChild(contactFormContainer)
}
