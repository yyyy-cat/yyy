<template>
  <div class="charts">
    <div class="back" @click="toback">返回上一页</div>
    <section>
      <div id="list"  :style="{width: '500px', height: '500px', margin: '0 auto', zIndex: '10'}"></div>
    </section>
  </div>
</template>

<script>
 import axios from 'axios'
  export default {
    data() {
      return{
        inputvalue: '',
        value1: '',
        value2: '',
        pipData: []
      }
    },
    watch:{
      pipData: function() {
        this.drew();
      }
    },
    created() {
      this.toTable(this.$route.query.start || '',this.$route.query.end || '',this.$route.query.ipt || '');
    },
    methods: {
      toback() {
        this.$router.go(-1)
      },
      initOptions() {
       let option = {
            title: {
                text: '部门饼状数据',
                // subtext: '数据',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            // legend: {
            //     orient: 'vertical',
            //     left: 'left',
            //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            // },
            series: [
                {
                    name: '部门',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '60%'],
                    data: this.toSetData(),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                     itemStyle : {
                        normal : {
                          label : {
                            show : false
                          },
                          labelLine : {
                            show : false
                          }
                        },

                      },
                }
            ]
        };
        return option;
      },
      toSetData() {
        let arr = [];
        let _this = this
        if(_this.pipData.length > 1){
           _this.pipData.forEach((item, idx) => {
            arr.push({value: item.monthlytotal, name: item.departmentName})
          });
        }else{
          _this.pipData.forEach((item, idx) => {
          arr.push(
            {value: item.basicWage, name: '基本工资'},
            {value: item.performanceSalary, name: '评价工资'},
            {value: item.dutySalary, name: '职务补贴'},
            {value: item.overworkSalary, name: '加班补贴'},
            {value: item.levelWage, name: '职级补贴'},
            {value: item.changeworkSalary, name: '倒班补助'},
            {value: item.nightSalary, name: '夜勤补助'},
            {value: item.houseWage, name: '住宅补贴'},
            {value: item.trafficWage, name: '交通补助'},
            {value: item.spWorkTypeWage, name: '特殊岗位'},
            {value: item.spskillMoney, name: '特殊技能及学历补贴'},
            {value: item.fullWage, name: '满勤补助'},
            )
        });
        }
        return arr
         
      },
      toTable(start,end,ipt) {
        let _this = this
         axios.get(`http://120.78.186.60:8080/test5/togetMonthlyAnalyData?startDate=${start}&endDate=${end}&departmentName=${ipt}`).then((res)=> {
          _this.pipData = res.data.data;
        }) 
      },
      drew() {
        let _this = this;
        let myCharts = this.$echarts.init(document.getElementById('list'));
        myCharts.setOption(_this.initOptions());
      }
    },

  }
</script>
<style>
  html, body{
    height: 100%;
  }
</style>
<style scoped>
 @import '../style/header.css';
.back{
  text-align: end;
  font-size: 20px;
  font-weight: bold;
}
 .charts{
   padding: 100px;
   height: 100%;
 }
  section{
    margin-top: 100px;
  }
</style>
