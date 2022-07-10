import { createRouter, createWebHistory } from 'vue-router'
import { SUPPORT_LOCALES } from '@/language/i18n'
import HomeView from '@/views/HomeView.vue'
import ThankYou from '@/views/ThankYou.vue'

function checkForLanguageInUrl(to) {
  if (!to.query.lang) {
    return router.push({ name: 'home', query: { lang: 'ro' } })
  }

  if (!SUPPORT_LOCALES.includes(to.query.lang)) {
    return router.push({ name: 'home', query: { lang: 'ro' } })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: [checkForLanguageInUrl]
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou,
      beforeEnter: [checkForLanguageInUrl]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: HomeView,
      beforeEnter: [checkForLanguageInUrl]
    }
  ]
})
export default router
