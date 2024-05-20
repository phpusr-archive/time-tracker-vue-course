import { BUTTON_TYPES, MAX_HOUR, MIN_HOUR, NAV_ITEMS } from './constants'
import { ICONS } from './services/icons'

export function isPageValid(page) {
  return NAV_ITEMS.some(it => it.action === page)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

export function isSelectOptionsValid(options) {
  return options.every(({ value, label }) =>
    (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
  )
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isHourValid(hour) {
  return isBetween(hour, MIN_HOUR, MAX_HOUR)
}

export function isActivityValid({ id, name, secondsToComplete }) {
  return isNotEmptyString(id) && isNotEmptyString(name) && isNumber(secondsToComplete)
}

export function isButtonTypeValid(value) {
  return BUTTON_TYPES.includes(value)
}

export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value)
}

export function isIconValid(icon) {
  return Object.keys(ICONS).includes(icon)
}

// General validators

export function isNumberOrNull(value) {
  return isNumber(value) || value === null
}

export function isBetween(value, min, max) {
  return isNumber(value) && value >= min && value <= max
}

export function isNumber(value) {
  return typeof value === 'number'
}

export function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function isString(value) {
  return typeof value === 'string'
}

export function isUndefinedOrNull(value) {
  return value == null
}

export function isUndefined(value) {
  return value === undefined
}
