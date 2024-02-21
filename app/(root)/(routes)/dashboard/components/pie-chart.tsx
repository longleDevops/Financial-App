"use client"

import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2"
const PieChart = () => {
  const options = {}
  const data = {

    datasets: [{
      label: '',
      data: [300, 50, 100, 599],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 205, 22)'
      ],
      borderWidth: 4,
      hoverOffset: 15,

    }]
  };

  return (
    <div className='flex-1 border border-red-500 h-[200px] justify-center items-center flex relative'>
      <div className='absolute flex flex-col items-center'>
        <p className='font-medium'>25</p>
        <p className='text-xs text-muted-foreground'>Stocks</p>
      </div>
      <div className='w-[160px]'>
        <Doughnut
          data={
            {
              labels: [
                'AAPL',
                'PYPL',
                'AMD',
                'AMZN',
                'TREE'
              ],
              datasets: [{
                label: '',
                data: [152, 300, 500, 600, 200],
                // backgroundColor: [
                //   'rgb(255, 99, 132)',
                //   'rgb(54, 162, 235)',
                //   'rgb(255, 205, 86)',
                //   'rgb(255, 205, 22)'
                // ],
                borderWidth: 4,
                hoverOffset: 15,
                hoverBorderColor: '#6149cd',
              }]
            }
          }
          options={
            {
              color: 'black',
              layout: {
                padding: 10
              },
              plugins: {
                legend: {
                  display: false
                }
              },
              cutout: '65%'

            }
          }

        />
      </div>
    </div>
  )
}

export default PieChart;