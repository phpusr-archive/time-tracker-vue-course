import { APP_NAME } from './constants'
import { today } from './time'

export function load() {
  const serializedState = localStorage.getItem(APP_NAME)
  return serializedState ? JSON.parse(serializedState) : {}
}

export function save(state) {
  localStorage.setItem(APP_NAME, JSON.stringify({
    ...state,
    lastActiveAt: today().toISOString()
  }))
}
