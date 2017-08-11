<template>
  <div class="app">
    <div class="per_header">
      <span class="per_header_u">谢华</span>
      <span class="per_header_c">(高一一班)</span>
    </div>
    <div class="per_date">6/17</div>
    <div class="per_task">
      <div class="per_item per_title">任务完成情况</div>
      <div class="per_item">
        <div class="fl">总任务数</div>
        <div class="fr">24个</div>
      </div>
      <div class="per_item">
        <div class="fl">教材词汇数</div>
        <div class="fr">24个</div>
      </div>
      <div class="per_item">
        <div class="fl">拓展词汇数</div>
        <div class="fr">24个</div>
      </div>
      <div class="per_item">
        <div class="fl">掌握词汇量</div>
        <div class="fr">24个</div>
      </div>
      <div class="per_item">
        <div class="fl">学习时长</div>
        <div class="fr">24个</div>
      </div>
      <div class="per_item">
        <div class="fl">任务完成率</div>
        <div class="fr">24个</div>
      </div>
    </div>
    <div class="per_skill">
      <div class="per_item per_title">语言技能接受度</div>
      <div class="per_item">
        <div class="fl"><i class="per_icon_l"></i>听</div>
        <div class="fr">89%</div>
      </div>
      <div class="per_item">
        <div class="fl"><i class="per_icon_y"></i>说</div>
        <div class="fr">56%</div>
      </div>
      <div class="per_item">
        <div class="fl"><i class="per_icon_r"></i>读</div>
        <div class="fr">85%</div>
      </div>
      <div class="per_item">
        <div class="fl"><i class="per_icon_s"></i>看</div>
        <div class="fr">76%</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'performance'
  }
</script>

<style scoped>
  .app {
    padding: 2rem;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .per_header {
    text-align: center;
  }

  .per_header_u {
    font-size: 1.8rem;
    color: #666666;
    line-height: 2rem;
  }

  .per_header_c {
    font-size: 1.4rem;
    color: #666666;
    line-height: 2rem;
  }

  .per_date {
    text-align: center;
    font-size: 1.2rem;
    color: #666666;
    line-height: 4rem;
  }

  .per_task {
    width: 100%;
  }

  .per_skill {
    width: 100%;
  }

  .per_item {
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    border-bottom: 1px solid #F4F4F4;
    font-size: 1.8rem;
    color: #333333;
  }

  .per_title {
    color: #999999;
    font-size: 1.3rem;
  }

  .per_icon_l {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    display: inline-block;
    vertical-align: text-bottom;
    background: url("../assets/icon_listen@2x.png") no-repeat;
    background-size: contain;
  }

  .per_icon_s {
    width: 2.5rem;
    height: 2rem;
    margin-right: 1rem;
    display: inline-block;
    vertical-align: text-bottom;
    background: url("../assets/icon_see@2x.png") no-repeat;
    background-size: contain;
  }

  .per_icon_r {
    width: 2.5rem;
    height: 2rem;
    margin-right: 1rem;
    display: inline-block;
    vertical-align: text-bottom;
    background: url("../assets/icon_read@2x.png") no-repeat;
    background-size: contain;
  }

  .per_icon_y {
    width: 2.5rem;
    height: 2.3rem;
    margin-right: 1rem;
    display: inline-block;
    vertical-align: text-bottom;
    background: url("../assets/icon_yuyin@2x.png") no-repeat;
    background-size: contain;
  }

</style>
