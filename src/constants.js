import { generatePeriodSelectOptions } from './functions'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'
export const PAGE_DAY_COMPLETE = 'day-complete'

export const NAV_ITEMS = [
  { title: 'Timeline', action: PAGE_TIMELINE, icon: 'Clock' },
  { title: 'Activities', action: PAGE_ACTIVITIES, icon: 'ListBullet' },
  { title: 'Progress', action: PAGE_PROGRESS, icon: 'ChartBar' }
]
export const MIN_HOUR = 0
export const MAX_HOUR = 23
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions()

export const PRIMARY_BUTTON_TYPE = 'primary'
export const SUCCESS_BUTTON_TYPE = 'success'
export const WARNING_BUTTON_TYPE = 'warning'
export const NEUTRAL_BUTTON_TYPE = 'neutral'
export const DANGER_BUTTON_TYPE = 'danger'

export const BUTTON_TYPES = [
  PRIMARY_BUTTON_TYPE, SUCCESS_BUTTON_TYPE, WARNING_BUTTON_TYPE, NEUTRAL_BUTTON_TYPE, DANGER_BUTTON_TYPE
]
