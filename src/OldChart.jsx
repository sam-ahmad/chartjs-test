import react, { useEffect } from 'react';
import Chart from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

export default function (props) {
  useEffect(() => {
    var ctx = document.getElementById('old-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        plugins: {
          zoom: {
            // Container for pan options
            pan: {
              // Boolean to enable panning
              enabled: true,

              // Panning directions. Remove the appropriate direction to disable
              // Eg. 'y' would only allow panning in the y direction
              mode: 'xy',
            },

            // Container for zoom options
            zoom: {
              // Boolean to enable zooming
              enabled: true,

              // Zooming directions. Remove the appropriate direction to disable
              // Eg. 'y' would only allow zooming in the y direction
              mode: 'xy',
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id={'old-chart'} />
    </div>
  );
}
