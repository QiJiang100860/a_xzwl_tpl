<template>
  <div class="slider-content">
    <el-slider v-model="slideValue"></el-slider>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideValue: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-content{
  width: 400px;
  margin: 0 auto;
}
</style>

