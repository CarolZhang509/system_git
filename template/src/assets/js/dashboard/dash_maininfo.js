
window.addEventListener("load", function(){
    try {

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
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                chart: {
                    height: 350,
                    type: 'line',
                    toolbar: {
                        show: false,
                    }
                },
                series: [{
                    name: 'Precipitation',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: 'Temperature',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }],
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'History Data'
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Precipitation',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Temperature',
                    }
                }]

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
              ===================================
                  Unique Visitors | Options
              ===================================
            */

            var d_1options1 = {
                chart: {
                    height: 350,
                    type: 'line',
                    toolbar: {
                        show: false,
                    }
                },
                series: [{
                    name: 'Precipitation',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: 'Temperature',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }],
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'History Data'
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Precipitation',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Temperature',
                    }
                }]

            }
        }

        /**
         ==============================
         |    @Render Charts Script    |
         ==============================
         */

        /*
            ===================================
                Unique Visitors | Script
            ===================================
        */

        var d_1C_3 = new ApexCharts(
            document.querySelector("#historydata"),
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

            }

        })


    } catch(e) {
        // statements
        console.log(e);
    }

})