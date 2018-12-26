// CommitChart.js
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Community Avg', 'Kansas', 'Avg US', 'World'],
      datasets: [
        {
          title: 'Download Speeds (Mbps)',
          backgroundColor: 'rgb(81, 40, 136)',
          data: [3.5, 42.6, 64.17, 40]
        }
      ]
    }, {
      title: {
        display: true,
        text: 'Comparative Download Speeds (mbps)*',
        fontSize: 18,
        padding: 16
      },
      legend: {
        display: false,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function (tooltipItems, data) {
            return tooltipItems.yLabel + ' mbps'
          }
        }
      }
    })
  }
}
