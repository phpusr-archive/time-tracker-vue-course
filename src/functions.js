
export function generateTimelineItems() {
  const timelineItems = []
  const HOURS_IN_DAY = 24
  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }
  return timelineItems
}
