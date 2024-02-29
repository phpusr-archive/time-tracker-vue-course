import { HOURS_IN_DAY } from './constants.js'

export function isSelectOptionValid(options) {
  return options.every(({ value, label }) =>
    typeof value === 'number' && typeof label === 'string'
  )
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY
}
