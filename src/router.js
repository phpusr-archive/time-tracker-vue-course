import TheLayout from './components/TheLayout.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheDayComplete from './pages/TheDayComplete.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_DAY_COMPLETE } from './constants'
import { createRouter, createWebHashHistory } from 'vue-router'


export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheLayout,
      children: [
        {
          path: '',
          redirect: `/${PAGE_TIMELINE}`,
        },
        {
          path: PAGE_TIMELINE,
          component: TheTimeline
        },
        {
          path: PAGE_ACTIVITIES,
          component: TheActivities
        },
        {
          path: PAGE_PROGRESS,
          component: TheProgress
        },
        {
          path: PAGE_DAY_COMPLETE,
          component: TheDayComplete
        },
        {
          path: ':pathMatch(.*)*',
          redirect: `/${PAGE_TIMELINE}`
        }
      ]
    }
  ]
})
