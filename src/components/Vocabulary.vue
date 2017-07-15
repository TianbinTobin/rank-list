<template>
  <div class="app">
    <div class="header">
      <div class="title">
        <span>词汇量排行榜</span>
      </div>
    </div>
    <div class="body" v-if="data.length > 0">
      <top-list :studentData="data"></top-list>
      <rank-list :studentData="data"></rank-list>
    </div>
    <div class="footer">
      <button>查看我的排行</button>
    </div>
  </div>
</template>

<script>
  import TopList from './TopList.vue'
  import RankList from './RankList.vue'
  import api from '../api/rank'
  export default {
    name: 'vocabulary',
    data: function () {
      return {
        data: []
      }
    },
    components: {
      TopList,
      RankList
    },
    mounted () {
      this.query = this.$route.query
      api.getWordRankList(this.query.studentId, this.query.classId, this.query.access_token).then(res => {
        if (res.data.code === 0) {
          this.data = res.data.result.data
        }
      })
    }
  }
</script>
