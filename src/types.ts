import type { IconName, PageName } from './enums'

export type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;

export type ActivitySelectOption = SelectOption

export type PeriodSelectOption = SelectOption<number>

export interface AppState {
  activities: Activity[]
  timelineItems: TimelineItem[]
}

export interface Activity {
  id: string
  name: string
  secondsToComplete: number
}

export interface SelectOption<T = string> {
  label: string
  value: T
}

export interface TimelineItem {
  hour: Hour
  activityId: Activity['id'] | null
  activitySeconds: number
  stopwatch: NodeJS.Timeout | null
}

export interface NavItem {
  title: string
  action: PageName
  icon: IconName
}

export interface State {
  timelineItems?: TimelineItem[]
  activities?: Activity[]
  lastActiveAt?: Date
}
