
export default function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}