import {
  ArrowPathIcon as ArrowPath,
  ChartBarIcon as ChartBar,
  ClockIcon as Clock,
  ListBulletIcon as ListBullet,
  PauseIcon as Pause,
  PlayIcon as Play,
  PlusIcon as Plus,
  TrashIcon as Trash,
  XMarkIcon as XMark
} from '@heroicons/vue/24/outline'

import { CheckCircleIcon as CheckCircleSolid, ClockIcon as ClockSolid } from '@heroicons/vue/24/solid'

export const ICON_CHART_BAR = 'ChartBar'
export const ICON_CLOCK = 'Clock'
export const ICON_LIST_BULLET = 'ListBullet'
export const ICON_TRASH = 'Trash'
export const ICON_X_MARK = 'XMark'
export const ICON_PLUS = 'Plus'
export const ICON_ARROW_PATH = 'ArrowPath'
export const ICON_PAUSE = 'Pause'
export const ICON_PLAY = 'Play'
export const ICON_CLOCK_SOLID = 'ClockSolid'
export const ICON_CHECK_CIRCLE_SOLID = 'CheckCircleSolid'

export const ICONS = {
  [ICON_CHART_BAR]: ChartBar,
  [ICON_CLOCK]: Clock,
  [ICON_LIST_BULLET]: ListBullet,
  [ICON_TRASH]: Trash,
  [ICON_X_MARK]: XMark,
  [ICON_PLUS]: Plus,
  [ICON_ARROW_PATH]: ArrowPath,
  [ICON_PAUSE]: Pause,
  [ICON_PLAY]: Play,
  [ICON_CLOCK_SOLID]: ClockSolid,
  [ICON_CHECK_CIRCLE_SOLID]: CheckCircleSolid
}
