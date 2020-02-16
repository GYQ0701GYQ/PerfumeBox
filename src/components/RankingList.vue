<template>
  <div class="top5">
    <iframe ref="mainIframe" src="../../static/card-flip/demo.html" frameborder="0" scrolling="no" width="100%" height="600px" @load="loaded" />
  </div>
</template>

<script>
export default {
  name: 'RankingList'
}
</script>

<style scoped>
.top5{
  background-color: #F0FDFD;
}
</style>
