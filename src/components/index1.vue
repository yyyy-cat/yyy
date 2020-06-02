<template>
  <div>
    <el-table
      :data="tableData"
      border
      @click="handleClick(scope.row)"
      style="width: 100%">
      <el-table-column
        fixed
        prop="salaryBaseChangeRecordId"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="类别"
        width="120">
      </el-table-column>
      <el-table-column

        label="项目"
        width="200">
        <el-table-column
          prop="levelName"
          label="职级"
          width="200">
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目"
          width="200">
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="历史记录"
        width="120">
        <el-table-column
          prop="amountOfproportion"
          label="金额/比例"
          width="120">
        </el-table-column>
        <el-table-column
          label="起止时间"
          width="300"
          prop="beginEndDate">
        </el-table-column>
      </el-table-column>

    </el-table>
    <div style="margin-top: 10px">
      <el-pagination
        background
        @current-change="getCurPage($event)"
        :page-size="10"
        layout="prev, pager, next"
        :total="8">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import {Table,TableColumn,Pagination} from 'element-ui';
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(Pagination);
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      getCurPage(curPage){
        console.log(curPage)

        this.$request("http://120.78.186.60:8080/test5/toGetSalaryBaseChangeRecord?page="+curPage+"&rows="+this.pagesize).then(res=>{

          this.tableData=res.rows;
        });
      },
    },
    created(){
      this.$request("http://120.78.186.60:8080/test5/toGetSalaryBaseChangeRecord?page="+1+"&rows="+this.pagesize).then(res=>{

        this.tableData=res.rows;
        console.log(res)
      });
    },
    data() {
      return {
        pagesize:"10",
        tableData:[]
      }
    }
  }
</script>

<style scoped>
  .el-table thead.is-group th {
    background: #F5F7FA;
    text-align: center ;
  }
  .el-table tr {
  text-align: center ;
}
</style>
