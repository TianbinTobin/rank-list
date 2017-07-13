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
    }
  ]
})
