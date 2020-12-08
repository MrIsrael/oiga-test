export const PlanetImages = (planetName) => {
  let imageURL

  switch (planetName) {
    case 'Tatooine':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png'
      break
    case 'Alderaan':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg'
      break
    case 'Yavin IV':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/a/a0/Eaw_Yavin4.jpg'
      break
    case 'Hoth':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png'
      break
    case 'Dagobah':
      imageURL = 'https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg'
      break
    case 'Bespin':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png'
      break
    case 'Endor':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png'
      break
    case 'Naboo':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/5/50/Naboo.jpg'
      break
    case 'Coruscant':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/8/84/CoruscantGlobeE1.png'
      break
    case 'Kamino':
      imageURL = 'https://static.wikia.nocookie.net/esstarwars/images/5/52/Kamino-DB.png'
      break
    default: break
  }

  return imageURL
}
