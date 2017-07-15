<template>
  <div class="rank">
    <rank-list-item v-for="(item, index) in studentData" :key="item" :player="item" :index="index"></rank-list-item>
  </div>
</template>

<script>
  import RankListItem from './RankListItem.vue'
  export default {
    name: 'rank-list',
    data () {
      return {
        data: []
      }
    },
    props: ['studentData'],
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
