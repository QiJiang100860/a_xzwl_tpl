<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'App'
  }
</script>
<style lang="scss">
// @font-face {
//   font-family: 'iconfont';  /* project id 674196 */
//   src: url('http://at.alicdn.com/t/font_674196_gkovs63pqrhvkj4i.eot');
//   src: url('http://at.alicdn.com/t/font_674196_gkovs63pqrhvkj4i.eot?#iefix') format('embedded-opentype'),
//   url('http://at.alicdn.com/t/font_674196_gkovs63pqrhvkj4i.woff') format('woff'),
//   url('http://at.alicdn.com/t/font_674196_gkovs63pqrhvkj4i.ttf') format('truetype'),
//   url('http://at.alicdn.com/t/font_674196_gkovs63pqrhvkj4i.svg#iconfont') format('svg');
// }
// .iconfont {
//   font-family:"iconfont" !important;
//   font-size:16px;
//   font-style:normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

.model-container{
  box-sizing: border-box;
  padding: 14px;
  .el-card{
    box-shadow: none;
    &:first-child{
      margin-bottom: 10px;
    }
    .el-card__header{
      padding: 12px 20px;
      font-size: 14px;
      color: #666;
      font-weight: bold;
      .iconfont{
        font-size: 18px;
        vertical-align: -2px;
        color: #666;
        margin-right: 4px;
      }
    } 
  }
}
</style>
