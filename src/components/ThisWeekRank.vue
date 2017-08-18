<template>
  <div class="app">
    <div class="header" v-show="this.$root.showTitle">
      <div class="title">
        <span>本周排行榜</span>
      </div>
    </div>
    <div class="body" v-if="data.length > 0">
      <top-list :studentData="data"></top-list>
      <rank-list :studentData="data"></rank-list>
    </div>
    <!--<div class="footer">-->
      <!--<button>查看我的排行</button>-->
    <!--</div>-->
  </div>
</template>

<script>
  import TopList from './TopList.vue'
  import RankList from './RankList.vue'
  import api from '../api/rank'

  export default {
    name: 'current',
    data: function () {
      return {
        data: [],
        date: [
          {
            id: 1,
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            studentName: '田斌',
            number: 238
          },
          {
            id: 2,
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            studentName: '宇文化及',
            number: 168
          },
          {
            id: 3,
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            studentName: '田斌',
            number: 146
          },
          {
            id: 4,
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            studentName: '田斌',
            number: 135
          },
          {
            id: 5,
            photo: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png',
            studentName: '田斌',
            number: 135
          }
        ]
      }
    },
    components: {
      TopList,
      RankList
    },
    mounted () {
      this.query = this.$route.query
      document.title = '本周排行榜'
      // 调用本周排行榜接口
      api.getThisRankList(this.query.studentId, this.query.classId, this.query.access_token).then(res => {
        if (res.data.code === 0) {
          this.data = res.data.result.data
        }
      })
    }
  }
</script>
