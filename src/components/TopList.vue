<template>
  <div class="top">
    <div class="top_l">
      <div class="top_s_p" :style="{backgroundImage: 'url(' + studentData[1].photo + ')'}">
        <div class="top_l_icon"></div>
      </div>
      <div class="top_score">{{studentData[1].answerCount}}</div>
      <div class="top_user">{{studentData[1].studentName}}</div>
    </div>
    <div class="top_m">
      <div class="top_p" :style="{backgroundImage: 'url(' + studentData[0].photo + ')'}">
        <div class="top_m_icon"></div>
      </div>
      <div class="top_score">{{studentData[0].answerCount}}</div>
      <div class="top_user">{{studentData[0].studentName}}</div>
    </div>
    <div class="top_r">
      <div class="top_s_p" :style="{backgroundImage: 'url(' + studentData[2].photo + ')'}">
        <div class="top_r_icon"></div>
      </div>
      <div class="top_score">{{studentData[2].answerCount}}</div>
      <div class="top_user">{{studentData[2].studentName}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top-list',
    data () {
      return {
        defaultLogo: require('../assets/player_0_logo.png')
      }
    },
    props: ['studentData'],
    mounted () {
      let _this = this
      let imageM = new Image()
      imageM.onerror = function () {
        _this.studentData[0].photo = _this.defaultLogo
      }
      imageM.src = _this.studentData[0].photo
      let imageL = new Image()
      imageL.onerror = function () {
        _this.studentData[1].photo = _this.defaultLogo
      }
      imageL.src = _this.studentData[1].photo
      let imageR = new Image()
      imageR.onerror = function () {
        _this.studentData[2].photo = _this.defaultLogo
      }
      imageR.src = _this.studentData[2].photo
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 20rem;
    padding-top: 2rem;
    box-sizing: border-box;
    background-color: #27D4D7;
  }

  .top_l {
    float: left;
    width: 35%;
    height: 100%;
    padding: 0 6%;
    box-sizing: border-box;
  }

  .top_m {
    float: left;
    width: 30%;
    height: 100%;
    box-sizing: border-box;
  }

  .top_m_icon {
    position: absolute;
    top: -2rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 4rem;
    height: 3rem;
    z-index: 10;
    background: url("../assets/icon_no1.png") no-repeat;
    background-size: cover;
  }

  .top_l_icon {
    position: absolute;
    top: -1.5rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 3rem;
    height: 2rem;
    z-index: 10;
    background: url("../assets/icon_no2.png") no-repeat;
    background-size: cover;
  }

  .top_r_icon {
    position: absolute;
    top: -1.5rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 3rem;
    height: 2rem;
    z-index: 10;
    background: url("../assets/icon_no3.png") no-repeat;
    background-size: cover;
  }

  .top_r {
    float: left;
    width: 35%;
    height: 100%;
    padding: 0 6%;
    box-sizing: border-box;
  }

  .top_s_p {
    width: 7rem;
    border-radius: 50%;
    background-size: cover;
    position: relative;
    margin: 4rem auto 0;
  }

  .top_s_p:after {
    content: '';
    display: block;
    padding-bottom: 100%; /* padding 百分比相对父元素宽度计算 */
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    overflow: hidden;
  }

  .top_p {
    width: 9.2rem;
    border-radius: 50%;
    background-size: cover;
    position: relative;
    margin: 1.5rem auto 0;
  }

  .top_p:after {
    content: '';
    display: block;
    padding-bottom: 100%; /* padding 百分比相对父元素宽度计算 */
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    overflow: hidden;
  }

  .top_score {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 3rem;
    margin-top: 1rem;
  }

  .top_user {
    width: 100%;
    text-align: center;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #FFFFFF;
  }
</style>
