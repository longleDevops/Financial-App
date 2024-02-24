"use client"

import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2"
export function DoughnutChart() {
  const options = {}
  const data =
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
  };

  return (
    <div className='relative flex items-center justify-center h-[40vh]'>
      <div className='absolute flex flex-col items-center'>
        <p className='text-lg font-medium'>25</p>
        <p className='text-xs text-muted-foreground'>Stocks</p>
      </div>
      <div className='w-[180px] h-[180px]'>
        <Doughnut
          data={data}
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

