import {
  DANGER_BUTTON_TYPE,
  NEUTRAL_BUTTON_TYPE,
  PAGE_ACTIVITIES,
  PAGE_DAY_COMPLETE,
  PAGE_PROGRESS,
  PAGE_TIMELINE,
  PRIMARY_BUTTON_TYPE,
  SUCCESS_BUTTON_TYPE,
  WARNING_BUTTON_TYPE
} from './constants'

export type PageName = typeof PAGE_TIMELINE | typeof PAGE_ACTIVITIES | typeof PAGE_PROGRESS | typeof PAGE_DAY_COMPLETE

export type ButtonType = typeof PRIMARY_BUTTON_TYPE | typeof SUCCESS_BUTTON_TYPE | typeof WARNING_BUTTON_TYPE | typeof NEUTRAL_BUTTON_TYPE | typeof DANGER_BUTTON_TYPE

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
  hour: number
  activityId: Activity['id'] | null
  activitySeconds: number
  stopwatch: number | null
}

export interface NavItem {
  title: string
  action: PageName
  icon: string
}

export interface State {
  timelineItems?: TimelineItem[]
  activities?: Activity[]
  lastActiveAt?: Date
}
