<template>
  <div class="app">
    <div class="header">
      <div class="title">
        <span>本周排行榜</span>
      </div>
    </div>
    <div class="body">
      <top-list></top-list>
      <rank-list></rank-list>
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
    name: 'this-week',
    data: function () {
      return {
        img: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png'
      }
    },
    components: {
      TopList,
      RankList
    },
    mounted () {
      this.query = this.$route.query
      api.getThisRankList(this.query.studentId, this.query.classId, this.query.access_token).then(res => {
        if (res.data.code === 0) {
          console.log(res.data)
        }
      })
    }
  }
</script>
