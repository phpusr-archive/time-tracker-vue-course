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
import { IconName } from '../enums'
import type { Component } from 'vue'


export const ICONS: Record<IconName, Component> = {
  [IconName.CHART_BAR]: ChartBar,
  [IconName.CLOCK]: Clock,
  [IconName.LIST_BULLET]: ListBullet,
  [IconName.TRASH]: Trash,
  [IconName.X_MARK]: XMark,
  [IconName.PLUS]: Plus,
  [IconName.ARROW_PATH]: ArrowPath,
  [IconName.PAUSE]: Pause,
  [IconName.PLAY]: Play,
  [IconName.CLOCK_SOLID]: ClockSolid,
  [IconName.CHECK_CIRCLE_SOLID]: CheckCircleSolid
}
