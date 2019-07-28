class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = []
    let str = string.split(' ')
    
    str.forEach(word => {
      if (!exceptions.includes(word)) {
        arr.push(this.capitalize(word))
      } else {
        arr.push(word)
      }
    });
    str = arr.join(' ')
    return this.capitalize(str)
  }

}