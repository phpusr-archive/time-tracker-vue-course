import { MAX_HOUR, MIN_HOUR, NAV_ITEMS } from './constants'
import { ICONS } from './services/icons'

export function isNavItemValid(navItem: any): boolean {
  return NAV_ITEMS.includes(navItem)
}

export function isSelectOptionsValid(options: any): boolean {
  return options.every(({ value, label }: any) =>
    (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
  )
}

export function isTimelineItemValid({ hour }: any): boolean {
  return isHourValid(hour)
}

export function isHourValid(hour: any): boolean {
  return isBetween(hour, MIN_HOUR, MAX_HOUR)
}

export function isActivityValid({ id, name, secondsToComplete }: any) {
  return isNotEmptyString(id) && isNotEmptyString(name) && isNumber(secondsToComplete)
}

export function isSelectValueValid(value: any): boolean {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isIconValid(icon: any): boolean {
  return Object.keys(ICONS).includes(icon)
}

// General validators

export function isNumberOrNull(value: any): boolean {
  return isNumber(value) || value === null
}

export function isBetween(value: any, min: any, max: any): boolean {
  return isNumber(value) && value >= min && value <= max
}

export function isNumber(value: any): boolean {
  return typeof value === 'number'
}

export function isNotEmptyString(value: any): boolean {
  return isString(value) && value.length > 0
}

export function isString(value: any): boolean {
  return typeof value === 'string'
}

export function isUndefinedOrNull(value: any): boolean {
  return value == null
}
