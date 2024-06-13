import { createRouter, createWebHashHistory } from 'vue-router'
import TheLayout from './components/TheLayout.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheDayComplete from './pages/TheDayComplete.vue'
import { PageName } from './enums'


export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheLayout,
      children: [
        {
          path: '',
          redirect: `/${PageName.TIMELINE}`,
        },
        {
          path: PageName.TIMELINE,
          component: TheTimeline
        },
        {
          path: PageName.ACTIVITIES,
          component: TheActivities
        },
        {
          path: PageName.PROGRESS,
          component: TheProgress
        },
        {
          path: PageName.DAY_COMPLETE,
          component: TheDayComplete
        },
        {
          path: ':pathMatch(.*)*',
          redirect: `/${PageName.TIMELINE}`
        }
      ]
    }
  ]
})
