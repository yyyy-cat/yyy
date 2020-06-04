<template>
  <div class="my-table">
    <el-table :data="data" row-key='data' height="600" show-summary >
      <my-column v-for="(item,index) in col" :key="index" :col="item"></my-column>
       <div slot="append" style="text-align: center">
         <div  v-for="(ite,ind) in 100" :key="ind" class="tr" >{{ite}}</div>
        <!-- <table cellspacing="0" border="0"  class="tr" style="width: 4800px">
          <tr v-for="(ite,ind) in 100" :key="ind" >
            <td class="td">{{ite}}</td>
          </tr>
        </table> -->
    </div>
    </el-table>
    
   
  </div>
</template>

<script>
import MyColumn from './myColum'
export default {
  components: {
    MyColumn
  },
  props: {
    col: {
      type: Array
    },
    data: {
      type: Array
    }
  }
}
</script>
<style scoped>
/deep/.el-table{
  overflow: visible;
}
 /deep/.el-table .cell{
    line-height: 60px !important;
}

.tr{
  width: 4800px;
}
tr{
float: left;
}
tr:nth-child(1){
  width: 200px;
}
tr:nth-child(2){
  width: 200px;
}
tr:nth-child(3){
  width: 200px;
}
tr, td{
  width: 100px;
}
</style>