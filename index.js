class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(string) {
    let words = string.split(' ')

    for(let word of words) {
      if (word !== 'the' || word !== 'a' || word !== 'an' || word !== 'but' || word !== 'of' || word !== 'and' || word !== 'for' || word !== 'at' || word !== 'by' || word !== 'from') {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
    }

    if (word[0].length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    } else {
      words[0].toUpperCase()
    }
    return words.join(' ')
  }
}