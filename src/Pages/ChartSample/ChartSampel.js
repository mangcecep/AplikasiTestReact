import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

import CanvasJSReact from "../../assets/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartSampel() {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Trip Expenses",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 20, label: "Airfare" },
          { y: 24, label: "Food & Drinks" },
          { y: 20, label: "Accomodation" },
          { y: 14, label: "Transportation" },
          { y: 12, label: "Activities" },
          { y: 10, label: "Misc" },
        ],
      },
    ],
  };

  const data = [
    {
      data: {
        battery: 0.7,
        design: 0.8,
        useful: 0.9,
        speed: 0.67,
        weight: 0.8,
      },
      meta: { color: "blue" },
    },
    {
      data: {
        battery: 0.6,
        design: 0.85,
        useful: 0.5,
        speed: 0.6,
        weight: 0.7,
      },
      meta: { color: "red" },
    },
  ];

  const captions = {
    // columns
    battery: "Battery Capacity",
    design: "Design",
    useful: "Usefulness",
    speed: "Speed",
    weight: "Weight",
  };

  return (
    <div className="container mt-4">
      <h1>React Chart with Animation</h1>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      <h1 className="mt-3">Radar – Multiple Series</h1>
      <RadarChart captions={captions} data={data} size={450} />
    </div>
  );
}

export default ChartSampel;
