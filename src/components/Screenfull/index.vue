<template>
  <div class="screenfull-icon">
    <i @click='click' :class="isFullscreen?'iconfont icon-quanping':'iconfont icon-cancel-full-screen'"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'screenfull',
  data() {
    return {
      isFullscreen: true
    }
  },
  mounted: function() {},
  methods: {
    click() {
      this.isFullscreen = screenfull.isFullscreen
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    screeChange() {}
  }
}
</script>
<style lang="scss" scoped>
.screenfull-icon {
  display: inline-block;
  height: 30px;
  i{
    font-size: 20px;
    cursor: pointer;
    color: #999;
    &:hover{
      color: #333;
    }
  }
}
</style>

