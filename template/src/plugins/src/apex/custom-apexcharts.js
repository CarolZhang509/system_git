window.addEventListener("load", function () {

        getcorkThemeObject = localStorage.getItem("theme");
        getParseObject = JSON.parse(getcorkThemeObject)
        ParsedObject = getParseObject;

        if (ParsedObject.settings.layout.darkMode) {

            Apex.grid = {
                borderColor: '#191e3a'
            }
            Apex.track = {
                background: '#0e1726',
            }
            Apex.tooltip = {
                theme: 'dark'
            }

            // Simple Line

            var sline = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                series: [{
                    name: "总销售额",
                    data: [100, 410, 350, 510, 490, 620, 690, 910, 1480, 1960, 1280, 880]
                }],
                title: {
                    text: '水产品销售总额逐月展示(单位:万元)',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#3b3f5c', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                }
            }


            // Simple Line Area

            var sLineArea = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                series: [{
                    name: '南岸基',
                    data: [31, 40, 28, 51, 42, 109, 100, 89, 98, 102, 120, 88]
                }, {
                    name: '北岸基',
                    data: [11, 32, 45, 32, 34, 52, 41, 49, 60, 70, 80, 90]
                }],
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            }

            // Simple Column

            var sCol = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: 'XX养殖法',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }, {
                    name: 'YY养殖法',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                }],
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                xaxis: {
                    categories: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
                },
                yaxis: {
                    title: {
                        text: '产苗量（千个）'
                    }
                },
                fill: {
                    opacity: 1

                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            }


            // Simple Column Stacked

            var sColStacked = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                        show: true,
                    },
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: false
                    },
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                series: [{
                    name: '智能计算与预测、决策模块',
                    data: [44, 55, 41, 67, 22, 43]
                }, {
                    name: '传感器管理模块',
                    data: [13, 23, 20, 8, 13, 27]
                }, {
                    name: '数据采集与存储模块',
                    data: [11, 17, 15, 15, 21, 14]
                }, {
                    name: '数据基本统计与分析模块',
                    data: [21, 7, 25, 13, 22, 8]
                }],
                xaxis: {
                    type: 'datetime',
                    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
                    labels: {
                        rotate: -30,
                        rotateAlways: true,
                        formatter: function (value) {
                            const date = new Date(value);
                            return date.toLocaleDateString('zh-CN', {
                                month: 'long',
                                day: 'numeric'
                            });
                        }
                    },
                    axisBorder: {
                        show: true
                    },
                    axisTicks: {
                        show: true
                    }
                },


                legend: {
                    position: 'right',
                    offsetY: 40,
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                fill: {
                    opacity: 1
                },
            }

            // Simple Bar

            var sBar = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }],
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                }
            }


            // Mixed Chart

            var options = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'line',
                    toolbar: {
                        show: true,
                    }
                },
                series: [{
                    name: '平均溶解氧含量',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: '平均水温',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }],
                stroke: {
                    width: [0, 4]
                },
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                labels: ['3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日', '3月8日', '3月9日', '3月10日', '3月11日', '3月12日'],
                xaxis: {
                },
                yaxis: [{
                    title: {
                        text: '平均溶解氧含量',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: '平均水温'
                    }
                }]

            }


            // Donut Chart


            var donutChart = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 400,
                    type: 'donut',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: '总数',
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                    }
                                }
                            }
                        }
                    }
                },

                stroke: {
                    colors: '#0e1726'
                },
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                labels: ['鲤鱼', '鲑鱼', '罗非鱼', '鳟鱼'],
                series: [440, 550, 410, 170],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }


            // Radial Chart

            var radialChart = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 500,
                    type: 'radialBar',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    radialBar: {
                        // 调整径向条形图环的大小和轨道
                        hollow: {
                            margin: 5, // 环的外边距
                            size: '30%', // 环的大小，减小百分比可以增加厚度
                            background: 'transparent', // 背景色
                        },
                        track: {
                            show: true,
                            background: '#f2f2f2', // 轨道的背景色
                            strokeWidth: '70%', // 轨道的宽度，相对于环的厚度
                            opacity: 1, // 轨道的不透明度
                            margin: 10, // 轨道与环之间的间隙
                        },
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: '总数',
                                fontSize: '20px',
                                formatter: function (w) {
                                    let totalSum = w.globals.seriesTotals.reduce((total, num) => total + num, 0);
                                    let average = totalSum / w.globals.series.length; // 使用系列长度来计算平均值
                                    return average.toFixed(2) + '%'; // 返回保留两位小数的平均值
                                }
                            }
                        }
                    }
                },
                series: [44, 55, 67, 83],
                labels: ['鲤鱼养殖团队', '鲑鱼成长小组', '罗非鱼培养部', '鳟鱼繁育集团'],
                legend: {
                    show: true, // 设置为true以显示图例
                    floating: false,
                    position: 'bottom', // 图例的位置，可以是 'top', 'bottom', 'left', 'right'
                    fontSize: '16px',
                    labels: {
                        colors: undefined, // 可以设置为特定颜色数组
                        useSeriesColors: false // 设置为true以使用系列颜色
                    },
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined, // 可以设置为特定颜色数组
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 5
                    },
                    onItemClick: {
                        toggleDataSeries: true
                    },
                    onItemHover: {
                        highlightDataSeries: true
                    }
                }
            }

        } else {

            Apex.grid = {
                borderColor: '#ebedf2'
            }
            Apex.track = {
                background: '#e0e6ed',
            }
            Apex.tooltip = {
                theme: 'dark'
            }

            // Simple Line

            var sline = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                series: [{
                    name: "总销售额",
                    data: [100, 410, 350, 510, 490, 620, 690, 910, 1480, 1960, 1280, 880]
                }],
                title: {
                    text: '水产品销售总额逐月展示(单位:万元)',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#e0e6ed', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                }
            }


            // Simple Line Area

            var sLineArea = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                series: [{
                    name: '南岸基',
                    data: [31, 40, 28, 51, 42, 109, 100, 89, 98, 102, 120, 88]
                }, {
                    name: '北岸基',
                    data: [11, 32, 45, 32, 34, 52, 41, 49, 60, 70, 80, 90]
                }],
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            }

            // Simple Column

            var sCol = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: 'XX养殖法',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                }, {
                    name: 'YY养殖法',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                }],
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                xaxis: {
                    categories: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
                },
                yaxis: {
                    title: {
                        text: '产苗量（千个）'
                    }
                },
                fill: {
                    opacity: 1

                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            }


            // Simple Column Stacked

            var sColStacked = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                        show: true,
                    },
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: false
                    },
                    // 增加底部边距
                    offsetY: 20,
                    offsetX: 20
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                series: [{
                    name: '智能计算与预测、决策模块',
                    data: [44, 55, 41, 67, 22, 43]
                }, {
                    name: '传感器管理模块',
                    data: [13, 23, 20, 8, 13, 27]
                }, {
                    name: '数据采集与存储模块',
                    data: [11, 17, 15, 15, 21, 14]
                }, {
                    name: '数据基本统计与分析模块',
                    data: [21, 7, 25, 13, 22, 8]
                }],
                xaxis: {
                    type: 'datetime',
                    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
                    labels: {
                        rotate: -30,
                        rotateAlways: true,
                        formatter: function (value) {
                            const date = new Date(value);
                            return date.toLocaleDateString('zh-CN', {
                                month: 'long',
                                day: 'numeric'
                            });
                        }
                    },
                    axisBorder: {
                        show: true
                    },
                    axisTicks: {
                        show: true
                    }
                },


                legend: {
                    position: 'right',
                    offsetY: 40,
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                fill: {
                    opacity: 1
                },
            }

            // Simple Bar

            var sBar = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'bar',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }],
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                }
            }


            // Mixed Chart

            var options = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 350,
                    type: 'line',
                    toolbar: {
                        show: true,
                    }
                },
                series: [{
                    name: '平均溶解氧含量',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: '平均水温',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }],
                stroke: {
                    width: [0, 4]
                },
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                labels: ['3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日', '3月8日', '3月9日', '3月10日', '3月11日', '3月12日'],
                xaxis: {
                },
                yaxis: [{
                    title: {
                        text: '平均溶解氧含量',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: '平均水温'
                    }
                }]

            }


            // Donut Chart


            var donutChart = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 400,
                    type: 'donut',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: '总数',
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                    }
                                }
                            }
                        }
                    }
                },

                stroke: {
                    colors: '#0e1726'
                },
                legend: {
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    }
                },
                labels: ['鲤鱼', '鲑鱼', '罗非鱼', '鳟鱼'],
                series: [440, 550, 410, 170],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }


            // Radial Chart

            var radialChart = {
                chart: {
                    fontFamily: 'Nunito, Arial, sans-serif',
                    height: 500,
                    type: 'radialBar',
                    toolbar: {
                        show: true,
                    }
                },
                plotOptions: {
                    radialBar: {
                        // 调整径向条形图环的大小和轨道
                        hollow: {
                            margin: 5, // 环的外边距
                            size: '30%', // 环的大小，减小百分比可以增加厚度
                            background: 'transparent', // 背景色
                        },
                        track: {
                            show: true,
                            background: '#f2f2f2', // 轨道的背景色
                            strokeWidth: '70%', // 轨道的宽度，相对于环的厚度
                            opacity: 1, // 轨道的不透明度
                            margin: 10, // 轨道与环之间的间隙
                        },
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: '总数',
                                fontSize: '20px',
                                formatter: function (w) {
                                    let totalSum = w.globals.seriesTotals.reduce((total, num) => total + num, 0);
                                    let average = totalSum / w.globals.series.length; // 使用系列长度来计算平均值
                                    return average.toFixed(2) + '%'; // 返回保留两位小数的平均值
                                }
                            }
                        }
                    }
                },
                series: [44, 55, 67, 83],
                labels: ['鲤鱼养殖团队', '鲑鱼成长小组', '罗非鱼培养部', '鳟鱼繁育集团'],
                legend: {
                    show: true, // 设置为true以显示图例
                    floating: false,
                    position: 'bottom', // 图例的位置，可以是 'top', 'bottom', 'left', 'right'
                    fontSize: '16px',
                    labels: {
                        colors: undefined, // 可以设置为特定颜色数组
                        useSeriesColors: false // 设置为true以使用系列颜色
                    },
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined, // 可以设置为特定颜色数组
                        radius: 12,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 5
                    },
                    onItemClick: {
                        toggleDataSeries: true
                    },
                    onItemHover: {
                        highlightDataSeries: true
                    }
                }
            }

        }

        // Simple Line

        var simpleLine = new ApexCharts(
            document.querySelector("#s-line"),
            sline
        );

        simpleLine.render();


        // Simple Line Area

        var simpleLineArea = new ApexCharts(
            document.querySelector("#s-line-area"),
            sLineArea
        );

        simpleLineArea.render();

        // Simple Column

        var simpleColumn = new ApexCharts(
            document.querySelector("#s-col"),
            sCol
        );

        simpleColumn.render();


        // Simple Column Stacked

        var simpleColumnStacked = new ApexCharts(
            document.querySelector("#s-col-stacked"),
            sColStacked
        );

        simpleColumnStacked.render();

        // Simple Bar

        var simpleBar = new ApexCharts(
            document.querySelector("#s-bar"),
            sBar
        );

        simpleBar.render();


        // Mixed Chart

        var mixed = new ApexCharts(
            document.querySelector("#mixed-chart"),
            options
        );

        mixed.render();


        // Donut Chart

        var donut = new ApexCharts(
            document.querySelector("#donut-chart"),
            donutChart
        );

        donut.render();


        // Radial Chart
        var radialChart = new ApexCharts(
            document.querySelector("#radial-chart"),
            radialChart
        );

        radialChart.render();


        /**
         * =================================================================================================
         * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
         * =================================================================================================
         */

        document.querySelector('.theme-toggle').addEventListener('click', function () {

            getcorkThemeObject = localStorage.getItem("theme");
            getParseObject = JSON.parse(getcorkThemeObject)
            ParsedObject = getParseObject;

            // console.log(ParsedObject.settings.layout.darkMode)

            if (ParsedObject.settings.layout.darkMode) {


                simpleLine.updateOptions({
                    grid: {
                        borderColor: '#191e3a',
                        row: {
                            colors: ['#3b3f5c', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                })


                simpleLineArea.updateOptions({
                    grid: {
                        borderColor: '#191e3a'
                    },
                })

                simpleColumn.updateOptions({
                    grid: {
                        borderColor: '#191e3a'
                    },
                })

                simpleColumnStacked.updateOptions({
                    grid: {
                        borderColor: '#191e3a'
                    },
                })

                simpleBar.updateOptions({
                    grid: {
                        borderColor: '#191e3a'
                    },
                })

                mixed.updateOptions({
                    grid: {
                        borderColor: '#191e3a'
                    },
                })

                donut.updateOptions({
                    stroke: {
                        colors: '#0e1726'
                    }
                })


            } else {
                // Apex.grid = {
                //     borderColor: '#ebedf2'
                // }
                // Apex.track = {
                //     background: '#e0e6ed',
                // }
                // Apex.tooltip = {
                //     theme: 'dark'
                // }


                simpleLine.updateOptions({
                    grid: {
                        borderColor: '#ebedf2',
                        row: {
                            colors: ['#e0e6ed', 'transparent'], // takes an array which will be repeated on columns
                            opacity: 0.5
                        },
                    },
                })


                simpleLineArea.updateOptions({
                    grid: {
                        borderColor: '#ebedf2'
                    },
                })

                simpleColumn.updateOptions({
                    grid: {
                        borderColor: '#ebedf2'
                    },
                })

                simpleColumnStacked.updateOptions({
                    grid: {
                        borderColor: '#ebedf2'
                    },
                })

                simpleBar.updateOptions({
                    grid: {
                        borderColor: '#ebedf2'
                    },
                })

                mixed.updateOptions({
                    grid: {
                        borderColor: '#ebedf2'
                    },
                })

                donut.updateOptions({
                    stroke: {
                        colors: '#e0e6ed'
                    }
                })

            }

        })

    }
)