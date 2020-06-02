<template>
  <div class="table">
    <header>
      <div class="input">
        <span class="section">部门</span>
        <el-input placeholder="请输入部门" v-model="inputvalue"></el-input>
      </div> 
      <div class="time">
         <el-date-picker
          v-model="value1"
          type="month"
          placeholder="选择月"
          popper-class='dateName'
          value-format="yyyy-MM">
        </el-date-picker>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月"
          value-format="yyyy-MM">
        </el-date-picker>
      </div>
      <el-button @click="toTable">查询</el-button>
       <el-button type="success" class="charts" size="medium" @click="toCharts">查看图表</el-button>
    </header>
    <section>
      <!-- <template> -->
    <MyTable :col="header"
      :data="tableDatas">
    </MyTable>
    </section>
  </div>
</template>

<script>
 import axios from 'axios'
 import MyTable from '../view/MyTable'
  export default {
    components: {
      MyTable
    },
    data() {
      return {
        inputvalue: '',
        value1: '',
        value2: '',
        tableDatas: [],
        header:[
           {
           id: 100,
           label: '时间',
           prop: 'date',
          },
         {
           id: 200,
           label: '部门',
           prop: 'departmentName',
         },
         {
           id: 300,
           label: '人数',
           prop: 'departmentId',
         },
         {
           id: 400,
           label: '工资总额',
          //  prop: 'totalSalary',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'totalSalaryvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'totalSalaryavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'totalSalarypercentage'
            }]
         },
          {
           id: 500,
           label: '基本工资',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'basicWagevalue'
            },{
                id: 20,
               label: '人均',
               prop: 'basicWageavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'basicWagepercentage'
            }]
         },{
           id: 600,
           label: '工资总额',
          //  prop: 'totalSalary',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'performanceSalaryvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'performanceSalaryagevalue'
            },{
                id: 30,
               label: '占比',
               prop: 'performanceSalarypercentage'
            }]
         },{
           id: 700,
           label: '职务补贴',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'dutySalaryvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'dutySalaryagevalue'
            },{
                id: 30,
               label: '占比',
               prop: 'dutySalarypercentage'
            }]
         },{
           id: 800,
           label: '加班补贴',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'overworkSalaryvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'overworkSalaryavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'overworkSalarypercentage'
            }]
         },{
           id: 900,
           label: '职级补贴',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'levelWagevalue'
            },{
                id: 20,
               label: '人均',
               prop: 'levelWageagevalue'
            },{
                id: 30,
               label: '占比',
               prop: 'levelWagepercentage'
            }]
         },{
           id: 1000,
           label: '倒班补助',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'changeworkSalaryvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'changeworkSalaryavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'changeworkSalarypercentage'
            }]
         },{
           id: 1000,
           label: '夜勤补助',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'nightSalaryvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'nightSalaryavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'nightSalarypercentage'
            }]
         },{
           id: 1100,
           label: '住宅补贴',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'houseWagevalue'
            },{
                id: 20,
               label: '人均',
               prop: 'houseWageavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'houseWagepercentage'
            }]
         },{
           id: 1200,
           label: '交通补助',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'trafficWagevalue'
            },{
                id: 20,
               label: '人均',
               prop: 'trafficWageavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'trafficWagepercentage'
            }]
         },{
           id: 1300,
           label: '特殊岗位',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'spWorkTypeWagevalue'
            },{
                id: 20,
               label: '人均',
               prop: 'spWorkTypeWageavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'spWorkTypeWagepercentage'
            }]
         },{
           id: 1400,
           label: '特殊技能及学历补贴',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'spskillMoneyvalue'
            },{
                id: 20,
               label: '人均',
               prop: 'spskillMoneyavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'spskillMoneypercentage'
            }]
         },{
           id: 1500,
           label: '满勤补助',
             children: [
             {
                id: 10,
               label: '值',
               prop: 'fullWagevalue'
            },{
                id: 20,
               label: '人均',
               prop: 'fullWageavgValue'
            },{
                id: 30,
               label: '占比',
               prop: 'fullWagepercentage'
            }]
         }]
      }
    },
    created() {
     // this.toTable();
    },
    mounted() {
    
    },
    methods: {
      toCharts() {
        this.$router.push(`/charts?start=${this.value1}&end=${this.value2}&inp=${this.inputvalue}`)
      },
      changeData(data) {
        let name = []
        data.forEach((item, idx) => {
          item.basicWageavgValue = item.basicWage.avgValue;
          item.basicWagepercentage= item.basicWage.percentage;
          item.basicWagevalue= item.basicWage.value;

           item.totalSalaryavgValue = item.totalSalary.avgValue;
          item.totalSalarypercentage= item.totalSalary.percentage;
          item.totalSalaryvalue= item.totalSalary.value;

           item.performanceSalaryagevalue = item.performanceSalary.avgValue;
          item.performanceSalarypercentage= item.performanceSalary.percentage;
          item.performanceSalaryvalue= item.performanceSalary.value;

           item.dutySalaryagevalue = item.dutySalary.avgValue;
          item.dutySalarypercentage= item.dutySalary.percentage;
          item.dutySalaryvalue= item.dutySalary.value;

           item.overworkSalaryavgValue = item.overworkSalary.avgValue;
          item.overworkSalarypercentage= item.overworkSalary.percentage;
          item.overworkSalaryvalue= item.overworkSalary.value;

           item.levelWagevalue = item.levelWage.avgValue;
          item.levelWagepercentage= item.levelWage.percentage;
          item.levelWagevalue= item.levelWage.value;

          item.changeworkSalaryavgValue = item.changeworkSalary.avgValue;
          item.changeworkSalarypercentage= item.changeworkSalary.percentage;
          item.changeworkSalaryvalue= item.changeworkSalary.value;

           item.nightSalaryavgValue = item.nightSalary.avgValue;
          item.nightSalarypercentage= item.nightSalary.percentage;
          item.nightSalaryvalue= item.nightSalary.value;

          item.houseWageavgValue = item.houseWage.avgValue;
          item.houseWagepercentage= item.houseWage.percentage;
          item.houseWagevalue= item.houseWage.value;

          item.trafficWageavgValue = item.trafficWage.avgValue;
          item.trafficWagepercentage= item.trafficWage.percentage;
          item.trafficWagevalue= item.trafficWage.value;
          if(item.spWorkTypeWage) {
            item.spWorkTypeWageavgValue = item.spWorkTypeWage.avgValue;
          item.spWorkTypeWagepercentage= item.spWorkTypeWage.percentage;
          item.spWorkTypeWagevalue= item.spWorkTypeWage.value;
          }
           item.spskillMoneyavgValue = item.spskillMoney.avgValue;
          item.spskillMoneypercentage= item.spskillMoney.percentage;
          item.spskillMoneyvalue= item.spskillMoney.value;

          item.fullWageavgValue = item.fullWage.avgValue;
          item.fullWagepercentage= item.fullWage.percentage;
          item.fullWagevalue= item.fullWage.value;
          name.push(item)
        });
        return name
      },
      toTable() {
        let _this = this
         axios.get(`http://120.78.186.60:8080/test5/toAnalysis?startDate=${_this.value1}&endDate=${_this.value2}&departmentName=${_this.inputvalue}`).then((res)=> {
          _this.tableDatas = _this.changeData(res.data.data);
           console.log( this.tableDatas)
        }) 
      }
    },

  }
</script>

<style scoped>
@import '../style/header.css';
.table{
  padding: 100px 0;
}
 

    section{
      margin-top: 100px;
    }
    /deep/.el-table .cell{
      line-height: 60px !important;
    }

    .charts{
      margin-left: 500px;
    }
</style>
