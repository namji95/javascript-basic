let xAxisData = ['철수','영희','민수','지수'];
let seriesData = [70,80,100,30];

window.onload = function() {
    $('#drawLine').on('click', drawChart);
    $('#drawBar').on('click', drawChart);
    // document.getElementById("drawLine").addEventListener('click', drawChart);
    // document.getElementById("drawBar").addEventListener('click', drawChart);
}

function drawChart() {
    let myChart = echarts.init(document.getElementById('chart'));
    // let myChart = echarts.init($('#chart'));

    let option = {
        xAxis: {
            type: 'category',
            data: xAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: seriesData,
                type: this.value
            }
        ]
    };
    myChart.setOption(option);
}