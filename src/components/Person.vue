<template>
  <div class="app">
    <div class="header">
      <div class="title">
        <span>个人成绩单</span>
      </div>
    </div>
    <div class="body" v-if="data !== ''">
      <div class="person">
        <div class="info">
          <div class="info_label fl">已掌握词汇量</div>
          <div class="info_text fr">{{data.masterVocabulary}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">未掌握词汇量</div>
          <div class="info_text fr">{{data.noMasterVocabulary}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">总学习时长</div>
          <div class="info_text fr">{{timeSum}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">满分次数</div>
          <div class="info_text fr">{{data.fullMarkNum}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">不及格次数</div>
          <div class="info_text fr">{{data.failNum}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">未完成次数</div>
          <div class="info_text fr">{{data.unfinishedNum}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">收到的赞</div>
          <div class="info_text fr">{{data.praiseNum}}</div>
        </div>
        <div class="info m_b_10">
          <div class="info_label fl">收到的警告</div>
          <div class="info_text fr">{{data.warningNum}}</div>
        </div>
        <div class="info">
          <div class="info_label fl">正确率</div>
          <div class="info_text fr">{{data.rightRatio}}%</div>
        </div>
        <div class="info m_b_10">
          <div class="info_label fl">完成率</div>
          <div class="info_text fr">{{data.completeRatio}}%</div>
        </div>
        <div class="info">
          <div class="info_label fl">PK段位</div>
          <div class="info_text fr">
            <i class="info_level level_6"></i>
            <span class="info_level_label">黄金5</span>
          </div>
        </div>
        <div class="info">
          <div class="info_label fl">PK次数</div>
          <div class="info_text fr">{{data.pkNum}}</div>
        </div>
        <div class="info m_b_10">
          <div class="info_label fl">胜利次数</div>
          <div class="info_text fr">{{data.victoryNum}}</div>
        </div>
        <div class="info">
          <span class="info_from">此数据来源于 —— 《Tank English》</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <button>查看我的成绩单</button>
    </div>
  </div>
</template>

<script>
  import TopList from './TopList.vue'
  import RankList from './RankList.vue'
  import api from '../api/rank'

  export default {
    name: 'person',
    data: function () {
      return {
        data: '',
        date: {
          completeRatio: 8,
          danId: 0,
          failNum: 0,
          fullMarkNum: 0,
          masterVocabulary: 0,
          noMasterVocabulary: 0,
          pkNum: 2,
          praiseNum: 4,
          rightRatio: 120,
          studentId: 3,
          timeSum: 11698708,
          unfinishedNum: 5,
          victoryNum: 0,
          warningNum: 0,
          yesterdayScore: 10
        }
      }
    },
    computed: {
      timeSum () {
        let hours = 0
        let minutes = 0
        let seconds = 0
        let remainTime = 0
        let time = ''
        if (Math.floor(this.data.timeSum / 3600000) > 1) {
          hours = Math.floor(this.data.timeSum / 3600000)
        }
        remainTime = this.data.timeSum % 3600000
        if (Math.floor(remainTime / 60000) > 1) {
          minutes = Math.floor(remainTime / 60000)
        }
        remainTime = remainTime % 60000
        if (Math.floor(remainTime / 1000) > 1) {
          seconds = Math.floor(remainTime / 1000)
        }
        if (hours > 0) {
          time += hours + '小时'
        }
        if (minutes > 0) {
          time += minutes + '分'
        }
        if (seconds > 0) {
          time += seconds + '秒'
        }
        return time
      }
    },
    components: {
      TopList,
      RankList
    },
    mounted () {
      this.data = this.date
      this.query = this.$route.query
      // 调用个人成绩单接口
      api.getPersonInfo(this.query.studentId, this.query.access_token).then(res => {
        if (res.data.code === 0) {
          this.data = res.data.result.data
        }
      })
    }
  }
</script>

<style scoped>
  .person {
    width: 100%;
    background: #F4F7FB;
  }

  .info {
    width: 100%;
    background: #FEFEFE;
    margin-bottom: 1px;
    height: 6rem;
    line-height: 6rem;
    font-size: 1.6rem;
    color: #747578;
    letter-spacing: 0;
    text-align: center;
  }

  .info_label {
    width: 40%;
    height: 100%;
    text-align: left;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .info_text {
    width: 60%;
    height: 100%;
    text-align: right;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .info_level {
    display: inline-block;
    margin-right: 15px;
    vertical-align: middle;
  }

  .level_1 {
    width: 6rem;
    height: 4.8rem;
    background: url("../assets/icon_qingtong@2x.png") no-repeat;
    background-size: cover;
  }

  .level_2 {
    width: 6rem;
    height: 4.8rem;
    background: url("../assets/icon_baiyin@2x.png") no-repeat;
    background-size: cover;
  }

  .level_3 {
    width: 7rem;
    height: 4.4rem;
    background: url("../assets/icon_huangjin@2x.png") no-repeat;
    background-size: cover;
  }

  .level_4 {
    width: 6rem;
    height: 5rem;
    background: url("../assets/icon_bojin@2x.png") no-repeat;
    background-size: cover;
  }

  .level_5 {
    width: 6rem;
    height: 4.5rem;
    background: url("../assets/icon_zuanshi@2x.png") no-repeat;
    background-size: cover;
  }

  .level_6 {
    width: 8rem;
    height: 5.5rem;
    background: url("../assets/icon_zuiqiang@2x.png") no-repeat;
    background-size: cover;
  }

  .info_level_label {
    vertical-align: middle;
  }

  .info .info_from {
    font-size: 1.2rem;
  }

  .m_b_10 {
    margin-bottom: 10px;
  }
</style>
