<template>
  <div class="rank_i" :class="{ isOneself: isOneself }">
    <div class="order fl" :class="order">{{orderLabel}}</div>
    <div class="photo fl">
      <img src="../assets/player_0_logo.png" :src="player.photo">
    </div>
    <div class="user fl">{{player.studentName}}</div>
    <div class="score fr">
      <div v-show="isOneself" class="score_top">距离上一名：11{{scoreLabel}}</div>
      <div class="score_label">{{player.number}}{{scoreLabel}}</div>
      <div v-show="isOneself" class="score_bottom">距离下一名：11{{scoreLabel}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank-list-item',
    data () {
      return {
        scoreLabel: '分',
        isOneself: false,
        defaultLogo: require('../assets/player_0_logo.png')
      }
    },
    computed: {
      order () {
        if (this.index === 0) {
          return 'gold'
        } else if (this.index === 1) {
          return 'silver'
        } else if (this.index === 2) {
          return 'copper'
        } else {
          return ''
        }
      },
      orderLabel () {
        if (this.index === 0) {
          return ''
        } else if (this.index === 1) {
          return ''
        } else if (this.index === 2) {
          return ''
        } else {
          return this.index + 1
        }
      }
    },
    props: ['player', 'index'],
    created () {
      if (this.$route.name === 'vocabulary') {
        this.scoreLabel = '个'
      }
      if (this.player.id === 4) {
        this.isOneself = true
      }
    },
    mounted () {
      let _this = this
      let image = new Image()
      image.onerror = function () {
        _this.player.photo = _this.defaultLogo
      }
      image.src = _this.player.photo
    }
  }
</script>

<style>
  .rank_i {
    width: 100%;
    height: 7rem;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
  }

  .isOneself {
    width: 100%;
    height: 9rem;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    background: #EEF9F9;
  }

  .order {
    width: 2.2rem;
    height: 2.75rem;
    margin: 1.175rem 0.5rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.75rem;
    font-size: 1.8rem;
    color: #404040;
    letter-spacing: 0;
  }

  .gold {
    background: url("../assets/icon_gold.png") no-repeat;
    background-size: cover;
  }

  .silver {
    background: url("../assets/icon_silver.png") no-repeat;
    background-size: cover;
  }

  .copper {
    background: url("../assets/icon_copper.png") no-repeat;
    background-size: cover;
  }

  .photo {
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 50%;
  }

  .photo img {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }

  .user {
    height: 5rem;
    line-height: 5rem;
    font-size: 1.8rem;
    color: #404040;
    letter-spacing: 0;
    padding: 0 2rem;
  }

  .score {
    min-width: 10rem;
    height: 5rem;
    color: #404040;
    position: relative;
    text-align: right;
  }

  .score_label {
    line-height: 5rem;
    font-size: 1.8rem;
  }

  .score_top {
    position: absolute;
    top: -1rem;
    font-size: 1.1rem;
    color: #B1B1B1;
  }

  .score_bottom {
    position: absolute;
    bottom: -1rem;
    font-size: 1.1rem;
    color: #B1B1B1;
  }
</style>
