import react, { useEffect } from 'react';
import Chart from 'chart.js4/auto';
import zoomPlugin from 'chartjs-plugin-zoom2';

export default function (props) {
  Chart.register(zoomPlugin);
  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const myChart = new Chart(document.getElementById('acquisitions'), {
      type: 'bar',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count),
          },
        ],
      },
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'xy',
            },
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id={'acquisitions'} />
    </div>
  );
}
