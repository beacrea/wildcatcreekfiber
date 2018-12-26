// CommitChart.js
import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Resident Avg', 'Service Provider Promised', 'FCC Area Report'],
      datasets: [
        {
          title: 'Download Speeds (Mbps)',
          backgroundColor: 'rgb(81, 40, 136)',
          data: [3.5, 6, 25]
        }
      ]
    }, {
      title: {
        display: false,
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
            return tooltipItems.xLabel + ' mbps'
          }
        }
      }
    })
  }
}
