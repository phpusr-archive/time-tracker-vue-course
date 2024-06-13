import { LOCAL_STORAGE_KEY } from '../constants'
import { today } from './time'
import type { State } from '../types'

export function load(): State {
  const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY)
  return serializedState ? JSON.parse(serializedState) : {}
}

export function save(state: State): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
    ...state,
    lastActiveAt: today().toISOString()
  }))
}
