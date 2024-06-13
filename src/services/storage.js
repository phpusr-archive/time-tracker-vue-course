import { LOCAL_STORAGE_KEY } from '../constants'
import { today } from './time'

export function load() {
  const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY)
  return serializedState ? JSON.parse(serializedState) : {}
}

export function save(state) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
    ...state,
    lastActiveAt: today().toISOString()
  }))
}
