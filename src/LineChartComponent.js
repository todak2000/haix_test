import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function LineChartComponent(props) {
    const {lineData, handleClick} =props
    let data = lineData.map(item=>{
        return {x:item.date, y:item.meanSentiment.toFixed(2), z:item.index}
    })
  return (
    <ScatterChart
    width={350}
    height={250}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis type="category" dataKey="x" name="date" />
      <YAxis type="number" dataKey="y" name="sentiment" />
      <Tooltip viewBox={{ x: -3, y: 0, width: 100, height: 400 }}/>
      <Legend />
      <Scatter
        name="Average Sentiment"
        data={data}
        fill="#8884d8"
        line
        onClick={handleClick}
        shape="dot"
      />
    </ScatterChart>
  );
}
