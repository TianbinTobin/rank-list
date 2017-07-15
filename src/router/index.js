import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vocabulary',
      name: 'Vocabulary',
      component: resolve => {
        require.ensure(['../components/Vocabulary.vue'], () => {
          resolve(require('../components/Vocabulary.vue'))
        })
      }
    },
    {
      path: '/this',
      name: 'this',
      component: resolve => {
        require.ensure(['../components/ThisWeekRank.vue'], () => {
          resolve(require('../components/ThisWeekRank.vue'))
        })
      }
    },
    {
      path: '/last',
      name: 'last',
      component: resolve => {
        require.ensure(['../components/LastWeekRank.vue'], () => {
          resolve(require('../components/LastWeekRank.vue'))
        })
      }
    }
  ]
})
