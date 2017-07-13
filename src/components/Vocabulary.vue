<template>
  <div class="app">
    <div class="header">
      <div class="title">
        <span>词汇量排行榜</span>
      </div>
    </div>
    <div class="body">
      <div class="top">
        <div class="top_l">
          <div class="top_s_p">
            <div class="top_l_icon"></div>
          </div>
          <div class="top_score">123</div>
          <div class="top_user">李小萌</div>
        </div>
        <div class="top_m">
          <div class="top_p" :style="{backgroundImage: 'url(' + img + ')'}">
            <div class="top_m_icon"></div>
          </div>
          <div class="top_score">123</div>
          <div class="top_user">李小萌</div>
        </div>
        <div class="top_r">
          <div class="top_s_p">
            <div class="top_r_icon"></div>
          </div>
          <div class="top_score">123</div>
          <div class="top_user">李小萌</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button>查看我的排行</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vocabulary',
    data: function () {
      return {
        img: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png'
      }
    }
  }
</script>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
  }

  .header {
    width: 100%;
    height: 8rem;
    background-color: #27D4D7;
    position: absolute;
    top: 0;
    left: 0;
  }

  .title {
    width: 100%;
    height: 8rem;
    line-height: 8rem;
    text-align: center;
    box-sizing: border-box;
  }

  .title span {
    font-size: 1.8rem;
    color: #FFFFFF;
    letter-spacing: -0.82px;
    vertical-align: text-bottom;
  }

  .top {
    width: 100%;
    height: 20rem;
    padding-top: 1rem;
    box-sizing: border-box;
    background-color: #27D4D7;
  }

  .top_l {
    float: left;
    width: 35%;
    height: 100%;
    padding: 0 8%;
    box-sizing: border-box;
  }

  .top_m {
    float: left;
    width: 30%;
    height: 100%;
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
    padding: 0 8%;
    box-sizing: border-box;
  }

  .top_s_p {
    margin-top: 50%;
    width: 100%;
    border-radius: 50%;
    background-size: cover;
    position: relative;
  }

  .top_s_p:after {
    content: '';
    display: block;
    padding-bottom: 100%; /* margin 百分比相对父元素宽度计算 */
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    overflow: hidden;
  }

  .top_p {
    width: 100%;
    border-radius: 50%;
    background-size: cover;
    position: relative;
  }

  .top_p:after {
    content: '';
    display: block;
    padding-bottom: 100%; /* margin 百分比相对父元素宽度计算 */
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

  .body {
    width: 100%;
    height: 100%;
    padding: 8rem 0;
    box-sizing: border-box;
    overflow: auto;
  }

  .footer {
    width: 100%;
    height: 8rem;
    padding: 2rem 10%;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    background: #F4F7FB;
    box-shadow: 0 -3px 30px 0 rgba(191, 191, 191, 0.50);
  }

  .footer button {
    width: 100%;
    height: 4rem;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: -0.82px;
    background-image: linear-gradient(-59deg, #30ECB0 0%, #00DCE1 30%);
    border-radius: 40px;
    border: 0;
    outline: none;
  }
</style>
