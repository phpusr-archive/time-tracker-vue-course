import { APP_NAME } from './constants.js'

export function load() {

}

export function save(data) {
  localStorage.setItem(APP_NAME, JSON.stringify({
    ...data,
    date: new Date().toLocaleDateString()
  }))
}
