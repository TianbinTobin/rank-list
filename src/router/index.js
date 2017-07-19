import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vocabulary',
      name: 'vocabulary',
      component: resolve => {
        require.ensure(['../components/Vocabulary.vue'], () => {
          resolve(require('../components/Vocabulary.vue'))
        }, 'vocabulary')
      }
    },
    {
      path: '/current',
      name: 'current',
      component: resolve => {
        require.ensure(['../components/ThisWeekRank.vue'], () => {
          resolve(require('../components/ThisWeekRank.vue'))
        }, 'current')
      }
    },
    {
      path: '/last',
      name: 'last',
      component: resolve => {
        require.ensure(['../components/LastWeekRank.vue'], () => {
          resolve(require('../components/LastWeekRank.vue'))
        }, 'last')
      }
    },
    {
      path: '/person',
      name: 'person',
      component: resolve => {
        require.ensure(['../components/Person.vue'], () => {
          resolve(require('../components/Person.vue'))
        }, 'person')
      }
    }
  ]
})
