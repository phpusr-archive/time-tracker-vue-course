import type { PageName } from './types'

export interface AppState {
  activities: Activity[]
  timelineItems: TimelineItem[]
}

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface ActivitySelectOption {
  label: string
  value: string
}

export interface PeriodSelectOption {
  label: string
  value: number
}

export interface TimelineItem {
  hour: number
  activityId: string | null
  activitySeconds: number
  stopwatch: number | null
}

export interface NavItem {
  title: string
  action: PageName
  icon: any
}

export enum ProgressColorClass {
  RED = 'bg-red-500',
  YELLOW = 'bg-yellow-500',
  BLUE = 'bg-blue-500',
  GREEN = 'bg-green-500'
}
