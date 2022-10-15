
import "./App.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function BarChartComponent(props) {
    const {barData, dataKey, formatter, handleClick} = props;
  return (

        <BarChart
            width={350}
            height={250}
            barGap={0}
            barSize={30}
            data={barData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKey} />
            <YAxis />
            <Tooltip />
            <Legend formatter={formatter} iconSize={0}/>
            <Bar dataKey="positive" onClick={handleClick}>
            {barData.map((entry, index) => (
                <Cell
                cursor="pointer"
                fill="#ffc658" 
                key={`cell-${index}`}
                />
            ))}
            </Bar>
            <Bar dataKey="negative" onClick={handleClick}>
            {barData.map((entry, index) => (
                <Cell
                cursor="pointer"
                fill="#82ca9d"
                key={`cell-${index}`}
                />
            ))}
            </Bar>
            <Bar dataKey="neutral" onClick={handleClick}>
            {barData.map((entry, index) => (
                <Cell
                cursor="pointer"
                fill="#8884d8"
                key={`cell-${index}`}
                />
            ))}
            </Bar>
        </BarChart>
  );
}
