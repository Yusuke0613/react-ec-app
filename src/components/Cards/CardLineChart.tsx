import React from "react";
import { Line } from 'react-chartjs-2';

const CardLineChart: React.FC = () => {
  const  labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]

  const data01 = [65, 78, 66, 44, 56, 67, 75]
  const data02 = [40, 68, 86, 74, 56, 60, 87]
  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative">
          <Line
            height={350}
            options={options}
            data={{
              labels: labels.map((value) => value),
              datasets: [
                {
                  data: data01.map((value) => value),
                  label: "Infected",
                  borderColor: "#3333ff",
                  fill: false,
                },
                {
                  data: data02.map((value) => value),
                  label: "Deaths",
                  borderColor: "#ff3370",
                  fill: false,
                },
              ],
            }}
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default  CardLineChart;