export const RandomMessages = (num) => {
  let message

  switch (num) {
    case 1:
      message = 'Planet creation form submitted successfully!'
      break
    case 2:
      message = 'There was an error sending data to Planet creator machine...'
      break
    case 3:
      message = 'Data just sent. Honestly, I dislike about your terrain selection...'
      break
    case 4:
      message = 'Options sent to Planet recipe maker. Your choice will apply to Planet X.'
      break
    case 5:
      message = 'Solar System not found! Creating rogue planet...'
      break
    default: break
  }

  return message
}
