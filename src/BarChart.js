import "./App.css";
import React, {useEffect, useState} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { dummyData } from "./data/data";
import ChartDetails from "./ChartDetails";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];

export default function BarChartScreen() {
    const [barData, setBarData] = useState([])
    const [convoData, setConvoData] = useState([])
    const getData = ()=>{
        let dataArr = []
        let convoArr = []
        let stat = dummyData.stats.twitter.timelineStats.timeline
        
        Object.values(stat).map((item)=>
        {
            let convo = item.allTweets
            // console.log(convo)
            Object.values(convo).map((x) =>{
                let z = {
                    date: x.date.substring(0,10),
                    time: x.date.substring(11,19),
                    dateWords: x.created,
                    comment: x.tweet,
                    sentimentPolarityLabel: x.sentimentPolarityLabel,
                }
                convoArr.push(z)
                return convoArr
                // console.log(z)
            })
            let y = {
                date: item.currentTimeStamp.substring(0,10),
                positive: item.sentimentAsCategories.positiveTweets,
                negative: item.sentimentAsCategories.negativeTweets,
                neutral: item.sentimentAsCategories.neutralTweets
            }

            dataArr.push(y)
            return dataArr
        })
        setBarData(dataArr)
        setConvoData(convoArr)
        
    }
    // console.log(barData[0].date)
    console.log(convoData)
    useEffect(()=>{
        getData()
    }, [])
  return (
    <div className="container">
        <BarChart
            width={600}
            height={400}
            barGap={0}
            barSize={70}
            data={barData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="positive" fill="#8884d8"  onClick={()=>{console.log("hi")}}/>
            <Bar dataKey="negative"  fill="#82ca9d"  />
            <Bar dataKey="neutral" fill="#ffc658"  />
        </BarChart>
        <div className="chart-container">
            <ChartDetails />
            {/* <ChartDetails /> */}
        </div>
        
    </div>
  );
}
