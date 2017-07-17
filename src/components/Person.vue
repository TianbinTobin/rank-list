<template>
  <div class="app">
    <div class="header">
      <div class="title">
        <span>个人成绩单</span>
      </div>
    </div>
    <div class="body">
      <div class="person">
        <div class="info">
          <div class="info_label fl">已掌握词汇量</div>
          <div class="info_text fr">332</div>
        </div>
        <div class="info">
          <div class="info_label fl">未掌握词汇量</div>
          <div class="info_text fr">33</div>
        </div>
        <div class="info">
          <div class="info_label fl">总学习时长</div>
          <div class="info_text fr">20小时13分25秒</div>
        </div>
        <div class="info">
          <div class="info_label fl">满分次数</div>
          <div class="info_text fr">24</div>
        </div>
        <div class="info">
          <div class="info_label fl">不及格次数</div>
          <div class="info_text fr">12</div>
        </div>
        <div class="info">
          <div class="info_label fl">未完成次数</div>
          <div class="info_text fr">3</div>
        </div>
        <div class="info">
          <div class="info_label fl">收到的赞</div>
          <div class="info_text fr">56</div>
        </div>
        <div class="info m_b">
          <div class="info_label fl">收到的警告</div>
          <div class="info_text fr">5</div>
        </div>
        <div class="info">
          <div class="info_label fl">正确率</div>
          <div class="info_text fr">65%</div>
        </div>
        <div class="info m_b">
          <div class="info_label fl">完成率</div>
          <div class="info_text fr">89%</div>
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
          <div class="info_text fr">354</div>
        </div>
        <div class="info m_b">
          <div class="info_label fl">胜利次数</div>
          <div class="info_text fr">186</div>
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
  //  import api from '../api/rank'
  export default {
    name: 'person',
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
//      api.getPersonInfo(this.query.studentId, this.query.classId, this.query.access_token).then(res => {
//        if (res.data.code === 0) {
//          this.data = res.data.result.data
//        }
//      })
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
    width: 50%;
    height: 100%;
    text-align: left;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .info_text {
    width: 50%;
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
    width: 60px;
    height: 48px;
    background: url("../assets/icon_qingtong@2x.png") no-repeat;
    background-size: cover;
  }

  .level_2 {
    width: 60px;
    height: 48px;
    background: url("../assets/icon_baiyin@2x.png") no-repeat;
    background-size: cover;
  }

  .level_3 {
    width: 70px;
    height: 44px;
    background: url("../assets/icon_huangjin@2x.png") no-repeat;
    background-size: cover;
  }

  .level_4 {
    width: 60px;
    height: 50px;
    background: url("../assets/icon_bojin@2x.png") no-repeat;
    background-size: cover;
  }

  .level_5 {
    width: 60px;
    height: 45px;
    background: url("../assets/icon_zuanshi@2x.png") no-repeat;
    background-size: cover;
  }

  .level_6 {
    width: 80px;
    height: 55px;
    background: url("../assets/icon_zuiqiang@2x.png") no-repeat;
    background-size: cover;
  }

  .info_level_label {
    vertical-align: middle;
  }

  .info .info_from {
    font-size: 1.2rem;
  }

  .m_b {
    margin-bottom: 10px;
  }
</style>
