// src/components/ChartCard.jsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { chartColors } from '../data/surveyResults';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const ChartCard = ({ title, data, labels, chartType = 'pie', multipleSelection = false }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: chartColors.slice(0, data.length),
        borderColor: chartColors.map(color => color.replace('0.7', '1')),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12
          },
          boxWidth: 15,
          padding: 15
        }
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 15
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
            
            // For multiple selection questions, don't show percentage relative to total
            // as users can select multiple options
            if (multipleSelection) {
              return `${label}: ${value} persona`;
            } else {
              const percentage = Math.round((value / total) * 100);
              return `${label}: ${value} persona (${percentage}%)`;
            }
          }
        }
      }
    },
    // Specific options for bar charts
    ...(chartType === 'bar' && {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          },
          title: {
            display: true,
            text: 'Numri i personave'
          }
        },
        x: {
          ticks: {
            font: {
              size: 10
            }
          }
        }
      },
      indexAxis: 'x',
    })
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="w-full h-[300px] flex justify-center items-center">
        {chartType === 'pie' ? (
          <Pie data={chartData} options={chartOptions} />
        ) : (
          <Bar data={chartData} options={chartOptions} height={300} />
        )}
      </div>
    </div>
  );
};

export default ChartCard;