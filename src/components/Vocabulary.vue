<template>
  <div class="app">
    <div class="header">
      <div class="title">
        <span>词汇量排行榜</span>
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
  export default {
    name: 'vocabulary',
    data: function () {
      return {
        img: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png'
      }
    },
    components: {
      TopList,
      RankList
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
    height: 6rem;
    background-color: #27D4D7;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
  }

  .title {
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    box-sizing: border-box;
  }

  .title span {
    font-size: 1.8rem;
    color: #FFFFFF;
    letter-spacing: -0.82px;
    vertical-align: text-bottom;
  }

  .body {
    width: 100%;
    height: 100%;
    padding: 6rem 0 8rem;
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
