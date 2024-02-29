import { MAX_HOUR, MIN_HOUR } from './constants.js'

export function isSelectOptionsValid(options) {
  return options.every(({ value, label }) =>
    typeof value === 'number' && typeof label === 'string'
  )
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIN_HOUR && hour <= MAX_HOUR
}
