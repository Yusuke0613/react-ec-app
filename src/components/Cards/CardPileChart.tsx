import React from "react";
import { Doughnut } from "react-chartjs-2";

const CardPileChart: React.FC = () => {
 
  const data =  {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        data: [
          10667217,
          5464367,
          515646,
        ],
        backgroundColor: [
          "rgba(0, 0, 255, 0.5)",
          "#008080",
          "rgba(255, 0, 0, 0.5)",
        ],
        hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
        borderColor: ["transparent", "transparent", "transparent"],
      },
    ]
  }
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 15,
      },
    }
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
          <Doughnut
            height={350}
            options={options}
            data={data}
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default  CardPileChart;