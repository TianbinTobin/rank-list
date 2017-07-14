<template>
  <div class="rank">
    <rank-list-item v-for="(item, index) in data" :key="item" :player="item" :index="index"></rank-list-item>
  </div>
</template>

<script>
  import RankListItem from './RankListItem.vue'
  export default {
    name: 'rank-list',
    data () {
      return {
        data: [
          {
            name: '田斌',
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            score: 158
          },
          {
            name: '田斌',
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            score: 158
          },
          {
            name: '田斌',
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            score: 158
          },
          {
            name: '田斌',
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            score: 158
          },
          {
            name: '田斌',
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            score: 158
          },
          {
            name: '田斌',
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            score: 158
          }
        ]
      }
    },
    components: {
      RankListItem
    }
  }
</script>

<style scoped>
  .rank {
    width: 100%;
  }
</style>
