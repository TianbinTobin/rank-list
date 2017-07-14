<template>
  <div class="rank_i">
    <div class="order fl" :class="order">{{orderLabel}}</div>
    <div class="photo fl">
      <img :src="player.photo">
    </div>
    <div class="user fl">{{player.name}}</div>
    <div class="score fr">{{player.score}}个</div>
  </div>
</template>

<script>
  export default {
    name: 'rank-list-item',
    data () {
      return {
        img: 'http://192.168.0.203/image/head/2017/07/ff8080815d3acd7c015d3afd815b0001.png'
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
    props: ['player', 'index']
  }
</script>

<style>
  .rank_i {
    width: 100%;
    height: 7rem;
    padding: 1rem;
    box-sizing: border-box;
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
    height: 5rem;
    line-height: 5rem;
    font-size: 1.8rem;
    color: #404040;
    letter-spacing: 0;
  }
</style>
