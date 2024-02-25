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

