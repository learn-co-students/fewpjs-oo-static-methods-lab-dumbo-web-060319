class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str) {
    const arrayOfStrings = str.split(' ');
    
  }

}