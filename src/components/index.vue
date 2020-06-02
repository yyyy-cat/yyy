<template>
    <div>
        <!--<div style="margin-left: 200px;margin-top: 20px;display: table-cell">-->
            <!--&lt;!&ndash;<div class="container">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="block">&ndash;&gt;-->
            <!--&lt;!&ndash;<span class="demonstration">年</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-date-picker&ndash;&gt;-->
            <!--&lt;!&ndash;v-model="value3"&ndash;&gt;-->
            <!--&lt;!&ndash;type="year"&ndash;&gt;-->
            <!--&lt;!&ndash;placeholder="选择年">&ndash;&gt;-->
            <!--&lt;!&ndash;</el-date-picker>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div class="container">-->
                <!--<div class="block">-->
                    <!--<span class="demonstration" style="font-size: 20px">时间:</span>-->
                    <!--<el-date-picker-->
                            <!--type="month"-->
                            <!--value-format="yyyy-MM"-->
                            <!--v-model="yearMonth"-->
                            <!--:picker-options="pickerOptions"-->

                            <!--placeholder="选择月">-->
                    <!--</el-date-picker>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div>-->
                <!--<button style="float: left;margin-left: 50px;width: 50px;height: 30px;background-color: #009688;color: white;border: none;border-radius: 5px;margin-top: 3px" @click="getData()">查询</button>-->
            <!--</div>-->

        <!--</div>-->

        <!--<div >平均值:{{annualAverage}}</div>-->

        <div id="echart" style="width:1300px;height:400px;" v-show="isFalse"></div>

        <div id="ech" style="width:1300px;height:400px;margin-top: 50px" v-show="isFalse" ></div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import $ from "jquery"
    import echarts from 'echarts'
    import {DatePicker} from 'element-ui'
    Vue.use(DatePicker);
    import axios from "axios";
    export default {
        data () {
            return {
                yearMonth: '',
                value3: '',
                isFalse:true,
                getSolo:[],
              htt:'',
                annualAverage:[],
                departmentName:[],
                pickerOptions: {
                    disabledDate: (time) => {
                        return this.dealDisabledDate(time);
                    }
                },
            }
        },
      created(){
        let editType = this.$route.query.id
        this.htt=editType
        console.log(this.htt)
        this.Dataee()
      },
        mounted(){
          this.Dataee()
        },
        methods: {
          // de(){
          //   this.$route.path
          // },
            dealDisabledDate(time) {
                var times = Date.now()
                return time.getTime() > times;
            },
           Dataee(){
                // 基于准备好的dom，初始化echarts实例
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echart'));
// 绘制图表
                myChart.setOption({
                    title: {
                        text: '工资分析',
                        subtext: '人均发放工资总额',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: []
                    },
                    series: [
                        {
                            name: '工资',
                            type: 'pie',
                            radius: '70%',
                            center: ['62%', '60%'],
                            data: [
                            ],
                            label: {
                                // color:"#FFFFFF",//颜色
                                position:"outside",//显示位置
                                fontSize:"14",
                                formatter: '{b} : {c} ({d}%)'//内容显示格式化
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ],
                });
                myChart.showLoading(); //数据加载完之前先显示一段简单的loading动画
              // myChart.on('click', function (params) {
              //   alert("饼图点击事件");window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
              // });
                var names = []; //类别数组（用于存放饼图的类别）
                var brower = [];
                $.ajax({
                    type: 'get',
                    url: '/test4/togetMonthlyAnalyData?yearMonth='+this.htt, //请求数据的地址
                    dataType: "json", //返回数据形式为json
                    success: function(result) {
                        //请求成功时执行该函数内容，result即为服务器返回的json对象
                        console.log(result)
                        $.each(result.data, function(index, item) {
                            names.push(item.departmentName); //挨个取出类别并填入类别数组
                            console.log(item.monthlytotal)
                            brower.push({
                                name: item.departmentName,
                                value: item.monthlytotal,
                                number:item.numbers,
                                year:item.yearMonth.slice(0,4)
                            });
                        });
                        myChart.hideLoading(); //隐藏加载动画
                        myChart.setOption({ //加载数据图表
                            legend: {
                                data: names
                            },
                            series: [{
                                data: brower
                            }]
                        });
                    },
                    error: function(errorMsg) {
                        //请求失败时执行该函数
                        alert("图表请求数据失败!");
                        myChart.hideLoading();
                    }
                });
                myChart.on('click', function (params) {
                    console.log(params)
                  // window.open('/index1')
                    this.departmentName=params.data.name
                    this.year=params.data.year
                    console.log(this.departmentName)
                    var myChart = echarts.init(document.getElementById('ech'));
                    // 指定图表的配置项和数据
                    var option = {
                        title: {
                            text: '年度分析'
                        },
                        tooltip: {},
                        legend: {
                            data:['工资']
                        },
                        xAxis: {
                            data: ["一月份","二月份","三月份","四月份","五月份","六月份","七月份","八月份","九月份","十月份","十一月份","十二月份"]
                        },
                        yAxis: {},
                        series: [{
                            name: '工资',
                            type: 'bar',
                            radius: '30%',
                            barWidth: '30%',
                            center: ['62%', '40%'],
                            data: []
                        }]
                    };
                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(option);
                    myChart.showLoading(); //数据加载完之前先显示一段简单的loading动画
                    var names = []; //类别数组（用于存放饼图的类别）
                    var brower = [];
                    $.ajax({
                        type: 'get',
                        url: '/test4/departmentWageAnalysisData?departmentName='+this.departmentName+"&"+"year"+"="+this.year, //请求数据的地址
                        dataType: "json", //返回数据形式为json
                        success: function(result) {
                            //请求成功时执行该函数内容，result即为服务器返回的json对象
                            this.annualAverage=result.data.annualAverage;

                            console.log(this.annualAverage)
                            console.log(this.annualAverage)
                            $.each(result.data.wageAnalysisDTOList, function(index, item) {
                                //names.push(item.monthlytotal); //挨个取出类别并填入类别数组
                                console.log(item.monthlytotal)
                                brower.push({
                                    value: item.monthlytotal,
                                    // value: item.monthlytotal,
                                    // number:item.numbers,
                                    // year:item.yearMonth.slice(0,4)
                                });
                            });
                            myChart.hideLoading(); //隐藏加载动画
                            myChart.setOption({ //加载数据图表
                                // legend: {
                                //     data: names
                                // },
                                series: [{
                                    data: brower
                                }]
                            });
                        },
                        error: function(errorMsg) {
                            //请求失败时执行该函数
                            alert("图表请求数据失败!");
                            myChart.hideLoading();
                        }
                    });
                });
            }
        }
    }
</script>

<style scoped>

    #echart{
        margin-top: 15px;
    }
    /*#ech{*/
        /*position: absolute;*/
        /*left: 1245px !important;*/
        /*top: 0px !important;*/
    /*}*/
</style>
