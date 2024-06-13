import { ICONS } from './services/icons'

export function isIconValid(icon: any): boolean {
  return Object.keys(ICONS).includes(icon)
}

// General validators

export function isUndefinedOrNull(value: any): boolean {
  return value == null
}
