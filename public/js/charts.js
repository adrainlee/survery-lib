// 图表配置和初始化
export const initCharts = () => {
    const satisfactionChart = new Chart(
        document.getElementById('satisfactionChart'),
        {
            type: 'bar',
            data: {
                labels: ['1分', '2分', '3分', '4分', '5分'],
                datasets: [{
                    label: '当前版本',
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: '#3498db'
                }, {
                    label: '对比版本',
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: '#e74c3c',
                    hidden: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        }
    );

    const ageChart = new Chart(
        document.getElementById('ageChart'),
        {
            type: 'pie',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                        '#3498db',
                        '#2ecc71',
                        '#f1c40f',
                        '#e74c3c',
                        '#9b59b6',
                        '#34495e'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        }
    );

    const featuresChart = new Chart(
        document.getElementById('featuresChart'),
        {
            type: 'horizontalBar',
            data: {
                labels: [],
                datasets: [{
                    label: '当前版本',
                    data: [],
                    backgroundColor: '#3498db'
                }, {
                    label: '对比版本',
                    data: [],
                    backgroundColor: '#e74c3c',
                    hidden: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: { beginAtZero: true }
                }
            }
        }
    );

    return { satisfactionChart, ageChart, featuresChart };
};

// 更新图表数据
export const updateCharts = (charts, data, isCompare = false) => {
    const { satisfactionChart, ageChart, featuresChart } = charts;
    const datasetIndex = isCompare ? 1 : 0;

    // 更新满意度图表
    satisfactionChart.data.datasets[datasetIndex].data = Array(5).fill(0);
    data.satisfactionStats.forEach(stat => {
        satisfactionChart.data.datasets[datasetIndex].data[stat._id - 1] = stat.count;
    });
    satisfactionChart.data.datasets[datasetIndex].hidden = false;
    satisfactionChart.update();

    // 更新年龄分布图表（只显示当前版本）
    if (!isCompare) {
        ageChart.data.labels = data.ageDistribution.map(d => d._id);
        ageChart.data.datasets[0].data = data.ageDistribution.map(d => d.count);
        ageChart.update();
    }

    // 更新功能偏好图表
    if (!isCompare) {
        featuresChart.data.labels = data.featurePreferences.map(d => d._id);
        featuresChart.data.datasets[datasetIndex].data = data.featurePreferences.map(d => d.count);
    } else {
        featuresChart.data.datasets[datasetIndex].data = featuresChart.data.labels.map(label => {
            const feature = data.featurePreferences.find(d => d._id === label);
            return feature ? feature.count : 0;
        });
    }
    featuresChart.data.datasets[datasetIndex].hidden = false;
    featuresChart.update();
};