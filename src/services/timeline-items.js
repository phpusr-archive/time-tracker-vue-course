export function getTotalActivitySeconds(activityId, timelineItems) {
  return timelineItems.reduce((acc, it) => {
    if (it.activityId === activityId) {
      return acc + it.activitySeconds
    }
    return acc
  }, 0)
}
