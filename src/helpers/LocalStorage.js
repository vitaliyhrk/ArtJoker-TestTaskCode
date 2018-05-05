class LocalStorage {
  static getItem(key) {
    const items = localStorage.getItem(key);
    return (items === null) ? undefined : JSON.parse(items);
  }
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static remItem(key) {
    localStorage.removeItem(key);
  }
  static clearStorage() {
    localStorage.clear();
  }
}

export default LocalStorage;
