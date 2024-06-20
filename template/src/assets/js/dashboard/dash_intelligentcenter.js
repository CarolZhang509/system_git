function calculateMiddleColor(value) {
    // 计算红色和绿色的RGB值
    var red = Math.floor((255 * (100 - value)) / 100);
    var green = Math.floor((255 * value) / 100);
    // 构造中间颜色字符串
    var middleColor = 'rgb(' + red + ',' + green + ',0)';
    return middleColor;
}

// 获取数值
var value = 90; // 这里替换为你的实际数值

// 计算中间颜色
var middleColor = calculateMiddleColor(value);

var temp_data = JSON.parse(document.getElementById('temp-data').textContent);
var ph_data = JSON.parse(document.getElementById('ph-data').textContent);


window.addEventListener("DOMContentLoaded", function(){
    try {
        console.log(temp_data); // 确认温度数据
        console.log(ph_data);   // 确认PH值数据


        getcorkThemeObject = localStorage.getItem("theme");
        getParseObject = JSON.parse(getcorkThemeObject)
        ParsedObject = getParseObject;

        if (ParsedObject.settings.layout.darkMode) {

            var Theme = 'dark';

            Apex.tooltip = {
                theme: Theme
            }

            /**
             ==============================
             |    @Options Charts Script   |
             ==============================
             */

            /*
              ======================================
                  Visitor Statistics | Options
              ======================================
            */
           // 环境监测
        var en_options = {
            series: [90],
            chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px',
                  color: '#808a87', // 修改这里的颜色值为你想要的颜色
                  formatter: function (val) {
                    return val.toFixed(0); // 返回四舍五入的整数值，去掉百分号
                }
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: [{
                offset: 0,
                color: middleColor 
            },{
                offset: 100,
                color: '#FF0000' 
            }]
            },
          },
          labels: ['Average Results'],
          };




            /*
              ===================================
                  Unique Visitors | Options
              ===================================
            */
            

            var d_1options1 = {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#622bd7', '#ffbb44'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                        borderRadius: 10,

                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 8
                    }
                },
                grid: {
                    borderColor: '#191e3a',
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: '温度',
                    data: temp_data  // 替换为从后端传递的TEMP数据数组
                }, {
                    name: 'PH值',
                    data: ph_data  // 替换为从后端传递的PH数据数组
                }],
                xaxis: {
                    categories: ['day1','day2', 'day3', 'day4', 'day5', 'day6', 'day7'],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: Theme,
                        type: 'vertical',
                        shadeIntensity: 0.3,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0.8,
                        stops: [0, 100]
                    }
                },
                tooltip: {
                    marker : {
                        show: false,
                    },
                    theme: Theme,
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 767,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 0,
                                    columnWidth: "50%"
                                }
                            }
                        }
                    },
                ]
            }


        } else {

            var Theme = 'dark';

            Apex.tooltip = {
                theme: Theme
            }

            /**
             ==============================
             |    @Options Charts Script   |
             ==============================
             */

            /*
              ======================================
                  Visitor Statistics | Options
              ======================================
            */
           // 环境监测
           var en_options = {
            series: [90],
            chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px',
                  color: '#808a87', // 修改这里的颜色值为你想要的颜色
                  formatter: function (val) {
                    return val.toFixed(0); // 返回四舍五入的整数值，去掉百分号
                }
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 35, 70, 100],
              colorStops: [{
                offset: 0,
                color: middleColor 
            },{
                offset: 100,
                color: '#FF0000' 
            }]
            },
          },
          labels: ['Average Results'],
          };





            /*
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                chart: {
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#622bd7', '#ffbb44'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                        borderRadius: 10,

                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 8
                    }
                },
                grid: {
                    borderColor: '#e0e6ed',
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: '温度',
                    data: temp_data  // 替换为从后端传递的TEMP数据数组
                }, {
                    name: 'PH值',
                    data: ph_data  // 替换为从后端传递的PH数据数组
                }],
                xaxis: {
                    categories: ['day1','day2', 'day3', 'day4', 'day5', 'day6', 'day7'],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: Theme,
                        type: 'vertical',
                        shadeIntensity: 0.3,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 0.8,
                        stops: [0, 100]
                    }
                },
                tooltip: {
                    marker : {
                        show: false,
                    },
                    theme: Theme,
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                responsive: [
                    {
                        breakpoint: 767,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 0,
                                    columnWidth: "50%"
                                }
                            }
                        }
                    },
                ]
            }

        }

        /**
         ==============================
         |    @Render Charts Script    |
         ==============================
         */


        /*
            ======================================
                Visitor Statistics | Script
            ======================================
        */

        var enviroment = new ApexCharts(document.querySelector("#enviroment"), en_options);
        enviroment.render();

        /*
            ===================================
                Unique Visitors | Script
            ===================================
        */

        var d_1C_3 = new ApexCharts(
            document.querySelector("#uniqueVisits"),
            d_1options1
        );
        d_1C_3.render();







        /*
            =============================================
                Perfect Scrollbar | Notifications
            =============================================
        */
        const ps = new PerfectScrollbar(document.querySelector('.mt-container'));



        /**
         * =================================================================================================
         * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
         * =================================================================================================
         */

        document.querySelector('.theme-toggle').addEventListener('click', function() {

            getcorkThemeObject = localStorage.getItem("theme");
            getParseObject = JSON.parse(getcorkThemeObject)
            ParsedObject = getParseObject;

            // console.log(ParsedObject.settings.layout.darkMode)

            if (ParsedObject.settings.layout.darkMode) {

                /*
                   ==============================
                   |    @Re-Render Charts Script    |
                   ==============================
               */

                /*
                    ===================================
                        Unique Visitors | Script
                    ===================================
                */

                d_1C_3.updateOptions({
                    grid: {
                        borderColor: '#191e3a',
                    },
                })


                /*
                    ==============================
                        Statistics | Script
                    ==============================
                */

            } else {

                /*
                    ==============================
                    |    @Re-Render Charts Script    |
                    ==============================
                */

                /*
                    ===================================
                        Unique Visitors | Script
                    ===================================
                */

                d_1C_3.updateOptions({
                    grid: {
                        borderColor: '#e0e6ed',
                    },
                })

                /*
                    ==============================
                        Statistics | Script
                    ==============================
                */

            }

        })


    } catch(e) {
        // statements
        console.log(e);
    }

})