"use client"

import { Bar } from "react-chartjs-2"
import Utils from "react-chartjs-2"
export const BarChart = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = ["j", "k", "o", "ll", "ii", "66"];
  return (
    <div className="w-full mt-auto ">
      <Bar
        data={
          {
            labels: labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: [23, 77, 55, 22, 34, 45],
                borderColor: "red",
                backgroundColor: "rgba(255,99,132,0.6)"
              },
              {
                label: 'Dataset 2',
                data: [55, 66, 34, 32, 12, 43],
                borderColor: "#e1575f",
                backgroundColor: "rgba(200,99,132,0.6)"
              },
              {
                label: 'Dataset 3',
                data: [155, 166, 324, 132, 122, 42],
                borderColor: "#e1575f",
                backgroundColor: "rgba(290,99,132,0.6)"
              },
            ]
          }
        }
      />
    </div>
  )
}