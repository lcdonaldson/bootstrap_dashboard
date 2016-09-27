$(function () {
    $('.mychart').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Recent Users'
        },
        // legend: {
            // layout: 'vertical',
            // align: 'left',
            // verticalAlign: 'top',
            // x: 150,
            // y: 100,
            // floating: true,
            // borderWidth: 1,
            // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        // },
        // xAxis: {
        //     categories: [
        //         '1',
        //         '2',
        //         '3',
        //         '4',
        //         '5',
        //         '6',
        //         '7'
        //     ],
        //     plotBands: [{ // visualize the weekend
        //         from: 4.5,
        //         to: 6.5,
        //         color: 'rgba(68, 170, 213, .2)'
        //     }]
        // },
        yAxis: {
            title: {
                text: 'Daily Signups'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Users',
            data: [2, 4, 3, 5, 4, 10, 6, 8, 11, 12]    
        }]
    });
});
