import { MAX_HOUR, MIN_HOUR } from './constants.js'

export function isSelectOptionsValid(options) {
  return options.every(({ value, label }) =>
    isNumber(value) && isString(label)
  )
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isHourValid(hour) {
  return isBetween(hour, MIN_HOUR, MAX_HOUR)
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

export function isString(value) {
  return typeof value === 'string'
}

export function isUndefinedOrNull(value) {
  return value == null
}
