import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'
export const PAGE_DAY_COMPLETE = 'day-complete'
export const NAV_ITEMS = [
  { title: 'Timeline', action: PAGE_TIMELINE, icon: ClockIcon },
  { title: 'Activities', action: PAGE_ACTIVITIES, icon: ListBulletIcon },
  { title: 'Progress', action: PAGE_PROGRESS, icon: ChartBarIcon }
]
export const MIN_HOUR = 0
export const MAX_HOUR = 23
export const SECONDS_IN_HOUR = 3600

export const PRIMARY_BUTTON_TYPE = 'primary'
export const NEUTRAL_BUTTON_TYPE = 'neutral'
export const DANGER_BUTTON_TYPE = 'danger'
export const BUTTON_TYPES = [PRIMARY_BUTTON_TYPE, NEUTRAL_BUTTON_TYPE, DANGER_BUTTON_TYPE]
