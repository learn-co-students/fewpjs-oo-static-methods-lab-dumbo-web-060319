class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(string) {
    let words = string.split(' ')
    if (words[0].length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    } else {
      words[0].toUpperCase()
    }

    for (let i = 1; i < words.length; i++) {
      if (words[i] != 'the' && words[i] !== 'a' && words[i] !== 'an' && words[i] !== 'but' && words[i] !== 'of' && words[i] !== 'and' && words[i] !== 'for' && words[i] !== 'at' && words[i] !== 'by' && words[i] !== 'from') {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
      }
    }

    return words.join(' ')
  }

}