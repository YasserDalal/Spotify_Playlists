

export default function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}