import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data01 = [
  { x: 10, y: 10 },
  { x: 30, y: 30 },
  { x: 45, y: 45 },
  { x: 50, y: 50 },
  { x: 70, y: 70 },
  { x: 100, y: 100 }
];


export default function LineChartComponent(props) {
    const {lineData, handleClick} =props
    let data = lineData.map(item=>{
        // console.log(item)
        return {x:item.date, y:item.meanSentiment.toFixed(2), z:item.index}
    })
    // console.log(handleClick)
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

// import "./App.css";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend
// } from "recharts";


// export default function BarChartComponent(props) {
//     const {barData, dataKey, formatter, handleClick} = props;
//   return (

//         <BarChart
//             width={350}
//             height={200}
//             barGap={0}
//             barSize={30}
//             data={barData}
//             margin={{
//                 top: 20,
//                 right: 30,
//                 left: 20,
//                 bottom: 5
//             }}
//             >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey={dataKey} />
//             <YAxis />
//             <Tooltip />
//             <Legend formatter={formatter} iconSize={0}/>
//             <Bar dataKey="positive" onClick={handleClick}>
//             {barData.map((entry, index) => (
//                 <Cell
//                 cursor="pointer"
//                 fill="#ffc658" 
//                 key={`cell-${index}`}
//                 />
//             ))}
//             </Bar>
//             <Bar dataKey="negative" onClick={handleClick}>
//             {barData.map((entry, index) => (
//                 <Cell
//                 cursor="pointer"
//                 fill="#82ca9d"
//                 key={`cell-${index}`}
//                 />
//             ))}
//             </Bar>
//             <Bar dataKey="neutral" onClick={handleClick}>
//             {barData.map((entry, index) => (
//                 <Cell
//                 cursor="pointer"
//                 fill="#8884d8"
//                 key={`cell-${index}`}
//                 />
//             ))}
//             </Bar>
//         </BarChart>
//   );
// }
