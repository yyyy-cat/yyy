<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app{
  height: 100%;
}
.el-pagination__editor.el-input .el-input__inner {
  color: white;
  height: 76px;
  width: 76px;
  font-size: 30px;
  border: solid 1px white;
  background: transparent;
}
.el-table thead.is-group th {
  /*background: transparentr;*/
}
</style>



