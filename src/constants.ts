import { generatePeriodSelectOptions } from './functions'
import type { NavItem } from './types'
import { IconName, PageName } from './enums'

export const LOCAL_STORAGE_KEY = 'time-tracker'

export const NAV_ITEMS: NavItem[] = [
  { title: 'Timeline', action: PageName.TIMELINE, icon: IconName.CLOCK },
  { title: 'Activities', action: PageName.ACTIVITIES, icon: IconName.LIST_BULLET },
  { title: 'Progress', action: PageName.PROGRESS, icon: IconName.CHART_BAR },
]
export const MIN_HOUR = 0
export const MAX_HOUR = 23
export const MILLISECONDS_IN_SECOND = 1000
export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions()

export const PRIMARY_BUTTON_TYPE = 'primary'
export const SUCCESS_BUTTON_TYPE = 'success'
export const WARNING_BUTTON_TYPE = 'warning'
export const NEUTRAL_BUTTON_TYPE = 'neutral'
export const DANGER_BUTTON_TYPE = 'danger'
