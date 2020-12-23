import 'chart.js/dist/Chart';
import 'chart.js/dist/Chart.css';

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    maintainAspectRatio: false,
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: (value) => `${+(value / 10e3).toFixed(9)}K`,
                },
            }],
        },
    },
});

export { ctx, myChart };
