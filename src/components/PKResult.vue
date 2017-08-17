<template>
  <div class="app" v-if="data !== null">
    <div class="result_header">
      <div class="result_header_box clearfix">
        <div class="result_player fl">
          <div class="player_label" :class="userResult"></div>
          <div class="player_logo">
            <img src="../assets/player_0_logo.png" :src="userPhoto">
          </div>
          <div class="player_info">
            <div class="player_name">{{data.myUserStudentPk.realName ? data.myUserStudentPk.realName : data.myUserStudentPk.accountName}}</div>
            <div class="player_score">{{data.myPkDetail.score}}</div>
          </div>
        </div>
        <div class="icon_pk_box fl">
          <div class="icon_pk"></div>
        </div>
        <div class="result_player fl">
          <div class="player_label" :class="friendResult"></div>
          <div class="player_logo">
            <img src="../assets/player_0_logo.png" :src="friendPhoto">
          </div>
          <div class="player_info">
            <div class="player_name">{{data.friendUserStudentPk.realName ? data.friendUserStudentPk.realName : data.friendUserStudentPk.accountName}}</div>
            <div class="player_score">{{data.friendPkDetail.score}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="result_body">
      <div class="result_progress">
        <div class="fl result_p_l">
          <div class="result_p_l_t">{{data.myPkDetail.rightScore}}</div>
          <div class="fr result_p_i" :class="userWinScoreCss" :style="{width: userWinScoreWidth}"></div>
        </div>
        <div class="fl result_p_icon icon_right">
          <div class="result_p_icon_label">正确得分</div>
        </div>
        <div class="fl result_p_r">
          <div class="result_p_r_t">{{data.friendPkDetail.rightScore}}</div>
          <div class="fl result_p_i" :class="friendWinScoreCss" :style="{width: friendWinScoreWidth}"></div>
        </div>
      </div>
      <div class="result_progress">
        <div class="fl result_p_l">
          <div class="result_p_l_t">{{data.myPkDetail.criticalScore}}</div>
          <div class="fr result_p_i" :class="userCritScoreCss" :style="{width: userCritScoreWidth}"></div>
        </div>
        <div class="fl result_p_icon icon_crit">
          <div class="result_p_icon_label">暴击得分</div>
        </div>
        <div class="fl result_p_r">
          <div class="result_p_r_t">{{data.friendPkDetail.criticalScore}}</div>
          <div class="fl result_p_i" :class="friendCritScoreCss" :style="{width: friendCritScoreWidth}"></div>
        </div>
      </div>
      <div class="result_progress">
        <div class="fl result_p_l">
          <div class="result_p_l_t">{{data.myPkDetail.timeScore}}</div>
          <div class="fr result_p_i" :class="userTimeScoreCss" :style="{width: userTimeScoreWidth}"></div>
        </div>
        <div class="fl result_p_icon icon_times">
          <div class="result_p_icon_label">时间得分</div>
        </div>
        <div class="fl result_p_r">
          <div class="result_p_r_t">{{data.friendPkDetail.timeScore}}</div>
          <div class="fl result_p_i" :class="friendTimeScoreCss" :style="{width: friendTimeScoreWidth}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../api/rank'

  export default {
    name: 'result',
    data () {
      return {
        MAX_RIGHT_SCORE: 400,
        MAX_CRIT_SCORE: 43,
        MAX_TIME_SCORE: 40,
        DEFAULT_LOGO: require('../assets/player_0_logo.png'),
        data: null,
        date: {
          'myUserStudentPk': {
            'accountName': '18366620035',
            'photo': 'http://192.168.0.203/image/head/2017/06/ff8080815caa56b5015caa56b5830000.jpg',
            'realName': '张超'
          },
          'friendPkDetail': {
            'roundResult': 1,
            'criticalNum': 0,
            'challengeTime': '1500606502010',
            'score': 170,
            'examNum': 19,
            'rightNum': 2,
            'wrongNum': 0,
            'rightScore': 400,
            'criticalScore': 12,
            'timeScore': 15
          },
          'myPkDetail': {
            'roundResult': 0,
            'criticalNum': 1,
            'challengeTime': null,
            'score': 176,
            'examNum': 19,
            'rightNum': 3,
            'rightScore': 350,
            'criticalScore': 2,
            'timeScore': 14
          },
          'friendUserStudentPk': {
            'accountName': '金花娘',
            'photo': 'http://192.168.0.203:80/image/robot/12.png',
            'realName': '邓般玚'
          }
        }
      }
    },
    computed: {
      userPhoto () {
        if (this.data && this.data.myUserStudentPk && this.data.myUserStudentPk.photo) {
          return this.data.myUserStudentPk.photo
        } else {
          return this.DEFAULT_LOGO
        }
      },
      friendPhoto () {
        if (this.data && this.data.friendUserStudentPk && this.data.friendUserStudentPk.photo) {
          return this.data.friendUserStudentPk.photo
        } else {
          return this.DEFAULT_LOGO
        }
      },
      userResult () {
        if (this.data.myPkDetail.roundResult === 1) {
          return 'win'
        } else if (this.data.myPkDetail.roundResult === -2) {
          return 'tie'
        } else {
          return 'fail'
        }
      },
      friendResult () {
        if (this.data.friendPkDetail.roundResult === 1) {
          return 'win'
        } else if (this.data.friendPkDetail.roundResult === -2) {
          return 'tie'
        } else {
          return 'fail'
        }
      },
      userWinScoreCss () {
        if (this.data.myPkDetail.rightScore < this.data.friendPkDetail.rightScore) {
          return 'result_p_i_f'
        } else {
          return 'result_p_i_w'
        }
      },
      friendWinScoreCss () {
        if (this.data.friendPkDetail.rightScore < this.data.myPkDetail.rightScore) {
          return 'result_p_i_f'
        } else {
          return 'result_p_i_w'
        }
      },
      userCritScoreCss () {
        if (this.data.myPkDetail.criticalScore < this.data.friendPkDetail.criticalScore) {
          return 'result_p_i_f'
        } else {
          return 'result_p_i_w'
        }
      },
      friendCritScoreCss () {
        if (this.data.friendPkDetail.criticalScore < this.data.myPkDetail.criticalScore) {
          return 'result_p_i_f'
        } else {
          return 'result_p_i_w'
        }
      },
      userTimeScoreCss () {
        if (this.data.myPkDetail.timeScore < this.data.friendPkDetail.timeScore) {
          return 'result_p_i_f'
        } else {
          return 'result_p_i_w'
        }
      },
      friendTimeScoreCss () {
        if (this.data.friendPkDetail.timeScore < this.data.myPkDetail.timeScore) {
          return 'result_p_i_f'
        } else {
          return 'result_p_i_w'
        }
      },
      userWinScoreWidth () {
        return (this.data.myPkDetail.rightScore / this.MAX_RIGHT_SCORE * 100) + '%'
      },
      friendWinScoreWidth () {
        return (this.data.friendPkDetail.rightScore / this.MAX_RIGHT_SCORE * 100) + '%'
      },
      userCritScoreWidth () {
        return (this.data.myPkDetail.criticalScore / this.MAX_CRIT_SCORE * 100) + '%'
      },
      friendCritScoreWidth () {
        return (this.data.friendPkDetail.criticalScore / this.MAX_CRIT_SCORE * 100) + '%'
      },
      userTimeScoreWidth () {
        return (this.data.myPkDetail.timeScore / this.MAX_TIME_SCORE * 100) + '%'
      },
      friendTimeScoreWidth () {
        return (this.data.friendPkDetail.timeScore / this.MAX_TIME_SCORE * 100) + '%'
      }
    },
    mounted () {
      this.query = this.$route.query
      document.title = '战绩详情'
      // 调用个人成绩单接口
      api.getPKResult(this.query.studentId, this.query.friendId, this.query.challengeTime, this.query.access_token).then(res => {
        if (res && res.data.code === 0) {
          this.data = res.data.result.data
        }
      })
    }
  }
</script>

<style scoped>
  .result_header {
    width: 100%;
    height: 25rem;
    padding: 3rem 1rem;
    box-sizing: border-box;
    background: url("../assets/bj_pk@2x.png");
  }

  .result_header_box {
    width: 30rem;
    height: 100%;
    margin: 0 auto;
  }

  .result_player {
    width: 9rem;
    height: 100%;
  }

  .icon_pk_box {
    width: 10.5rem;
    padding-top: 2.5rem;
    margin-right: 1.5rem;
    box-sizing: border-box;
  }

  .icon_pk {
    width: 7.62rem;
    height: 11.16rem;
    background: url("../assets/icon_vs@2x.png") no-repeat;
    background-size: contain;
    margin: 0 auto;
  }

  .player_label {
    width: 100%;
    height: 4rem;
  }

  .player_logo {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
  }

  .player_logo img {
    width: 100%;
    height: 100%;
  }

  .player_info {
    width: 100%;
    text-align: center;
    color: #ffffff;
  }

  .player_name {
    width: 100%;
    font-size: 1.4rem;
    margin-top: 1rem;
  }

  .player_score {
    width: 100%;
    font-size: 2.4rem;
    margin-top: 1rem;
    font-weight: 800;
  }

  .win {
    background: url("../assets/icon_win.png") no-repeat;
    background-size: contain;
  }

  .fail {
    background: url("../assets/icon_fail.png") no-repeat;
    background-size: contain;
  }

  .tie {
    background: url("../assets/icon_pingju.png") no-repeat;
    background-size: contain;
  }

  .result_body {
    width: 100%;
  }

  .result_progress {
    width: 85%;
    height: 5rem;
    box-sizing: border-box;
    margin: 3rem auto 0;
    padding: 2.1rem 0;
    position: relative;
  }

  .result_p_l {
    width: 50%;
    height: 0.8rem;
    box-sizing: border-box;
    padding-right: 2rem;
    background: #E4E4E4;
    border-radius: 8px;
    position: relative;
    z-index: 8;
  }

  .result_p_r {
    width: 50%;
    height: 0.8rem;
    box-sizing: border-box;
    padding-left: 2rem;
    background: #E4E4E4;
    border-radius: 8px;
    position: relative;
    z-index: 8;
  }

  .result_p_l_t {
    position: absolute;
    left: 0;
    top: -2.5rem;
    font-size: 2rem;
  }

  .result_p_r_t {
    position: absolute;
    right: 0;
    top: -2.5rem;
    font-size: 2rem;
  }

  .result_p_i {
    height: 100%;
    border-radius: 8px;
  }

  .result_p_i_w {
    background: #515356;
  }

  .result_p_i_f {
    background: #B1B1B1;
  }

  .result_p_icon_label {
    width: 7rem;
    position: absolute;
    left: -1rem;
    bottom: -1.8rem;
    font-size: 1.3rem;
    text-align: center;
  }

  .result_p_icon {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    z-index: 12;
  }

  .icon_right {
    background: url("../assets/icon_right@2x.png") no-repeat;
    background-size: contain;
  }

  .icon_crit {
    background: url("../assets/icon_baoji@2x.png") no-repeat;
    background-size: contain;
  }

  .icon_times {
    background: url("../assets/icon_times@2x.png") no-repeat;
    background-size: contain;
  }
</style>
