import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
const data = [
  {
    data: {
      wizard: 0.3,
      bard: 0.6,
      knight: 0.85,
      arbitter: 0.5,
      merchant: 0.6,
      priest: 0.7,
      marshal: 0.5,
      alchemist: 1,
    },
    meta: { color: "red" },
  },
];

const captions = {
  // columns
  wizard: "Wizard",
  bard: "Bard",
  knight: "Knight",
  arbitter: "Arbitter",
  merchant: "Merchant",
  priest: "Priest",
  marshal: "Marshal",
  alchemist: "Alchemist",
};

function Chart() {
  return (
    <div className="card align-center">
      <RadarChart captions={captions} data={data} size={250} />
    </div>
  );
}

export default Chart;
